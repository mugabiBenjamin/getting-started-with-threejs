import { createRenderer } from './core/renderer.js';
import { createCamera } from './core/camera.js';
import { createScene } from './core/scene.js';
import { createControls } from './core/controls.js';
import { startAnimationLoop } from './core/loop.js';
import { createIcosahedron } from './objects/icosahedron.js';
import { createHemisphereLight } from './lights/hemi.js';

const renderer = createRenderer();
const camera = createCamera();
const scene = createScene();
const controls = createControls(camera, renderer.domElement);

const icosahedron = createIcosahedron();
scene.add(icosahedron);

const hemisphereLight = createHemisphereLight();
scene.add(hemisphereLight);

startAnimationLoop(renderer, scene, camera, controls);