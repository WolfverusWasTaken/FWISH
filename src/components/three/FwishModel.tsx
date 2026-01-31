import * as THREE from 'three'
import React, { useMemo, useEffect, useState } from 'react'
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
  const [isMobile, setIsMobile] = useState(false)

  // Load and optimize STL geometry
  const geometry = useLoader(STLLoader, modelPath)

  useEffect(() => {
    // Determine mobile once
    setIsMobile(window.innerWidth < 768)

    // STL files often have face normals but not vertex normals (flat look)
    // Computing vertex normals ensures smooth shading, which looks better 
    // and is more efficient for the shader to process than per-face normals.
    if (geometry) {
      geometry.computeVertexNormals()
      geometry.center() // Initial center
    }
  }, [geometry])

  // Optimization: Switch to MeshPhongMaterial on mobile
  // Phong is much lighter than Standard (PBR) and avoids heavy shader compilation
  const material = useMemo(() => {
    const commonProps = {
      color: "#ffffff",
      emissive: "#00A3FF",
      emissiveIntensity: 0.2,
    }

    if (isMobile) {
      return new THREE.MeshPhongMaterial({
        ...commonProps,
        shininess: 30,
        specular: "#00A3FF"
      })
    }

    return new THREE.MeshStandardMaterial({
      ...commonProps,
      metalness: 0.4,
      roughness: 0.3,
    })
  }, [isMobile])

  // Gentle hover animation
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime()
      group.current.position.y = Math.sin(t) * 0.04
      // Subtle rotation for "living" feel
      group.current.rotation.z += Math.sin(t * 0.5) * 0.0001
    }
  })

  // Initial orientation per view
  const getInitialRotation = (): [number, number, number] => {
    switch (viewType) {
      case 'top': return [-Math.PI / 2, 0, 0]
      case 'side': return [0, Math.PI / 2, 0]
      case 'front': return [-Math.PI / 2.5, 0, -Math.PI / 4]
      default: return [0, 0, 0]
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
        castShadow={!isMobile} // Disable shadows for better mobile FPS
        receiveShadow={!isMobile}
        material={material}
      />
    </group>
  )
}
