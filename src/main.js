// import * as THREE from 'three';
import { World } from './World/World.js';

function main() {
    const canvas = document.querySelector('#canvas');

    const world = new World(canvas);

    world.start();
}

main();