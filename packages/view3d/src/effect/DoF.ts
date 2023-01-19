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
class DoF implements View3DEffect {

  private _dofPass: BokehPass | null;

  private _options: DoFOptions;

  constructor({ focus = 5, aperture = 0.01, maxblur = 0.01, near = 0.1, far = 85 }: Partial<DoFOptions> = {}) {
    this._dofPass = null;
    this._options = {
      far, aperture, focus, maxblur, near
    };
  }
  public async init(view3D: View3D) {
    const scene = view3D.scene.root;
    const camera = view3D.camera.threeCamera;
    const { far, aperture, focus, maxblur, near } = this._options;
    this._dofPass = new BokehPass(scene, camera, { maxblur, aperture, focus });

    camera.near = near;
    camera.far = far;
  }

  public getPass() {
    return this._dofPass;
  }
}

export default DoF;


