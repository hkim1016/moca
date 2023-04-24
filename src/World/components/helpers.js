import { GridHelper, AxesHelper } from "three";

function createHelpers() {
    const gridHelper = new GridHelper(100, 100);

    const axesHelper = new AxesHelper(5);

    return { gridHelper, axesHelper };
}

export { createHelpers };