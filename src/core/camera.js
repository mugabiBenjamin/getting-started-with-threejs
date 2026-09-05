import * as THREE from 'three';

export function createCamera() {
  const fieldOfView = 75;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const nearClippingPlane = 0.1;
  const farClippingPlane = 1000;

  const camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearClippingPlane,
    farClippingPlane
  );

  camera.position.z = 2;
  return camera;
}