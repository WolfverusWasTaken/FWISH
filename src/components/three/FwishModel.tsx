import * as THREE from 'three'
import React, { useMemo, useEffect } from 'react'
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

  // Load and optimize STL geometry
  const geometry = useLoader(STLLoader, modelPath)

  useEffect(() => {
    if (geometry) {
      // 1. Pivot Correction: Move the center of rotation to the volumetric center of the craft.
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

    // High-end desktop shader with Clearcoat (for that polished carbon/epoxy look)
    return new THREE.MeshPhysicalMaterial({
      color: baseColor,
      metalness: 0.7,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      emissive: accentColor,
      emissiveIntensity: 0.25,
      reflectivity: 1.0,
      iridescence: 0.3,
      iridescenceIOR: 1.5,
      thickness: 1.0,
    })
  }, [])

  // 2. Video-Game Style Animation: Slow Spin + Character Select Bounce
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime()

      // Slow rotation (around World Y)
      group.current.rotation.y = t * 0.5

      // Rhythmic Bounce (Character Select style)
      // We use Math.abs(Math.sin) for a "snappy" landing effect, or a high-freq sine for a floaty bounce
      group.current.position.y = Math.sin(t * 1.5) * 0.15

      // Add a slight tilt oscillation for extra "life"
      group.current.rotation.x = Math.sin(t * 0.5) * 0.05
    }
  })

  // Initial orientation (applied to the inner geometry container)
  const getInitialRotation = (): [number, number, number] => {
    switch (viewType) {
      case 'top': return [-Math.PI / 2, 0, 0]
      case 'side': return [0, Math.PI / 2, 0]
      case 'front': return [-Math.PI / 2.5, 0, -Math.PI / 4]
      default: return [0, 0, 0]
    }
  }

  return (
    <group ref={group} dispose={null} {...props}>
      <group rotation={getInitialRotation()}>
        <mesh
          geometry={geometry}
          castShadow
          receiveShadow
          material={material}
        />
      </group>
    </group>
  )
}
