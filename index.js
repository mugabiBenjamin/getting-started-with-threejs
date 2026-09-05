import * as THREE from 'three';
import { OrbitControls } from 'jsm/controls/OrbitControls.js';

const width = window.innerWidth
const height = window.innerHeight
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = width / height;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

const geometry = new THREE.IcosahedronGeometry(1, 20);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const wireMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const wireMesh = new THREE.Mesh(geometry, wireMaterial);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500, 1);
scene.add(hemiLight);

// function animate() {
//   requestAnimationFrame(animate);
//   mesh.rotation.x += 0.01;
//   mesh.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();

// function animate(t = 0) {
//     console.log(t);
//   requestAnimationFrame(animate);
//   mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
//   renderer.render(scene, camera);
// }
// animate();

function animate(t = 0) {
  requestAnimationFrame(animate);
//   mesh.rotation.y = t * 0.0001;
  renderer.render(scene, camera);
  controls.update();
}
animate();