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
    setIsMobile(window.innerWidth < 768)

    if (geometry) {
      // 1. Pivot Correction: Move the center of rotation to the volumetric center of the craft.
      // This ensures that when you rotate, the model orbits around its geometric middle (wing/fuselage)
      // rather than the tail or cockpit origin.
      geometry.computeBoundingBox()
      geometry.center()
      geometry.computeVertexNormals()
    }
  }, [geometry])

  // 2. Graphic Texture Optimization: Premium Aerospace Finish
  // Using MeshPhysicalMaterial for advanced light scattering and metallic sheen
  const material = useMemo(() => {
    const baseColor = "#ffffff"
    const accentColor = "#00A3FF"

    if (isMobile) {
      // Optimized mobile shader with high-quality specular highlights
      return new THREE.MeshPhongMaterial({
        color: baseColor,
        emissive: accentColor,
        emissiveIntensity: 0.15,
        shininess: 60,
        specular: "#ffffff",
        flatShading: false
      })
    }

    // High-end desktop shader with Clearcoat (for that polished carbon/epoxy look)
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

  // Elegant hover animation
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime()
      group.current.position.y = Math.sin(t) * 0.03
    }
  })

  // Initial orientation
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
