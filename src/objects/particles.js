import * as THREE from 'three';

const STAR_COUNT = 2000;
const STAR_SPREAD = 200;
const STAR_SIZE = 0.25;

const STAR_COLOUR_PALETTE = [
  new THREE.Color(0xffffff),
  new THREE.Color(0xaad4ff),
  new THREE.Color(0xffd0a0),
  new THREE.Color(0xc8b8ff),
  new THREE.Color(0xe0f0ff),
];

export function createStarField() {
  const positions = new Float32Array(STAR_COUNT * 3);
  const colours = new Float32Array(STAR_COUNT * 3);

  for (let i = 0; i < STAR_COUNT; i++) {
    const xIndex = i * 3;
    const yIndex = i * 3 + 1;
    const zIndex = i * 3 + 2;

    positions[xIndex] = (Math.random() - 0.5) * STAR_SPREAD;
    positions[yIndex] = (Math.random() - 0.5) * STAR_SPREAD;
    positions[zIndex] = (Math.random() - 0.5) * STAR_SPREAD;

    const starColour = STAR_COLOUR_PALETTE[
      Math.floor(Math.random() * STAR_COLOUR_PALETTE.length)
    ];

    colours[xIndex] = starColour.r;
    colours[yIndex] = starColour.g;
    colours[zIndex] = starColour.b;
  }

  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  starGeometry.setAttribute('color', new THREE.BufferAttribute(colours, 3));

  const starMaterial = new THREE.PointsMaterial({
    size: STAR_SIZE,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
    vertexColors: true,
  });

  return new THREE.Points(starGeometry, starMaterial);
}