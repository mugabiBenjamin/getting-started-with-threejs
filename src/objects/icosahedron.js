import * as THREE from 'three';

export function createIcosahedron() {
  const radius = 1;
  const detail = 20;
  const geometry = new THREE.IcosahedronGeometry(radius, detail);

  const solidMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true,
  });

  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });

  const solidMesh = new THREE.Mesh(geometry, solidMaterial);

  const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
  wireframeMesh.scale.setScalar(1.001);

  solidMesh.add(wireframeMesh);

  return solidMesh;
}