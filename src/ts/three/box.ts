import "/src/scss/main.scss";

import * as THREE from "three";

/* Create essential three components */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75 /* Field of view */,
    window.innerWidth / window.innerHeight /* Aspect ratio */,
    0.1 /* Near clipping plane */,
    1000 /* Far clipping plane */
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
