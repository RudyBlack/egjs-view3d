/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import View3DEffect from "./View3DEffect";
import View3D from "../View3D";
import { BokehPass } from "three/examples/jsm/postprocessing/BokehPass";

/**
 * Options for the {@link DoF}
 * @interface
 *
 */
export interface DoFOptions {
  near: number;
  far: number;
  focus: number;
  aperture: number;
  maxblur: number;
}

/**
 * The DoF effect created based on the {@link https://threejs.org/examples/#webgl_postprocessing_dof DoF} post-processing of Three.js.
 */
class DoF extends View3DEffect {

  private _dofPass: BokehPass | null;

  private _options: DoFOptions;

  constructor({ focus = 5, aperture = 0.01, maxblur = 0.01, near = 0.1, far = 85 }: Partial<DoFOptions> = {}) {
    super();

    this._dofPass = null;
    this._options = {
      far, aperture, focus, maxblur, near
    };
  }

  public init(view3D: View3D) {
    const scene = view3D.scene.root;
    const camera = view3D.camera.threeCamera;
    const { far, aperture, focus, maxblur, near } = this._options;

    camera.near = near;
    camera.far = far;
    return this._dofPass = new BokehPass(scene, camera, { maxblur, aperture, focus });
  }

  public getPass() { return this._dofPass; }
}

export default DoF;

