import * as THREE from 'three';

const ORBIT_RADIUS = 3;
const ORBIT_SPEED = 0.0005;

export function createPointLight() {
  const lightColor = 0xff6600;
  const intensity = 8;
  const decayDistance = 10;

  const pointLight = new THREE.PointLight(lightColor, intensity, decayDistance);
  return pointLight;
}

export function animatePointLight(pointLight, elapsedTime) {
  pointLight.position.x = Math.sin(elapsedTime * ORBIT_SPEED) * ORBIT_RADIUS;
  pointLight.position.z = Math.cos(elapsedTime * ORBIT_SPEED) * ORBIT_RADIUS;
  pointLight.position.y = Math.sin(elapsedTime * ORBIT_SPEED * 0.5) * 1.5;
}