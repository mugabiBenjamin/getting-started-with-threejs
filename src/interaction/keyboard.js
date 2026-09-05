import { interactionState } from './state.js';

const KEY_TOGGLE_WIREFRAME = 'w';
const KEY_TOGGLE_ROTATION = 'r';

export function handleKeyboardToggles(wireframeMesh) {
  function onKeyDown(event) {
    const pressedKey = event.key.toLowerCase();

    if (pressedKey === KEY_TOGGLE_WIREFRAME) {
      interactionState.isWireframeVisible = !interactionState.isWireframeVisible;
      wireframeMesh.visible = interactionState.isWireframeVisible;
    }

    if (pressedKey === KEY_TOGGLE_ROTATION) {
      interactionState.isAutoRotating = !interactionState.isAutoRotating;
    }
  }

  window.addEventListener('keydown', onKeyDown);
}