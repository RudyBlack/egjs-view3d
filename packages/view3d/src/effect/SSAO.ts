import View3DEffect, { PassType } from "./View3DEffect";
import View3D from "../View3D";
import { FullScreenQuad, Pass } from "three/examples/jsm/postprocessing/Pass";
import * as THREE from "three";
import {
  AddEquation, Color, CustomBlending, DataTexture, DepthTexture, DstAlphaFactor, DstColorFactor, FloatType, LinearFilter, MathUtils, Matrix4, MeshNormalMaterial, NearestFilter, NoBlending, RepeatWrapping, RGBAFormat, ShaderMaterial, UniformsUtils, UnsignedShortType, Vector2, Vector3, WebGLRenderer, WebGLRenderTarget, ZeroFactor
} from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise";
import { SSAOBlurShader, SSAODepthShader, SSAOShader } from "./shader/ssaoShader";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader";


export interface SSAOOptions {

}

class SSAO extends View3DEffect {
  private _ssaoPass: PassType | null;

  public getPass() {
    return this._ssaoPass;
  }

  public init(view3D: View3D) {

    const scene = view3D.scene.root;
    const camera = view3D.camera.threeCamera;
    const { width, height } = view3D.renderer.canvasSize;
    const ssaoPass = new SSAOPass(scene, camera, width, height);
    return this._ssaoPass = ssaoPass;
  }

}

class SSAOPass extends Pass {

  private _width: number;
  private _height: number;
  private _scene: THREE.Scene;
  private _camera: THREE.PerspectiveCamera;

  private _beautyRenderTarget: WebGLRenderTarget;
  private _fsQuad: FullScreenQuad;

  private _clear: boolean;
  private _kernelRadius: number;
  private _kernelSize: number;
  private _kernel: any[];
  private _noiseTexture: DataTexture;
  private output: number;

  private _visibilityCache: Map<any, any>;
  private _normalRenderTarget: THREE.WebGLRenderTarget;
  private _ssaoRenderTarget: THREE.WebGLRenderTarget;
  private _blurRenderTarget: WebGLRenderTarget;
  private _ssaoMaterial: ShaderMaterial;
  private _normalMaterial: MeshNormalMaterial;
  private _blurMaterial: ShaderMaterial;
  private _depthRenderMaterial: ShaderMaterial;
  private _copyMaterial: ShaderMaterial;
  private _originalClearColor: Color;

  private _minDistance: number;
  private _maxDistance: number;

  private _intensive: number;

  public set intensive(val) {
    this._intensive = val;
  }

  public set kernelRadius(val) {
    this._kernelRadius = val;
  }

  public set minDistance(val) {
    this._minDistance = val;
  }

  public set maxDistance(val) {
    this._maxDistance = val;
  }


  constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, width, height) {
    super();

    this.output = 1;

    this._width = width;
    this._height = height;
    this._scene = scene;
    this._camera = camera;

    this._clear = true;
    this._kernelRadius = 0.8;
    this._kernelSize = 32;
    this._kernel = [];

    this._minDistance = 0.01;
    this._maxDistance = 1;
    this._intensive = 2;

    this._visibilityCache = new Map();

    this._fsQuad = new FullScreenQuad();

    this._kernel = this._getSampleKernel();
    this._noiseTexture = this._setNoiseTexture(); // generateRandomKernelRotations


    const depthTexture = new DepthTexture(width, height);
    depthTexture.type = UnsignedShortType;

    this._beautyRenderTarget = new WebGLRenderTarget(this._width, this._height, {
      minFilter: LinearFilter, magFilter: LinearFilter, format: RGBAFormat
    });

    this._normalRenderTarget = new WebGLRenderTarget(this._width, this._height, {
      minFilter: NearestFilter, magFilter: NearestFilter, format: RGBAFormat, depthTexture: depthTexture
    });

    this._ssaoRenderTarget = new WebGLRenderTarget(this._width, this._height, {
      minFilter: LinearFilter, magFilter: LinearFilter, format: RGBAFormat
    });

    this._blurRenderTarget = new WebGLRenderTarget(this._width, this._height, {
      minFilter: LinearFilter, magFilter: LinearFilter, format: RGBAFormat
    });

    this._ssaoMaterial = this._setSSAOMaterial();

    this._normalMaterial = this._setNormalMaterial();

    this._blurMaterial = this._setBlurMaterial();

    // material for rendering the content of a render target
    this._copyMaterial = this._setCopyMaterial();

    this._fsQuad = new FullScreenQuad();

    this._originalClearColor = new Color();

  }

  render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, deltaTime: number, maskActive: boolean) {
    // render beauty

    renderer.setRenderTarget(this._beautyRenderTarget);
    renderer.clear();
    renderer.render(this._scene, this._camera);

    // render normals and depth (honor only meshes, points and lines do not contribute to SSAO)

    this.overrideVisibility();
    this.renderOverride(renderer, this._normalMaterial, this._normalRenderTarget, 0x7777ff, 1.0);
    this.restoreVisibility();

    // render SSAO

    this._ssaoMaterial.uniforms[ "kernelRadius" ].value = this._kernelRadius;
    this._ssaoMaterial.uniforms[ "minDistance" ].value = this._minDistance;
    this._ssaoMaterial.uniforms[ "maxDistance" ].value = this._maxDistance;
    this.renderPass(renderer, this._ssaoMaterial, this._ssaoRenderTarget);

    // render blur

    this.renderPass(renderer, this._blurMaterial, this._blurRenderTarget);


    switch (this.output) {

      case 1:

        this._copyMaterial.uniforms[ "tDiffuse" ].value = this._ssaoRenderTarget.texture;
        this._copyMaterial.blending = NoBlending;
        this.renderPass(renderer, this._copyMaterial, this.renderToScreen ? null : writeBuffer);

        break;

      case 2:

        this._copyMaterial.uniforms[ "tDiffuse" ].value = this._blurRenderTarget.texture;
        this._copyMaterial.blending = NoBlending;
        this.renderPass(renderer, this._copyMaterial, this.renderToScreen ? null : writeBuffer);

        break;

      case 3:

        this._copyMaterial.uniforms[ "tDiffuse" ].value = this._beautyRenderTarget.texture;
        this._copyMaterial.blending = NoBlending;
        this.renderPass(renderer, this._copyMaterial, this.renderToScreen ? null : writeBuffer);

        break;

      case 4:

        this.renderPass(renderer, this._depthRenderMaterial, this.renderToScreen ? null : writeBuffer);

        break;

      case 5:

        this._copyMaterial.uniforms[ "tDiffuse" ].value = this._normalRenderTarget.texture;
        this._copyMaterial.blending = NoBlending;
        this.renderPass(renderer, this._copyMaterial, this.renderToScreen ? null : writeBuffer);

        break;

      case 0:

        this._copyMaterial.uniforms[ "tDiffuse" ].value = this._beautyRenderTarget.texture;
        this._copyMaterial.blending = NoBlending;
        this.renderPass(renderer, this._copyMaterial, this.renderToScreen ? null : writeBuffer);

        this._copyMaterial.uniforms[ "tDiffuse" ].value = this._blurRenderTarget.texture;
        this._copyMaterial.blending = CustomBlending;
        this.renderPass(renderer, this._copyMaterial, this.renderToScreen ? null : writeBuffer);

        break;

      default:
        console.warn("THREE.SSAOPass: Unknown output type.");

    }


  }

  restoreVisibility() {

    const scene = this._scene;
    const cache = this._visibilityCache;

    scene.traverse(function (object) {

      const visible = cache.get(object);
      object.visible = visible;

    });

    cache.clear();

  }

  overrideVisibility() {

    const scene = this._scene;
    const cache = this._visibilityCache;

    scene.traverse(function (object) {

      cache.set(object, object.visible);

      // @ts-ignore
      if (object.isPoints || object.isLine) object.visible = false;

    });

  }


  // 렌더타겟 설정
  // fsQuad 매터리얼 설정
  renderPass(renderer: WebGLRenderer, passMaterial: THREE.Material, renderTarget: WebGLRenderTarget | null, clearColor?, clearAlpha?) {

    // save original state
    renderer.getClearColor(this._originalClearColor);
    const originalClearAlpha = renderer.getClearAlpha();
    const originalAutoClear = renderer.autoClear;

    renderer.setRenderTarget(renderTarget);

    // setup pass state
    renderer.autoClear = false;
    if ((clearColor !== undefined) && (clearColor !== null)) {

      renderer.setClearColor(clearColor);
      renderer.setClearAlpha(clearAlpha || 0.0);
      renderer.clear();

    }

    this._fsQuad.material = passMaterial;
    this._fsQuad.render(renderer);

    // restore original state
    renderer.autoClear = originalAutoClear;
    renderer.setClearColor(this._originalClearColor);
    renderer.setClearAlpha(originalClearAlpha);

  }

  renderOverride(renderer, overrideMaterial, renderTarget, clearColor, clearAlpha) {

    renderer.getClearColor(this._originalClearColor);
    const originalClearAlpha = renderer.getClearAlpha();
    const originalAutoClear = renderer.autoClear;

    renderer.setRenderTarget(renderTarget);
    renderer.autoClear = false;

    clearColor = overrideMaterial.clearColor || clearColor;
    clearAlpha = overrideMaterial.clearAlpha || clearAlpha;

    if ((clearColor !== undefined) && (clearColor !== null)) {

      renderer.setClearColor(clearColor);
      renderer.setClearAlpha(clearAlpha || 0.0);
      renderer.clear();

    }

    this._scene.overrideMaterial = overrideMaterial;
    renderer.render(this._scene, this._camera);
    this._scene.overrideMaterial = null;

    // restore original state

    renderer.autoClear = originalAutoClear;
    renderer.setClearColor(this._originalClearColor);
    renderer.setClearAlpha(originalClearAlpha);

  }

  private _setNoiseTexture() {
    const width = this._width * window.devicePixelRatio, height = this._height * window.devicePixelRatio;

    if (SimplexNoise === undefined) {

      console.error("THREE.SSAOPass: The pass relies on SimplexNoise.");

    }

    const simplex = new SimplexNoise();

    const size = width * height;
    const data = new Float32Array(size * 4);

    for (let i = 0; i < size; i++) {

      const stride = i * 4;

      const x = (Math.random() * 2) - 1;
      const y = (Math.random() * 2) - 1;
      const z = 0;

      const noise = simplex.noise3d(x, y, z);

      data[ stride ] = noise;
      data[ stride + 1 ] = noise;
      data[ stride + 2 ] = noise;
      data[ stride + 3 ] = 1;

    }


    const noiseTexture = new DataTexture(data, width, height, RGBAFormat, FloatType);
    noiseTexture.wrapS = RepeatWrapping;
    noiseTexture.wrapT = RepeatWrapping;

    return noiseTexture;

  }

  private _setCopyMaterial() {
    return new ShaderMaterial({
      uniforms: UniformsUtils.clone(CopyShader.uniforms),
      vertexShader: CopyShader.vertexShader,
      fragmentShader: CopyShader.fragmentShader,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blendSrc: DstColorFactor,
      blendDst: ZeroFactor,
      blendEquation: AddEquation,
      blendSrcAlpha: DstAlphaFactor,
      blendDstAlpha: ZeroFactor,
      blendEquationAlpha: AddEquation
    });
  }

  private _setDepthRenderMaterial() {
    const depthRenderMaterial = new ShaderMaterial({
      defines: {
        "PERSPECTIVE_CAMERA": 1
      },
      uniforms: {
        "tDepth": { value: null }, "cameraNear": { value: null }, "cameraFar": { value: null },
      },
      vertexShader: SSAODepthShader.vertexShader,
      fragmentShader: SSAODepthShader.fragmentShader,
      blending: NoBlending
    });

    depthRenderMaterial.uniforms[ "tDepth" ].value = this._normalRenderTarget.depthTexture;
    depthRenderMaterial.uniforms[ "cameraNear" ].value = this._camera.near;
    depthRenderMaterial.uniforms[ "cameraFar" ].value = this._camera.far;


    return depthRenderMaterial;
  }

  private _getSampleKernel() {
    const kernelSize = this._kernelSize;
    const kernel: Vector3[] = [];

    for (let i = 0; i < kernelSize; i++) {

      const sample = new Vector3();
      sample.x = (Math.random() * 2) - 1;
      sample.y = (Math.random() * 2) - 1;
      sample.z = Math.random();

      sample.normalize();

      let scale = i / kernelSize;
      scale = MathUtils.lerp(0.1, 1, scale * scale);
      sample.multiplyScalar(scale);

      kernel.push(sample);
    }

    return kernel;
  }

  private _setSSAOMaterial() {

    const ssaoMaterial = new ShaderMaterial({
      defines: {
        "PERSPECTIVE_CAMERA": 1, "KERNEL_SIZE": 32
      },
      uniforms: {
        "tDiffuse": { value: null },
        "tNormal": { value: null },
        "tDepth": { value: null },
        "tNoise": { value: null },
        "kernel": { value: null },
        "cameraNear": { value: null },
        "cameraFar": { value: null },
        "resolution": { value: new Vector2() },
        "cameraProjectionMatrix": { value: new Matrix4() },
        "cameraInverseProjectionMatrix": { value: new Matrix4() },
        "kernelRadius": { value: 16 },
        "minDistance": { value: 0.0001 },
        "maxDistance": { value: 1 },
        "strength": { value: 1.0 },

      },
      vertexShader: SSAOShader.vertexShader,
      fragmentShader: SSAOShader.fragmentShader,
      blending: NoBlending
    });

    ssaoMaterial.uniforms[ "strength" ].value = this._intensive;
    ssaoMaterial.uniforms[ "kernelRadius" ].value = this._kernelRadius;
    ssaoMaterial.uniforms[ "minDistance" ].value = this._minDistance;
    ssaoMaterial.uniforms[ "maxDistance" ].value = this._maxDistance;
    ssaoMaterial.uniforms[ "tDiffuse" ].value = this._beautyRenderTarget.texture;
    ssaoMaterial.uniforms[ "tNormal" ].value = this._normalRenderTarget.texture;
    ssaoMaterial.uniforms[ "tDepth" ].value = this._normalRenderTarget.depthTexture;
    ssaoMaterial.uniforms[ "tNoise" ].value = this._noiseTexture;
    ssaoMaterial.uniforms[ "kernel" ].value = this._kernel;
    ssaoMaterial.uniforms[ "cameraNear" ].value = this._camera.near;
    ssaoMaterial.uniforms[ "cameraFar" ].value = this._camera.far;
    ssaoMaterial.uniforms[ "resolution" ].value.set(this._width, this._height);
    ssaoMaterial.uniforms[ "cameraProjectionMatrix" ].value.copy(this._camera.projectionMatrix);
    ssaoMaterial.uniforms[ "cameraInverseProjectionMatrix" ].value.copy(this._camera.projectionMatrixInverse);

    return ssaoMaterial;
  }

  private _setNormalMaterial() {
    const meshNormalMaterial = new MeshNormalMaterial();
    meshNormalMaterial.blending = NoBlending;

    return meshNormalMaterial;
  }

  private _setBlurMaterial() {
    const blurMaterial = new ShaderMaterial({
      defines: {},
      uniforms: UniformsUtils.clone(SSAOBlurShader.uniforms),
      vertexShader: SSAOBlurShader.vertexShader,
      fragmentShader: SSAOBlurShader.fragmentShader
    });

    blurMaterial.uniforms[ "tDiffuse" ].value = this._ssaoRenderTarget.texture;
    blurMaterial.uniforms[ "resolution" ].value.set(this._width, this._height);

    return blurMaterial;
  }


}


export default SSAO;
