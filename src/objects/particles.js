import * as THREE from 'three';

const STAR_COUNT = 2000;
const STAR_SPREAD = 200;
const STAR_SIZE = 0.5;

const STAR_COLOUR_PALETTE = [
  new THREE.Color(0xffffff),
  new THREE.Color(0xaad4ff),
  new THREE.Color(0xffd0a0),
  new THREE.Color(0xc8b8ff),
  new THREE.Color(0xe0f0ff),
];

function createCircleTexture() {
  const canvasSize = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  const context = canvas.getContext('2d');
  const centreX = canvasSize / 2;
  const centreY = canvasSize / 2;
  const radius = canvasSize / 2;

  const gradient = context.createRadialGradient(centreX, centreY, 0, centreX, centreY, radius);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.4, 'rgba(255,255,255,0.8)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');

  context.fillStyle = gradient;
  context.beginPath();
  context.arc(centreX, centreY, radius, 0, Math.PI * 2);
  context.fill();

  return new THREE.CanvasTexture(canvas);
}

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

  const circleTexture = createCircleTexture();

  const starMaterial = new THREE.PointsMaterial({
    size: STAR_SIZE,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
    vertexColors: true,
    map: circleTexture,
    alphaTest: 0.01,
    depthWrite: false,
  });

  return new THREE.Points(starGeometry, starMaterial);
}