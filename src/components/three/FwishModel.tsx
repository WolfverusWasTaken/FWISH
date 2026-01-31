import * as THREE from 'three'
import React from 'react'
import { Center } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { STLLoader } from 'three-stdlib'

interface FwishModelProps {
  viewType?: 'top' | 'side' | 'front'
  scale?: number
  center?: boolean
  modelPath?: string
}

export function FwishModel({
  viewType = 'front',
  center = true,
  modelPath = 'assets/Logistic_Model_V0.stl',
  ...props
}: FwishModelProps) {
  const group = React.useRef<THREE.Group>(null)

  // Load STL
  const geometry = useLoader(STLLoader, modelPath)

  // Gentle hover animation
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime()
      group.current.position.y = Math.sin(t) * 0.05
    }
  })

  // Initial orientation per view - Adjusted for Front-Top-Left perspective
  const getInitialRotation = (): [number, number, number] => {
    switch (viewType) {
      case 'top':
        return [-Math.PI / 2, 0, 0]
      case 'side':
        return [0, Math.PI / 2, 0]
      case 'front':
        // Rotates slightly down (pitch) and slightly to the right (yaw) 
        // to show Front, Top, and Left surfaces
        return [-Math.PI / 2.5, 0, -Math.PI / 4]
      default:
        return [0, 0, 0]
    }
  }

  const { viewport } = useThree()
  const isMobile = viewport.width < 5

  return (
    <group
      ref={group}
      rotation={getInitialRotation()}
      dispose={null}
      {...props}
    >
      {/* ================= LIGHTING RIG ================= */}

      {/* Key light — top left (form sculptor) */}
      <directionalLight
        position={[-5, 6, 4]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />

      {/* Fill light — soft opposite */}
      <directionalLight position={[5, 3, -4]} intensity={0.6} />

      {/* Rim light — silhouette separation */}
      <directionalLight
        position={[0, 4, -6]}
        intensity={1}
        color="#00A3FF"
      />

      {/* Ambient — restrained */}
      <ambientLight intensity={0.25} />

      {/* ================= MODEL ================= */}

      {center ? (
        <Center scale={isMobile ? 0.00015 : 0.0003}>
          <mesh geometry={geometry} castShadow receiveShadow>
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.35}
              roughness={0.25}
              emissive="#00A3FF"
              emissiveIntensity={0.25}
            />
          </mesh>
        </Center>
      ) : (
        <mesh geometry={geometry} castShadow receiveShadow>
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.35}
            roughness={0.25}
            emissive="#00A3FF"
            emissiveIntensity={0.25}
          />
        </mesh>
      )}
    </group>
  )
}
