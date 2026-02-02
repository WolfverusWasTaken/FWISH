import { useState, useEffect, useMemo } from 'react'
import { useScroll, useSpring, useMotionValue } from 'framer-motion'

import HeroSection from './components/HeroSection'
import ContactPage from './components/ContactPage'
import ManufacturingSection from './components/ManufacturingSection'
import Cockpit from './components/Cockpit'
import SciencePage from './components/SciencePage'
import ProductsPage from './components/ProductsPage'
import Header from './components/Header'

/* ---------------------------------------------
   Flight Narrative States per Page
--------------------------------------------- */
interface FlightState {
  speedTarget: number
  altitudeTarget: number
  efficiencyTarget: number
}

const FLIGHT_STATES: Record<'project' | 'science' | 'products' | 'contact', FlightState> = {
  // Pre-Takeoff: Slow ramp, no altitude
  project: {
    speedTarget: 40,
    altitudeTarget: 0.00,
    efficiencyTarget: 0, // Will be calculated based on speed
  },
  // Acceleration & Ground-Effect Entry
  science: {
    speedTarget: 83,
    altitudeTarget: 0.20,
    efficiencyTarget: 0, // Will be calculated
  },
  // Operational Envelope
  products: {
    speedTarget: 120,
    altitudeTarget: 0.60,
    efficiencyTarget: 0, // Will be calculated
  },
  // Cruise / Sustain
  contact: {
    speedTarget: 115,
    altitudeTarget: 0.50,
    efficiencyTarget: 0, // Will be calculated
  },
}

