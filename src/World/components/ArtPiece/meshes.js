import { Mesh, TextureLoader } from "three";

import { createGeometry } from "./geometry";
import { createMaterial } from "./material";

function createMeshes() {
    const textureLoader = new TextureLoader();

    const art02 = new Mesh(createGeometry(1, 1.5), createMaterial('/assets/textures/2.png', textureLoader));
    // art02.position.set(0, 0.75, 0);

    const art03 = new Mesh(createGeometry(1, 2), createMaterial('/assets/textures/3.png', textureLoader));
    // art03.position.set(0, 1, 0);

    const art04 = new Mesh(createGeometry(1.1, 1.5), createMaterial('/assets/textures/4.png', textureLoader));
    // art04.position.set(0, 0.75, 0);

    const art05 = new Mesh(createGeometry(2.8, 1.2), createMaterial('/assets/textures/5.png', textureLoader));
    // art05.position.set(0, 0.6, 0);

    const art06 = new Mesh(createGeometry(1.8, 1.6), createMaterial('/assets/textures/6.png', textureLoader));
    // art06.position.set(0, 0.8, 0);

    const art07 = new Mesh(createGeometry(4, 1), createMaterial('/assets/textures/7.png', textureLoader));
    // art07.position.set(0, 0.5);

    const art08 = new Mesh(createGeometry(4, 2), createMaterial('/assets/textures/8.png', textureLoader));
    // art08.position.set(0, 1);

    const art09 = new Mesh(createGeometry(3, 2.4), createMaterial('/assets/textures/9.png', textureLoader));
    // art09.position.set(0, 1.2, 0);

    const art10 = new Mesh(createGeometry(3, 3), createMaterial('/assets/textures/10.png', textureLoader));
    // art10.position.set(0, 1.5, 0);

    const art11 = new Mesh(createGeometry(2.5, 3), createMaterial('/assets/textures/11.png', textureLoader));
    // art11.position.set(0, 1.5, 0);

    const art12 = new Mesh(createGeometry(1.7, 2), createMaterial('/assets/textures/12.png', textureLoader));
    // art12.position.set(0, 1, 0);

    const art13 = new Mesh(createGeometry(2, 2.4), createMaterial('/assets/textures/13.png', textureLoader));
    // art13.position.set(0, 1.2, 0);

    // const art14 = new Mesh(createGeometry(2.8, 1.8), createMaterial('/assets/textures/14.png', textureLoader));

    const art15 = new Mesh(createGeometry(2.2, 2.4), createMaterial('/assets/textures/15.png', textureLoader));
    // art15.position.set(0, 1.2, 0);

    const art16 = new Mesh(createGeometry(3.2, 2.4), createMaterial('/assets/textures/16.png', textureLoader));
    // art16.position.set(0, 1.2, 0);

    const art17 = new Mesh(createGeometry(1.8, 2.4), createMaterial('/assets/textures/17.png', textureLoader));
    // art17.position.set(0, 1.2, 0);

    const art18 = new Mesh(createGeometry(2.2, 2.4), createMaterial('/assets/textures/18.png', textureLoader));
    // art18.position.set(0, 1.2, 0);

    const art19 = new Mesh(createGeometry(3.8, 2.4), createMaterial('/assets/textures/19.png', textureLoader));
    // art19.position.set(0, 0.7, 0);


    return {
        art02,
        art03,
        art04,
        art05,
        art06,
        art07,
        art08,
        art09,
        art10,
        art11,
        art12,
        art13,
        // art14,
        art15,
        art16,
        art17,
        art18,
        art19,
    };
}

export { createMeshes };