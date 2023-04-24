import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";
import { createCube } from "./components/cube";
import { createHelpers } from "./components/helpers";
import { ArtPieces } from "./components/ArtPiece/ArtPieces";
import { Museum } from "./components/Museum/Museum";

import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";
import { createOrbitControls } from "./systems/OrbitControls";
import { createPointerControls } from "./systems/PointerLockControls";

let camera;
let renderer;
let scene;
let loop;

class World {
    constructor(canvas) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        canvas.append(renderer.domElement);
        
        // const orbitControls = createOrbitControls(camera, canvas);
        const pointerControls = createPointerControls(camera, canvas);
        const { gridHelper, axesHelper } = createHelpers();
        const {ambientLight, mainLight, helper, pointLight, rectLight01, rectLight02} = createLights();

        const artPieces = new ArtPieces();
        const museum = new Museum();

        // const cube = createCube();

        // loop.updatables.push(cube, orbitControls);
        loop.updatables.push(pointerControls);

        // scene.add(ambientLight, helper, gridHelper, axesHelper, artPieces);
        scene.add(ambientLight, museum);

        renderer.compile(scene, camera);
        const resizer = new Resizer(canvas, camera, renderer);
        // resizer.onResize = () => {
        //     this.render();
        // }
        // const controls = createControls();
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}

export { World };