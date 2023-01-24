import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import View3D, { SSR, SAO, Bloom, DoF } from "../View3D";
import {
  BloomEffect,
  BrightnessContrastEffect,
  EffectComposer as EffectComposerLib,
  EffectPass,
  RenderPass as RenderPassLib,
  SMAAEffect,
  ToneMappingEffect,
  ToneMappingMode,
} from "postprocessing";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader";


type Params = {
  src: string;
  type: "car" | "alarm" | "default"
  setPostProcessing?: boolean
  positionY?: number;
  initZoom?: number
}

const PostProcessing = ({ src, setPostProcessing = true, type = "default", initZoom = 8 }: Params) => {
  const ref = useRef<View3D>(null);


  useEffect(() => {
    if (!setPostProcessing || type !== "alarm") return;

    const view3D = ref.current.view3D;
    const gamma = new ShaderPass(GammaCorrectionShader);


    //이거는 이렇게..
    view3D.loadEffects(
      ({ model }) => new SSR({ selects: model.meshes }),
      new DoF(),
      new Bloom({ radius: 0.5, threshold: 0.3, strength: 1 }),
    );

  }, [setPostProcessing, type]);

  return (
    <>
      <div className={clsx("view3d-wrapper", "mb-2")}>
        <View3D
          ref={ref}
          src={src}
          yaw={330}
          pitch={8.14}
          initialZoom={initZoom}
          meshoptPath={"/egjs-view3d/lib/meshopt_decoder.js"}
        />
      </div>
    </>
  );
};

export default PostProcessing;
