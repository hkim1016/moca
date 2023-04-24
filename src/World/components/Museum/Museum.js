import { Group } from "three";

import { createMeshes } from "./meshes";

class Museum extends Group {
    constructor() {
        super();

        // this.artPieces = new ArtPieces();

        this.meshes = createMeshes();

        this.add(
            // this.artPieces,
            // this.meshes.rightWall,
            this.meshes.grpWall01,
            this.meshes.grpWall02,
            this.meshes.grpWall03,
            this.meshes.grpWall04,
            this.meshes.wall05,
            this.meshes.grpWall06,
            this.meshes.grpWall07,
            this.meshes.grpWall08,
            this.meshes.wall09,
            this.meshes.grpMiddleWall,
            this.meshes.floor,
        );
    }
}

export { Museum };