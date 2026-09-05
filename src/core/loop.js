import { animatePointLight } from '../lights/point.js';
import { interactionState } from '../interaction/state.js';

const ROTATION_SPEED = 0.0003;
const PULSE_SPEED = 0.001;
const PULSE_BASE_SCALE = 1.0;
const PULSE_AMPLITUDE = 0.08;
const MOUSE_LERP_SPEED = 0.05;

export function startAnimationLoop(renderer, scene, camera, controls, animatedMesh, pointLight, composer) {
  let autoRotationAngle = 0;

  function animate(elapsedTime = 0) {
    requestAnimationFrame(animate);

    if (interactionState.isAutoRotating) {
      autoRotationAngle = elapsedTime * ROTATION_SPEED;
    }

    animatedMesh.rotation.y += (
      (autoRotationAngle + interactionState.mouseInfluence.x) - animatedMesh.rotation.y
    ) * MOUSE_LERP_SPEED;

    animatedMesh.rotation.x += (
      interactionState.mouseInfluence.y - animatedMesh.rotation.x
    ) * MOUSE_LERP_SPEED;

    const pulseScale = PULSE_BASE_SCALE + Math.sin(elapsedTime * PULSE_SPEED) * PULSE_AMPLITUDE;
    animatedMesh.scale.setScalar(pulseScale);

    animatePointLight(pointLight, elapsedTime);

    controls.update();
    composer.render();
  }

  animate();
}