# Three.js Icosahedron

An interactive 3D scene built with Three.js - no bundler, no build step. Loads directly in the browser via native ES modules and an importmap.

## Features

- Metallic icosahedron with physical material and wireframe overlay
- Orbiting point light casting dynamic colour across the mesh surface
- Procedural star field with per-vertex colour variation and circular sprites
- IBL environment map for accurate reflections
- Post-processing: bloom and film grain via `EffectComposer`
- Mouse-follow rotation with lerp smoothing
- Keyboard toggles for wireframe and auto-rotation

## Controls

| Input      | Action                           |
| ---------- | -------------------------------- |
| Mouse move | Tilts the mesh toward the cursor |
| Left drag  | Orbit camera                     |
| Scroll     | Zoom                             |
| `W`        | Toggle wireframe                 |
| `R`        | Toggle auto-rotation             |

## Getting started

No install required. Serve the project root with any static file server, for example:

Then open `http://localhost:8000` (or whichever port your server uses).

> Opening `index.html` directly as a `file://` URL will not work - browsers block ES module imports on the file protocol.

## Project structure

```text
index.html              Entry point - importmap and script tag
src/
  main.js               Wires all modules together
  core/
    camera.js           PerspectiveCamera setup
    controls.js         OrbitControls with damping
    environment.js      PMREMGenerator IBL from RoomEnvironment
    loop.js             requestAnimationFrame loop
    renderer.js         WebGLRenderer setup
    resize.js           Window resize handler
    scene.js            Scene instantiation
  interaction/
    keyboard.js         W / R keypress toggles
    mouse.js            Normalised mouse position tracking
    state.js            Shared interaction state object
  lights/
    hemi.js             HemisphereLight (ambient fill)
    point.js            Orbiting PointLight with animation
  objects/
    icosahedron.js      Geometry, MeshPhysicalMaterial, wireframe child
    particles.js        Star field with BufferGeometry and vertex colours
  postprocessing/
    composer.js         EffectComposer - RenderPass, UnrealBloomPass, FilmPass
```

## Dependencies

Loaded via CDN importmap, no local install needed.

| Package              | Version   |
| -------------------- | --------- |
| `three`              | `0.161.0` |
| `three/examples/jsm` | `0.161.0` |

## Architecture notes

Each module has a single responsibility and communicates through explicit function parameters rather than shared globals. The one deliberate exception is `src/interaction/state.js`, which exports a singleton object read by both the interaction handlers and the animation loop - this avoids prop-drilling the state through every call site.

The animation loop (`loop.js`) owns all per-frame logic. Adding a new animated object means passing it into `startAnimationLoop` or extending the function - nothing else needs to change.

## Possible next steps

- Migrate to Vite + TypeScript for larger-scale development
- Add JSDoc annotations to all exported functions for in-editor type hints
- Phase 4: post-processing refinements, environment map swapping, shader materials

[Back to Top](#threejs-icosahedron)
