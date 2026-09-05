export function startAnimationLoop(renderer, scene, camera, controls) {
  function animate(elapsedTime = 0) {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}