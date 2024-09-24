import * as THREE from "three";
import { useRef, useEffect } from "react";

interface Image3DProps {
  url: string;
  width: number;
  height: number;
}

const Image3D: React.FC<Image3DProps> = ({
  url,
  width = 300,
  height = 300,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);
    const loader = new THREE.TextureLoader();
    const texture = loader.load(url);
    const geometry = new THREE.PlaneGeometry(7, 7);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.x += 0.01;
      plane.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [url, width, height]);
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
      }}
      ref={mountRef}
    ></div>
  );
};
export default Image3D;
