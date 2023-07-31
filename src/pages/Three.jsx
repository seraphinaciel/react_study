import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import '../App.css';

const ThreeD = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scrollStart = 0;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    let scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 20);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    scene.background = new THREE.Color(0x1a1a1a);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    let light = new THREE.DirectionalLight(0xb8b8b8, 1);
    light.position.set(0, 40, 0);
    light.castShadow = true;
    light.shadow.camera.left = -10;
    light.shadow.camera.right = 10;
    light.shadow.camera.top = 10;
    light.shadow.camera.bottom = -10;
    scene.add(light);

    const jShape = new THREE.Group();
    const geometry1 = new THREE.BoxGeometry(3, 1, 1);
    const geometry2 = new THREE.BoxGeometry(1, 3.5, 1);
    const geometry3 = new THREE.BoxGeometry(3, 1, 1);
    const geometry4 = new THREE.BoxGeometry(1, 0.5, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    const mesh1 = new THREE.Mesh(geometry1, material);
    const mesh2 = new THREE.Mesh(geometry2, material);
    const mesh3 = new THREE.Mesh(geometry3, material);
    const mesh4 = new THREE.Mesh(geometry4, material);
    mesh1.position.x = 0;
    mesh1.position.y = 2.25;
    mesh2.position.x = 0;
    mesh2.position.y = 0;
    mesh3.position.x = -1;
    mesh3.position.y = -2.25;
    mesh4.position.x = -2;
    mesh4.position.y = -1.5;
    jShape.add(mesh1);
    jShape.add(mesh2);
    jShape.add(mesh3);
    jShape.add(mesh4);
    scene.add(jShape);

    const initialRotationX = -0.9;
    const initialRotationY = -0.05;
    const initialRotationZ = -0.7;

    jShape.rotation.x = initialRotationX;
    jShape.rotation.y = initialRotationY;
    jShape.rotation.z = initialRotationZ;

    function animate() {
      requestAnimationFrame(animate);

      const scrollOffset = window.scrollY - scrollStart;
      scrollStart = window.scrollY;
      jShape.rotation.x -= scrollOffset * 0.002;
      jShape.rotation.y -= scrollOffset * 0.002;
      renderer.render(scene, camera);
    }

    function onWindowScroll() {
      if (!scrollStart) {
        scrollStart = window.scrollY;
      }
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('scroll', onWindowScroll, false);
    window.addEventListener('resize', onWindowResize, false);

    return () => {
      window.removeEventListener('scroll', onWindowScroll, false);
      window.removeEventListener('resize', onWindowResize, false);
    };
  }, []);

  return <div ref={mountRef} id="theJ"></div>;
};

export default ThreeD;
