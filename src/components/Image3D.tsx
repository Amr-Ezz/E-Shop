import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";

interface Image3DProps {
  url: string;
  width: number;
  height: number;
  animationType?: "rotate" | "scale" | "bounce" | "wave" | "twist";
}

const Image3D: React.FC<Image3DProps> = ({
  url,
  width = 300,
  height = 300,
  animationType = "rotate",
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const { scene, camera, renderer, plane } = useMemo(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);

    const geometry = new THREE.PlaneGeometry(7, 7);
    const material = new THREE.MeshBasicMaterial({ transparent: true });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    return { scene, camera, renderer, plane };
  }, [width, height]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Attach renderer once
    mountRef.current.appendChild(renderer.domElement);

    // Load texture asynchronously to prevent blocking render
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (texture) => {
        plane.material.map = texture;
        plane.material.needsUpdate = true;
      },
      undefined,
      (error) => console.error("Texture loading error:", error)
    );

    // Start animation loop
    const animate = () => {
      const time = Date.now();

      if (animationType === "rotate") {
        plane.rotation.x += 0.01;
        plane.rotation.y += 0.01;
      } else if (animationType === "scale") {
        const scale = 1 + 0.1 * Math.sin(time * 0.002);
        plane.scale.set(scale, scale, scale);
      } else if (animationType === "bounce") {
        plane.position.y = Math.sin(time * 0.005) * 0.5;
      } else if (animationType === "wave") {
        const time = Date.now() * 0.001;
        plane.rotation.x = Math.sin(time) * 0.3;
        plane.rotation.y = Math.cos(time) * 0.3;
        plane.position.y = Math.sin(time * 2) * 0.3;
      } else if (animationType === "twist") {
        const time = Date.now() * 0.001;
        plane.rotation.z = Math.sin(time) * 0.5;
        plane.rotation.x = Math.sin(time * 1.5) * 0.2;
        plane.rotation.y = Math.cos(time * 1.5) * 0.2;
      }else {

      }

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup function
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [url, scene, camera, renderer, plane]);

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px`, overflow: "hidden" }}
      ref={mountRef}
    />
  );
};

export default Image3D;
