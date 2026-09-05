import * as THREE from 'three';

const STAR_COUNT = 2000;
const STAR_SPREAD = 200;
const STAR_SIZE = 0.25;

export function createStarField() {
  const positions = new Float32Array(STAR_COUNT * 3);

  for (let i = 0; i < STAR_COUNT; i++) {
    const xIndex = i * 3;
    const yIndex = i * 3 + 1;
    const zIndex = i * 3 + 2;

    positions[xIndex] = (Math.random() - 0.5) * STAR_SPREAD;
    positions[yIndex] = (Math.random() - 0.5) * STAR_SPREAD;
    positions[zIndex] = (Math.random() - 0.5) * STAR_SPREAD;
  }

  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: STAR_SIZE,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
  });

  return new THREE.Points(starGeometry, starMaterial);
}