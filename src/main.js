import * as THREE from 'three';
import { createRenderer } from './core/renderer.js';
import { createCamera } from './core/camera.js';
import { createScene } from './core/scene.js';
import { createControls } from './core/controls.js';
import { startAnimationLoop } from './core/loop.js';
import { handleWindowResize } from './core/resize.js';
import { createIcosahedron } from './objects/icosahedron.js';
import { createStarField } from './objects/particles.js';
import { createHemisphereLight } from './lights/hemi.js';
import { createPointLight } from './lights/point.js';
import { handleMouseMove } from './interaction/mouse.js';
import { handleKeyboardToggles } from './interaction/keyboard.js';

const renderer = createRenderer();
const camera = createCamera();
const scene = createScene();
const controls = createControls(camera, renderer.domElement);

scene.background = new THREE.Color(0x000008);

const { solidMesh, wireframeMesh } = createIcosahedron();
scene.add(solidMesh);

const starField = createStarField();
scene.add(starField);

const hemisphereLight = createHemisphereLight();
scene.add(hemisphereLight);

const pointLight = createPointLight();
scene.add(pointLight);

handleWindowResize(camera, renderer);
handleMouseMove();
handleKeyboardToggles(wireframeMesh);
startAnimationLoop(renderer, scene, camera, controls, solidMesh, pointLight);