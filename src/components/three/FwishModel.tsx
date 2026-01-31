import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { STLLoader } from 'three-stdlib'

interface FwishModelProps {
  viewType?: 'top' | 'side' | 'front'
  modelPath?: string
}

export function FwishModel({
  viewType = 'front',
  modelPath = 'assets/Logistic_Model_V0.stl',
  ...props
}: FwishModelProps) {
  const group = React.useRef<THREE.Group>(null)

  // Load STL
  const geometry = useLoader(STLLoader, modelPath)

  // Shared material to save memory
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#ffffff",
    metalness: 0.35,
    roughness: 0.25,
    emissive: "#00A3FF",
    emissiveIntensity: 0.25,
  }), [])

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
        return [-Math.PI / 2.5, 0, -Math.PI / 4]
      default:
        return [0, 0, 0]
    }
  }

  return (
    <group
      ref={group}
      rotation={getInitialRotation()}
      dispose={null}
      {...props}
    >
      <mesh
        geometry={geometry}
        castShadow
        receiveShadow
        material={material}
      />
    </group>
  )
}
