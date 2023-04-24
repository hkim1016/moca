import { BoxGeometry } from "three";

function createGeometry(width, height, depth) {
    const wall = new BoxGeometry(width, height, depth);

    return wall;
}

export { createGeometry };