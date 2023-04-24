import { Group } from "three";

import { createMeshes } from "./meshes";

class ArtPieces extends Group {
    constructor() {
        super();

        this.meshes = createMeshes();

        this.add(
            this.meshes.art02,
            this.meshes.art03,
            this.meshes.art04,
            // this.meshes.art05,
            // this.meshes.art06,
            // this.meshes.art07,
            // this.meshes.art08,
            // this.meshes.art09,
            // this.meshes.art10,
            // this.meshes.art11,
            // this.meshes.art12,
            // this.meshes.art13,
            // this.meshes.art15,
            // this.meshes.art16,
            this.meshes.art17,
            // this.meshes.art18,
            // this.meshes.art19,
        );

        // 2 - 4 toegethre
        // 5- 6
        // 7 -8
        // 9 - 12
        // 13 - 17, 19 together
        // 18
    }
}

export { ArtPieces };