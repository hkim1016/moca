import { MeshStandardMaterial, TextureLoader } from "three";

function createMaterial(texture, textureLoader) {
    const artTexture = textureLoader.load(
        texture,
    );

    const artMaterial = new MeshStandardMaterial({
        map: artTexture,
    });

    return artMaterial;
}

export { createMaterial };