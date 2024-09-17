import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { technologies } from "../../constants";

const TechIcon = ({ position, imgUrl, name }) => {
  const meshRef = useRef();
  const texture = useTexture(imgUrl || 'path-to-default-image.png'); // Usa una imagen por defecto si no se carga la URL

  // Controla la animación para hacerla más dinámica
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2;
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        {/* Reduce el tamaño del plano para evitar que cubra el texto */}
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
     
    </group>
  );
};

const TechScene = () => {
  const icons = useMemo(() => {
    const itemsPerRow = 6;
    const spacingX = 7; // Reduce el espaciado horizontal entre iconos
    const spacingY = 3; // Reduce el espaciado vertical entre filas

    return technologies.map((tech, index) => {
      const row = Math.floor(index / itemsPerRow);
      const col = index % itemsPerRow;
      const x = (col - itemsPerRow / 2 + 0.5) * spacingX;
      const y = (row - itemsPerRow / 2 + 0.5) * -spacingY;
      return (
        <TechIcon
          key={tech.name}
          position={[x, y, 0]}
          imgUrl={tech.icon}
          name={tech.name}
        />
      );
    });
  }, []);

  return (
    <>
      <ambientLight intensity={0.8} /> {/* Ajusta la intensidad de la luz */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} /> {/* Añade una luz direccional */}
      {icons}
    </>
  );
};

const TechSceneWrapper = () => (
  <div style={{ width: "100%", height: "100%" }}> {/* Ocupa toda la altura disponible */}
    <Canvas camera={{ position: [0, 0, 25], fov: 70 }}> {/* Ajusta la posición de la cámara */}
      <TechScene />
    </Canvas>
  </div>
);

export default TechSceneWrapper;
