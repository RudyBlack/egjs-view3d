import "regenerator-runtime/runtime";
import View3D, { ARButton } from "./src/index";


const view3D = new View3D("#wrapper-el", {src: "https://s3.ap-northeast-2.amazonaws.com/static.metaverse2.com/assets/3D/alarm.glb"});
void view3D.loadPlugins(new ARButton());

