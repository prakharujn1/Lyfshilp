import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import gsap from 'gsap';

const LandingAnimation = () => {
  const containerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create animated elements
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add lights
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    // Position camera
    camera.position.z = 5;

    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Show the button after animation
        document.getElementById('start-button').style.opacity = 1;
      }
    });

    // Add animations
    tl.from(cube.position, {
      duration: 2,
      y: -10,
      ease: "bounce.out"
    })
    .to(cube.rotation, {
      duration: 1.5,
      y: Math.PI * 2,
      ease: "power1.inOut"
    })
    .to(cube.scale, {
      duration: 1,
      x: 2,
      y: 2,
      z: 2,
      ease: "back.out(1.7)"
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <div ref={containerRef} className="absolute inset-0" />
      <button
        id="start-button"
        onClick={() => navigate('/home')}
        className="absolute left-1/2 bottom-20 transform -translate-x-1/2 opacity-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-110 transition-all duration-300"
      >
        Click here to start the journey
      </button>
    </div>
  );
};

export default LandingAnimation;