function App() {
  const [view, setView] = useState<'project' | 'science' | 'products' | 'contact'>('project')
  const { scrollYProgress } = useScroll()

  /* ---------------------------------------------
     Page-based target values
  --------------------------------------------- */
  const currentState = FLIGHT_STATES[view]

  /* ---------------------------------------------
     Motion values with smooth spring transitions
  --------------------------------------------- */
  const speedMotion = useMotionValue(0)
  const altitudeMotion = useMotionValue(0)
  const efficiencyMotion = useMotionValue(0)

  const speedValue = useSpring(speedMotion, {
    stiffness: 50,
    damping: 25,
    restDelta: 0.01,
  })

  const altitudeValue = useSpring(altitudeMotion, {
    stiffness: 50,
    damping: 25,
    restDelta: 0.001,
  })

  const efficiencyValue = useSpring(efficiencyMotion, {
    stiffness: 50,
    damping: 25,
    restDelta: 0.01,
  })

  /* ---------------------------------------------
     Utility: smoothstep
  --------------------------------------------- */
  const smoothstep = (edge0: number, edge1: number, x: number) => {
    const t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1)
    return t * t * (3 - 2 * t)
  }

  /* ---------------------------------------------
     Calculate efficiency based on speed and altitude
  --------------------------------------------- */
  const calculateEfficiency = (speed: number, altitude: number): number => {
    const FREE_STREAM = 70
    const AT_1M = 77
    const MAX_EFF = 125

    // Smooth activation: 15 → 20 km/h
    const speedActivation = smoothstep(15, 20, speed)
    if (speedActivation <= 0.001) return 0

    // Clamp altitude for calculation
    const h = Math.min(Math.max(altitude, 0.05), 1.0)

    // Base efficiency ramp (70 → 77)
    const baseEff = FREE_STREAM + (AT_1M - FREE_STREAM) * (1 - Math.min(h, 1))

    // Ground-effect amplification (exponential, peaks at 0.15-0.25m)
    const k = 2.5
    const rawGain = Math.exp(k * (1 - h)) - 1
    const maxGain = Math.exp(k * (1 - 0.05)) - 1
    const gainNorm = rawGain / maxGain

    const eff = baseEff + gainNorm * (MAX_EFF - AT_1M)

    return speedActivation * Math.min(eff, MAX_EFF)
  }

  /* ---------------------------------------------
     Update targets when view changes
  --------------------------------------------- */
  useEffect(() => {
    const targetSpeed = currentState.speedTarget
    const targetAltitude = currentState.altitudeTarget

    speedMotion.set(targetSpeed)
    altitudeMotion.set(targetAltitude)

    // Calculate efficiency based on target values
    const targetEfficiency = calculateEfficiency(targetSpeed, targetAltitude)
    efficiencyMotion.set(targetEfficiency)
  }, [view, currentState, speedMotion, altitudeMotion, efficiencyMotion])

  /* ---------------------------------------------
     Project page: slow scroll-based ramp (0 → 40 km/h)
  --------------------------------------------- */
  useEffect(() => {
    if (view === 'project') {
      const unsubScroll = scrollYProgress.on('change', (progress) => {
        const scrollSpeed = progress * 40 // 0 → 40 km/h
        speedMotion.set(scrollSpeed)
        altitudeMotion.set(0) // Locked at ground

        const eff = calculateEfficiency(scrollSpeed, 0)
        efficiencyMotion.set(eff)
      })

      return () => unsubScroll()
    }
  }, [view, scrollYProgress, speedMotion, altitudeMotion, efficiencyMotion])

  /* ---------------------------------------------
     Subtle oscillations for realism (all pages)
  --------------------------------------------- */
  useEffect(() => {
    // Skip oscillations on project page (uses scroll-based values)
    if (view === 'project') return

    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.016 // ~60fps

      // Subtle speed oscillation (±2 km/h)
      const speedOscillation = Math.sin(time * 0.8) * 2
      speedMotion.set(currentState.speedTarget + speedOscillation)

      // Subtle altitude oscillation (±0.03 m)
      const altOscillation = Math.sin(time * 1.2) * 0.03
      altitudeMotion.set(currentState.altitudeTarget + altOscillation)

      // Recalculate efficiency with oscillations
      const currentSpeed = currentState.speedTarget + speedOscillation
      const currentAlt = currentState.altitudeTarget + altOscillation
      const eff = calculateEfficiency(currentSpeed, currentAlt)
      efficiencyMotion.set(eff)

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [view, currentState, speedMotion, altitudeMotion, efficiencyMotion])

  /* ---------------------------------------------
     State tracking for display
  --------------------------------------------- */
  const [speed, setSpeed] = useState(0)
  const [altitude, setAltitude] = useState(0)
  const [efficiency, setEfficiency] = useState(0)

  useEffect(() => {
    const unsubSpeed = speedValue.on('change', (v) => setSpeed(v))
    const unsubAlt = altitudeValue.on('change', (v) => setAltitude(v))
    const unsubEff = efficiencyValue.on('change', (v) => setEfficiency(v))

    return () => {
      unsubSpeed()
      unsubAlt()
      unsubEff()
    }
  }, [speedValue, altitudeValue, efficiencyValue])

  /* ---------------------------------------------
     Regime detection
  --------------------------------------------- */
  const regime = useMemo(() => {
    if (speed < 80 && altitude <0.1) return 'GROUND RUN'
    if (speed >= 80 && altitude < 0.3) return 'OPTIMUM GROUND EFFECT'
    if (altitude >= 0.4) return 'GROUND EFFECT'
    return 'TRANSITION'
  }, [speed, altitude])

  return (
    <div className="bg-black text-white selection:bg-accent-blue selection:text-black">
      <Header currentView={view} onViewChange={setView} />

      <Cockpit
        speed={speed}
        altitude={altitude}
        efficiency={efficiency}
        regime={regime}
      />

      {view === 'science' ? (
        <SciencePage />
      ) : view === 'products' ? (
        <ProductsPage />
      ) : view === 'contact' ? (
        <ContactPage />
      ) : (
        <main className="relative z-10 min-h-[180vh]">
          <HeroSection />
          <ManufacturingSection onContactClick={() => setView('contact')} />

          <footer className="py-20 flex flex-col items-center border-t border-white/5 opacity-50">
            <div className="text-[10px] font-mono mb-2 uppercase tracking-[1em]">
              FWISH AEROSPACE
            </div>
            <div className="text-[8px] text-white/20">
              © 2025 FWISH AEROSPACE TECHNOLOGIES — GLOBAL TRANSPORT INFRASTRUCTURE.
            </div>
          </footer>
        </main>
      )}

      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-green/5 blur-[120px] rounded-full" />
      </div>
    </div>
  )
}

export default App