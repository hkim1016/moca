import { Group } from "three";

import { createMeshes } from "./meshes";

class Museum extends Group {
    constructor(renderer) {
        super();

        this.meshes = createMeshes(renderer);

        this.add(
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