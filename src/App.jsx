import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Environment,
} from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import getUuid from 'uuid-by-string';
import { useDispatch } from 'react-redux';

const GOLDENRATIO = 1.61803398875;

function App({ images }) {
  useEffect(() => {
    let location = window.location;
    let path = window.location.pathname;
    console.log(location);
  });
  return (
    <div className='h-screen'>
      <Canvas
        gl={{ alpha: false }}
        dpr={[1, 1.5]}
        camera={{ fov: 70, position: [0, 0, 10] }}
      >
        <color attach='background' args={['#191920']} />
        <fog attach='fog' args={['#191920', 0, 15]} />
        <Environment preset='city' />
        <group position={[0, -0.5, 0]}>
          <Frames images={images} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color='#101010'
              metalness={0.5}
            />
          </mesh>
        </group>
      </Canvas>
      <div className='fixed left-[50px] top-[50px] w-[200px] h-[300px] p-1 rounded-md border-2 border-[#ffffff90]'>
        <div className='w-full h-full bg-[#ffffff90] rounded-sm'></div>
      </div>
    </div>
  );
}

const Frames = ({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) => {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute('/team/:id');
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });
  useFrame((state, dt) => {
    state.camera.position.lerp(p, 0.035);
    state.camera.quaternion.slerp(q, 0.035);
  });

  const cardClickHandler = (e) => {
    // dispatch(setPath(e.object ? '/team' : '/team/' + e.object.name));
    e.stopPropagation(),
      setLocation(
        clicked.current === e.object ? '/team' : '/team/' + e.object.name
      );
  };
  return (
    <group
      ref={ref}
      onClick={cardClickHandler}
      onPointerMissed={() => setLocation('/team')}
    >
      {images.map(
        (props) => <Frame key={props.url} {...props} hero = {props.name}/> /* prettier-ignore */
      )}
    </group>
  );
};

function Frame({ url, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const image = useRef();
  const frame = useRef();
  const name = getUuid(url);
  useCursor(hovered);
  useFrame((state) => {
    // image.current.material.zoom =
    //   2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    // image.current.scale.x = THREE.MathUtils.lerp(
    //   image.current.scale.x,
    //   0.85 * (hovered ? 0.85 : 1),
    //   0.1
    // );
    // image.current.scale.y = THREE.MathUtils.lerp(
    //   image.current.scale.y,
    //   0.9 * (hovered ? 0.905 : 1),
    //   0.1
    // );
    // frame.current.material.color.lerp(
    //   c.set(hovered ? '#151515' : 'white'),
    //   0.1
    // );
  });
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color='#151515'
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.92, 0.92, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          scale={[0.9, 0.9, 0.9]}
          position={[0, 0, 0.7]}
          url={url}
        />
      </mesh>
      {/* <Text
        maxWidth={0.1}
        anchorX='left'
        anchorY='top'
        position={[0.55, GOLDENRATIO, 0]}
        // position={[-0.45, GOLDENRATIO + 0.1, 0]}
        fontSize={0.08}
      >
        {props.data.role + ' ' + props.data.name}
      </Text>
      <Image
        onClick={() => alert('discord link clicked')}
        scale={[0.1, 0.1, 0.1]}
        position={[0.6, 1.35, 0]}
        url='/images/discord.png'
      />
      <Image
        scale={[0.1, 0.1, 0.1]}
        position={[0.75, 1.35, 0]}
        url='/images/linkedin.png'
      /> */}
    </group>
  );
}

export default App;
