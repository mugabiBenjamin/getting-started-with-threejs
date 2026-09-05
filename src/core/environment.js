import * as THREE from 'three';
import { RoomEnvironment } from 'jsm/environments/RoomEnvironment.js';

const ENVIRONMENT_INTENSITY = 0.6;

export function applyEnvironmentMap(renderer, scene) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  const neutralEnvironmentScene = new RoomEnvironment();
  const environmentTexture = pmremGenerator.fromScene(neutralEnvironmentScene).texture;

  scene.environment = environmentTexture;
  scene.environmentIntensity = ENVIRONMENT_INTENSITY;

  pmremGenerator.dispose();
}