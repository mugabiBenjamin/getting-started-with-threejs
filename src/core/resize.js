export function handleWindowResize(camera, renderer, composer = null) {
  function onWindowResize() {
    const updatedWidth = window.innerWidth;
    const updatedHeight = window.innerHeight;

    camera.aspect = updatedWidth / updatedHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(updatedWidth, updatedHeight);

    if (composer) {
      composer.setSize(updatedWidth, updatedHeight);
    }
  }

  window.addEventListener('resize', onWindowResize);
}