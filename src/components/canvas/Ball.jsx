import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';

const Ball = ({ imgUrl, setTooltipVisible }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        onPointerOver={() => setTooltipVisible(true)} // Mostrar tooltip al pasar el ratón
        onPointerOut={() => setTooltipVisible(false)} // Ocultar tooltip al sacar el ratón
      >
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#8ca3ad"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  setTooltipVisible: PropTypes.func.isRequired,
};

const BallCanvas = ({ icon,name }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <Tooltip 
        title={name} 
        open={tooltipVisible} 
        placement='top'
        // Aplica el estilo para cambiar el tamaño de la fuente
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: '1rem', // Cambia el tamaño de fuente aquí
            },
          },
        }}
      >
        <div style={{ width: '100%', height: '100%' }}>
          <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
              <OrbitControls enableZoom={false} />
              <Ball imgUrl={icon} setTooltipVisible={setTooltipVisible} />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      </Tooltip>
    </>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired
};

export default BallCanvas;
