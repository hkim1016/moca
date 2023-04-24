import { PlaneGeometry } from "three";

function createGeometry(width, height) {
    // const artSize = new BoxGeometry(width, height, depth);
    const artSize = new PlaneGeometry(width, height);

    return artSize;
}

export { createGeometry };