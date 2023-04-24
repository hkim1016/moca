import { BoxGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh, MathUtils } from "three";

function createCube() {
    const cube = new Mesh(new BoxGeometry(2, 2, 2), new MeshStandardMaterial({color: 'purple'}));
    cube.rotation.set(-0.5, -0.1, 0.8);

    const radiansPerSecond = MathUtils.degToRad(30);

    cube.tick = (delta) => {
        // console.log('cube tick');
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    }

    return cube;
}

export { createCube };