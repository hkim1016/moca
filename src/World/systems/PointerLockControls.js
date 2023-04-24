import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

const keyboard = [];

function processKeyboard(keyboard, controls, delta) {
    const speed = 5 * delta;
    if(keyboard['w']) {
        controls.moveForward(speed);
    }
    if(keyboard['s']) {
        controls.moveForward(-speed);
    }
    if(keyboard['d']) {
        controls.moveRight(speed);
    }
    if(keyboard['a']) {
        controls.moveRight(-speed);
    }
}

function createPointerControls(camera, canvas) {
    const controls = new PointerLockControls(camera, canvas);

    controls.lock();

    const menu = document.getElementById('menu');

    addEventListener('keydown', e => {
        keyboard[e.key] = true;
    });

    addEventListener('keyup', e => {
        keyboard[e.key] = false;
    });

    addEventListener('click', () => {
        if(!controls.isLocked) {
            controls.lock();
        }
    });

    setInterval(() => {
        if(!document.hasFocus()) {
            controls.unlock();
            menu.style.display = 'flex';
        }
    }, 200);

    controls.addEventListener('unlock', () => {
        menu.style.display = 'flex';
    });

    controls.addEventListener('lock', () => {
        menu.style.display = 'none';
    });

    controls.tick = (delta) => {
        if(controls.isLocked) {
            processKeyboard(keyboard, controls, delta);
        }
    }

    return controls;
}

export { createPointerControls };