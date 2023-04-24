import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function createOrbitControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
    controls.saveState();
    // controls.enablePan = false;
    controls.enableZoom = false;

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            controls.reset();
        }
    });

    controls.tick = () => {
        controls.update();
    }

    return controls;
}

export { createOrbitControls };