import * as THREE from 'three'
import React, { useMemo, useEffect, useState, useRef } from 'react'
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
  const rootGroup = useRef<THREE.Group>(null)
  const animatorGroup = useRef<THREE.Group>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Load STL geometry
  const geometry = useLoader(STLLoader, modelPath)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    if (geometry) {
      // Pivot Correction: Force the geometry's bounding basket center to (0,0,0)
      geometry.computeBoundingBox()
      geometry.center()
      geometry.computeVertexNormals()
    }
  }, [geometry])

  // Material Optimization
  const material = useMemo(() => {
    const baseColor = "#ffffff"
    const accentColor = "#00A3FF"

    if (isMobile) {
      return new THREE.MeshPhongMaterial({
        color: baseColor,
        emissive: accentColor,
        emissiveIntensity: 0.15,
        shininess: 60,
        specular: "#ffffff",
      })
    }

    return new THREE.MeshPhysicalMaterial({
      color: baseColor,
      metalness: 0.6,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: accentColor,
      emissiveIntensity: 0.2,
      reflectivity: 1.0,
      iridescence: 0.1,
      iridescenceIOR: 1.3,
    })
  }, [isMobile])

  // Animation decoupled from the root pivot group
  useFrame((state) => {
    if (animatorGroup.current) {
      const t = state.clock.getElapsedTime()
      animatorGroup.current.position.y = Math.sin(t) * 0.03
    }
  })

  // Initial orientation
  const getInitialRotation = (): [number, number, number] => {
    switch (viewType) {
      case 'top': return [-Math.PI / 2, 0, 0]
      case 'side': return [0, Math.PI / 2, 0]
      case 'front': return [-Math.PI / 2.2, 0, -Math.PI / 4]
      default: return [0, 0, 0]
    }
  }

  return (
    <group
      ref={rootGroup}
      rotation={getInitialRotation()}
      dispose={null}
      {...props}
    >
      <group ref={animatorGroup}>
        <mesh
          geometry={geometry}
          castShadow={!isMobile}
          receiveShadow={!isMobile}
          material={material}
        />
      </group>
    </group>
  )
}
