import { MeshStandardMaterial, TextureLoader, MeshBasicMaterial, RepeatWrapping } from "three";

function createMaterial() {
    const texture = new TextureLoader().load('/assets/textures/wall2.png');
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(7, 7);
    const normal = new TextureLoader().load('/assets/textures/fiber-textured-wall1_normal-ogl.png');

    const material = new MeshStandardMaterial({
        color: 0xc2c2c2,
        wireframe: false,
        map: texture,
        // normalMap: normal,
    });

    return material;
}

export { createMaterial };