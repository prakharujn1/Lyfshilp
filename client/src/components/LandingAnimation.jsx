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
    scene.background = new THREE.Color(0x87CEEB); // Sky blue background
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating books (representing modules)
    const books = [];
    const bookGeometry = new THREE.BoxGeometry(1, 1.5, 0.2);
    const bookColors = [0xff6b6b, 0x4ecdc4, 0xffe66d, 0x95e1d3];
    
    for (let i = 0; i < 4; i++) {
      const bookMaterial = new THREE.MeshPhongMaterial({ color: bookColors[i] });
      const book = new THREE.Mesh(bookGeometry, bookMaterial);
      book.position.set(i * 2 - 3, 0, 0);
      scene.add(book);
      books.push(book);
    }

    // Create a game controller model (representing gaming activities)
    const controllerGeometry = new THREE.BoxGeometry(2, 1, 0.5);
    const controllerMaterial = new THREE.MeshPhongMaterial({ color: 0xff4757 });
    const controller = new THREE.Mesh(controllerGeometry, controllerMaterial);
    controller.position.set(0, -3, 0);
    scene.add(controller);

    // Create progress chart (representing reports)
    const chartGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
    const chartMaterial = new THREE.MeshPhongMaterial({ color: 0x7bed9f });
    const chart = new THREE.Mesh(chartGeometry, chartMaterial);
    chart.position.set(3, 2, 0);
    scene.add(chart);

    // Add lights
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    // Position camera
    camera.position.z = 8;

    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('#start-button', {
          opacity: 1,
          duration: 1,
          y: 0
        });
      }
    });

    // Animate books
    books.forEach((book, i) => {
      tl.from(book.position, {
        duration: 1,
        y: -10,
        ease: "bounce.out",
        delay: i * 0.2
      })
      .to(book.rotation, {
        duration: 1,
        y: Math.PI * 2,
        ease: "power1.inOut"
      }, "-=0.5");
    });

    // Animate controller
    tl.from(controller.position, {
      duration: 1.5,
      x: -10,
      ease: "elastic.out(1, 0.3)"
    }, "-=1");

    // Animate chart
    tl.from(chart.position, {
      duration: 1,
      y: 10,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .to(chart.rotation, {
      duration: 2,
      y: Math.PI * 2,
      ease: "none",
      repeat: -1
    });

    // Add floating animation to all objects
    const floatAnimation = () => {
      books.forEach((book) => {
        book.position.y += Math.sin(Date.now() * 0.001) * 0.001;
      });
      controller.position.y += Math.sin(Date.now() * 0.001) * 0.001;
      chart.position.y += Math.sin(Date.now() * 0.001) * 0.001;
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      floatAnimation();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div ref={containerRef} className="absolute inset-0" />
      
      {/* Floating text elements */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white text-center">
        Welcome to EduManiax!
      </div>
      
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-xl text-white text-center space-y-2">
        <div className="animate-fade-in-1">🎮 Fun Learning Games</div>
        <div className="animate-fade-in-2">📚 Interactive Modules</div>
        <div className="animate-fade-in-3">📊 Weekly Progress Reports</div>
      </div>

      <button
        id="start-button"
        onClick={() => navigate('/')}
        className="absolute left-1/2 bottom-20 transform -translate-x-1/2 translate-y-20 opacity-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-110 transition-all duration-300"
      >
        Click here to start the journey
      </button>

      <style jsx>{`
        .animate-fade-in-1 { animation: fadeIn 0.5s ease-out 1s forwards; }
        .animate-fade-in-2 { animation: fadeIn 0.5s ease-out 1.5s forwards; }
        .animate-fade-in-3 { animation: fadeIn 0.5s ease-out 2s forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LandingAnimation;