import * as THREE from 'three'
import React from 'react'
import { Center } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { STLLoader } from 'three-stdlib'

interface FwishModelProps {
  viewType?: 'top' | 'side' | 'front';
  scale?: number;
  center?: boolean;
}

export function FwishModel({ viewType = 'front', center = true, ...props }: FwishModelProps) {
  const group = React.useRef<THREE.Group>(null)

  // Load STL instead of GLB
  const geometry = useLoader(STLLoader, '/assets/Logistic_Model_V0.stl')

  useFrame((state) => {
    if (group.current) {
      // Gentle hovering effect without overriding rotation
      const t = state.clock.getElapsedTime()
      group.current.position.y = Math.sin(t) * 0.05
    }
  })

  // Set initial orientation based on viewType only initially
  const getInitialRotation = (): [number, number, number] => {
    switch (viewType) {
      case 'top': return [-Math.PI / 2, 0, 0];
      case 'side': return [0, Math.PI / 2, 0];
      case 'front': return [-Math.PI / 2, 0, Math.PI]; // Standard STL orientation fix
      default: return [0, 0, 0];
    }
  }

  const model = (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.8}
        roughness={0.1}
        emissive="#00A3FF"
        emissiveIntensity={0.05}
      />
    </mesh>
  );

  return (
    <group
      ref={group}
      rotation={getInitialRotation()}
      {...props}
      dispose={null}
    >
      {center ? (
        <Center scale={0.0003}> {/* STL files from CAD are typically in mm, scaling to m */}
          {model}
        </Center>
      ) : model}
    </group>
  )
}

