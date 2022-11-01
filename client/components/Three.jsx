// import * as THREE from 'three';
import React from 'react'
// import { render } from '../../server/server';
// import { Canvas } from "@react-three/fiber";
// import { Html } from '@react-three/drei'
// import { Canvas, useFrame } from '@react-three/fiber'

// init
// import Box from './Box'



function Three() {
    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    // camera.position.z = 1;

    // // const canvas = document.getElementById('myThreeJsCanvas')


    // const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.4);
    // const material = new THREE.MeshNormalMaterial();

    // const mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);
    // scene.add(mesh);



    // const renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setAnimationLoop(animation);
    // // let canvas = document.getElementById("myThreeJsCanvas")
    // document.body.appendChild(renderer.domElement);
    // renderer.render(scene, camera)

    // // animation

    // function animation(time) {

    //     mesh.rotation.x = time / 2000;
    //     mesh.rotation.y = time / 1000;

    //     renderer.render(scene, camera);
    // }

    const canvas = document.querySelector("#glCanvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    return (
        <>
            {/* <Canvas>
                <Box />
            </Canvas> */}
            <div id="myThreeJsCanvas">
                <canvas id="glCanvas" width="640" height="480"></canvas>
            </div>



        </>
    )



}



export default Three