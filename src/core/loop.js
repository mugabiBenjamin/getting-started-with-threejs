import { animatePointLight } from '../lights/point.js';

const ROTATION_SPEED = 0.0003;
const PULSE_SPEED = 0.001;
const PULSE_BASE_SCALE = 1.0;
const PULSE_AMPLITUDE = 0.08;

export function startAnimationLoop(renderer, scene, camera, controls, animatedMesh, pointLight) {
  function animate(elapsedTime = 0) {
    requestAnimationFrame(animate);

    animatedMesh.rotation.y = elapsedTime * ROTATION_SPEED;

    const pulseScale = PULSE_BASE_SCALE + Math.sin(elapsedTime * PULSE_SPEED) * PULSE_AMPLITUDE;
    animatedMesh.scale.setScalar(pulseScale);

    animatePointLight(pointLight, elapsedTime);

    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}