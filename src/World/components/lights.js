import { PointLight, PointLightHelper, DirectionalLight, DirectionalLightHelper, AmbientLight, HemisphereLight, HemisphereLightHelper, RectAreaLight } from "three";

function createLights() {
    const ambientLight = new AmbientLight('white', 0.8);

    const mainLight = new DirectionalLight('white', 5);
    mainLight.position.set(0, 10, 0);

    const pointLight = new PointLight('white', 1);
    pointLight.position.set(0, 8, -10);

    const rectLight01 = new RectAreaLight('white', 5);
    rectLight01.position.set(0, 8, -6);
    rectLight01.lookAt(0, 8, -6);

    const rectLight02 = new RectAreaLight('white', 5);
    rectLight02.position.set(0, 8, -18);
    rectLight02.lookAt(0, 8, -18);

    // const helper = new DirectionalLightHelper(mainLight);
    const helper = new PointLightHelper(pointLight);
    // const helper = new RectAreaLightHelper(rectAreaLight);

    return {pointLight, ambientLight, mainLight, helper, rectLight01, rectLight02};
}

export { createLights };