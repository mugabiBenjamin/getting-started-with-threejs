import { EffectComposer } from 'jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'jsm/postprocessing/UnrealBloomPass.js';
import { FilmPass } from 'jsm/postprocessing/FilmPass.js';
import * as THREE from 'three';

const BLOOM_RESOLUTION = new THREE.Vector2(window.innerWidth, window.innerHeight);
const BLOOM_STRENGTH = 0.4;
const BLOOM_RADIUS = 0.6;
const BLOOM_THRESHOLD = 0.2;

const FILM_GRAIN_INTENSITY = 0.25;

export function createPostProcessingComposer(renderer, scene, camera) {
  const composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bloomPass = new UnrealBloomPass(
    BLOOM_RESOLUTION,
    BLOOM_STRENGTH,
    BLOOM_RADIUS,
    BLOOM_THRESHOLD,
  );
  composer.addPass(bloomPass);

  const filmGrainPass = new FilmPass(FILM_GRAIN_INTENSITY);
  composer.addPass(filmGrainPass);

  return composer;
}