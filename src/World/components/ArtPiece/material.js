import { MeshStandardMaterial, TextureLoader } from "three";

function createMaterial(texture) {
    const textureLoader = new TextureLoader();

    const artTexture = textureLoader.load(
        texture,
    );

    const artMaterial = new MeshStandardMaterial({
        map: artTexture,
    });

    return artMaterial;
}

export { createMaterial };