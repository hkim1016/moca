const setSize = (canvas, camera, renderer) => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);
}

class Resizer {
    constructor(canvas, camera, renderer) {
        setSize(canvas, camera, renderer);

        window.addEventListener('resize', () => {
            setSize(canvas, camera, renderer);

            this.onResize();
        });
    }

    onResize() {}
}

export { Resizer };