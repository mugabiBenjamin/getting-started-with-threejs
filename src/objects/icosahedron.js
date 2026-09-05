import * as THREE from 'three';

export function createIcosahedron() {
  const radius = 1;
  const detail = 20;
  const geometry = new THREE.IcosahedronGeometry(radius, detail);

  const solidMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x0088ff,
    flatShading: true,
    metalness: 0.6,
    roughness: 0.3,
    reflectivity: 0.8,
  });

  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    // transparent: true,
    // opacity: 0.15,
  });

  const solidMesh = new THREE.Mesh(geometry, solidMaterial);

  const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
  wireframeMesh.scale.setScalar(1.001);

  solidMesh.add(wireframeMesh);

  return { solidMesh, wireframeMesh };
}