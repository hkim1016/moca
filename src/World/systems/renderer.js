import { WebGLRenderer } from "three";

function createRenderer() {
    const renderer = new WebGLRenderer({
        alpha: false,
        stencil: false,
        preserveDrawingBuffer: false,
        powerPreference: "high-performance",
    });

    return renderer;
}

export { createRenderer };