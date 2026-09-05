import { interactionState } from './state.js';

const MOUSE_INFLUENCE_SCALE = 0.6;

export function handleMouseMove() {
  function onMouseMove(event) {
    const normalisedX = (event.clientX / window.innerWidth - 0.5) * 2;
    const normalisedY = (event.clientY / window.innerHeight - 0.5) * 2;

    interactionState.mouseInfluence.x = normalisedX * MOUSE_INFLUENCE_SCALE;
    interactionState.mouseInfluence.y = normalisedY * MOUSE_INFLUENCE_SCALE;
  }

  window.addEventListener('mousemove', onMouseMove);
}