import * as THREE from 'three';

export function createHemisphereLight() {
  const skyColor = 0x0099ff;
  const groundColor = 0xaa5500;
  const intensity = 1;

  return new THREE.HemisphereLight(skyColor, groundColor, intensity);
}