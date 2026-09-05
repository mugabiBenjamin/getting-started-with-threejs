import * as THREE from 'three';

export function createHemisphereLight() {
  const skyColor = 0x001133;
  const groundColor = 0x220022;
  const intensity = 2;

  return new THREE.HemisphereLight(skyColor, groundColor, intensity);
}