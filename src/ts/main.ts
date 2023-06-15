import "/src/scss/main.scss";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/* Create essential three components */
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 40;

/* Set the size of the renderer to the eire window */
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* Create pointlight */
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(0, 100, 20);
scene.add(light);

// /* Create cube */
const geometry = new THREE.TorusGeometry(10, 4, 16, 50);
const material = new THREE.MeshPhysicalMaterial({ wireframe: true });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
