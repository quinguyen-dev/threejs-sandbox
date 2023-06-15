import "/src/scss/main.scss";

import * as THREE from "three";

/* Create essential three components */
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

/* Set the size of the renderer to the eire window */
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* Create pointlight */
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(200, 200, 200);
scene.add(light);

/* Create cube */
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshPhysicalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

/* Animate the cube every frame */
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
