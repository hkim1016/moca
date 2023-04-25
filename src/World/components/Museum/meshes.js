import { Mesh, Group, MeshStandardMaterial, PlaneGeometry, TextureLoader, RepeatWrapping } from "three";

import { createMeshes as createArtPieces } from '../ArtPiece/meshes';

import { createGeometry } from "./geometry";
import { createMaterial } from "./material";

function createMeshes(renderer) {
    const artPieces = createArtPieces();
    const {
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
        art15,
        art16,
        art17,
        art18,
        art19,
    } = artPieces;

    const wallMaterial = createMaterial();

    const wall01 = new Mesh(createGeometry(0.5, 5, 26), wallMaterial);
    wall01.position.set(2.25, 2.5, -6);

    art02.rotation.y = -Math.PI / 2;
    art02.position.set(1.99, 1.25, 3.5);

    art03.rotation.y = -Math.PI / 2;
    art03.position.set(1.99, 1.5, 1)

    art04.rotation.y = -Math.PI / 2;
    art04.position.set(1.99, 1.25, -1.25);

    art17.rotation.y = -Math.PI / 2;
    art17.position.set(1.99, 1.7, -4.75);

    art07.rotation.y = -Math.PI / 2;
    art07.position.set(1.99, 1.5, -9);

    art08.rotation.y = -Math.PI / 2;
    art08.position.set(1.99, 1.5, -14);

    const grpWall01 = new Group();
    grpWall01.add(wall01, art02, art03, art04, art17, art07, art08);

    const wall02 = new Mesh(createGeometry(0.5, 5, 10), wallMaterial);
    wall02.position.set(-2.25, 2.5, 2);

    art05.rotation.y = Math.PI / 2;
    art05.position.set(-1.99, 1.1, 2.5);
    
    art06.rotation.y = Math.PI / 2;
    art06.position.set(-1.99, 1.3, -1);

    const grpWall02 = new Group();
    grpWall02.add(wall02, art05, art06);

    const wall03 = new Mesh(createGeometry(8, 5, 0.5), wallMaterial);
    wall03.position.set(-6.5, 2.5, -2.75);

    art09.rotation.y = Math.PI;
    art09.position.set(-6.25, 1.7, -3.01);

    const grpWall03 = new Group();
    grpWall03.add(wall03, art09);

    const wall04 = new Mesh(createGeometry(0.5, 5, 16), wallMaterial);
    wall04.position.set(-10.5, 2.5, -10.5);

    art10.rotation.y = Math.PI / 2;
    art10.position.set(-10.24, 2, -5.75);

    art11.rotation.y = Math.PI / 2;
    art11.position.set(-10.24, 2, -10.1);

    art19.rotation.y = Math.PI / 2;
    art19.position.set(-10.24, 1.7, -14.75);

    const grpWall04 = new Group();
    grpWall04.add(wall04, art10, art11, art19);

    const wall05 = new Mesh(createGeometry(3.5, 5, 0.5), wallMaterial);
    wall05.position.set(-9.25, 2.5, -18.75);

    const wall06 = new Mesh(createGeometry(0.5, 5, 5), wallMaterial);
    wall06.position.set(-7.25, 2.5, -21);

    art13.rotation.y = Math.PI / 2;
    art13.position.set(-6.99, 1.7, -21);

    const grpWall06 = new Group();
    grpWall06.add(wall06, art13);

    const wall07 = new Mesh(createGeometry(7, 5, 0.5), wallMaterial);
    wall07.position.set(-4, 2.5, -23.75);

    art16.position.set(-4, 1.7, -23.24);

    const grpWall07 = new Group();
    grpWall07.add(wall07, art16);

    const wall08 = new Mesh(createGeometry(0.5, 5, 5), wallMaterial);
    wall08.position.set(-0.75, 2.5, -21);

    art15.rotation.y = -Math.PI / 2;
    art15.position.set(-1.01, 1.7, -21);

    const grpWall08 = new Group();
    grpWall08.add(wall08, art15);

    const wall09 = new Mesh(createGeometry(2.5, 5, 0.5), wallMaterial);
    wall09.position.set(0.75, 2.5, -18.75);

    const middleWall = new Mesh(createGeometry(4, 5, 4), wallMaterial);
    middleWall.position.set(-4, 2.5, -12);

    art12.position.set(-4, 1.5, -9.99);

    art18.rotation.y = Math.PI;
    art18.position.set(-4, 1.7, -14.01)

    const grpMiddleWall = new Group();
    grpMiddleWall.add(middleWall, art12, art18);

    const floorTexture = new TextureLoader().load('/assets/textures/hardwood2.jpg');
    floorTexture.wrapS = RepeatWrapping;
    floorTexture.wrapT = RepeatWrapping;
    floorTexture.repeat.set(500, 500);
    renderer.initTexture(floorTexture);
    const floor = new Mesh(new PlaneGeometry(500, 500, 10, 10), new MeshStandardMaterial({color: 'white', map: floorTexture}));
    floor.rotation.x = -Math.PI / 2;

    return {
        grpWall01,
        grpWall02,
        grpWall03,
        grpWall04,
        wall05,
        grpWall06,
        grpWall07,
        grpWall08,
        wall09,
        grpMiddleWall,
        floor,
    }
}

export { createMeshes };