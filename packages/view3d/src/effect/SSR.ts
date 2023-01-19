import View3D from "../View3D";
import View3DEffect from "./View3DEffect";
import { Reflector } from "three/examples/jsm/objects/ReflectorForSSRPass";
import { SSRPass } from "three/examples/jsm/postprocessing/SSRPass";
import * as THREE from "three";

export interface SSROptions {
  selects: THREE.Mesh[] | null;
  isPerspectiveCamera?: boolean | undefined;
  isBouncing?: boolean | undefined;
  groundReflector: Reflector | null;
}
class SSR implements View3DEffect {

  private _ssrPass: SSRPass | null;

  private _options: SSROptions;

  constructor({ selects = null, isPerspectiveCamera, isBouncing, groundReflector = null }: Partial<SSROptions> = {}) {

    this._ssrPass = null;

    this._options = {
      selects,
      groundReflector,
      isBouncing,
      isPerspectiveCamera
    };

  }
  public async init(view3D: View3D) {
    const renderer = view3D.renderer.threeRenderer;
    const scene = view3D.scene.root;
    const camera = view3D.camera.threeCamera;

    const { selects, groundReflector, isBouncing, isPerspectiveCamera } = this._options;
    this._ssrPass = new SSRPass({ groundReflector, selects, renderer, scene, camera, isBouncing, isPerspectiveCamera });


  }
  public getPass() {
    return this._ssrPass;
  }


}

export default SSR;
