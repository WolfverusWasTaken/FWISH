import { useState, useEffect } from 'react'
import { useScroll, useTransform, useSpring } from 'framer-motion'

import HeroSection from './components/HeroSection'
import ContactPage from './components/ContactPage'
import ManufacturingSection from './components/ManufacturingSection'
import Cockpit from './components/Cockpit'
import SciencePage from './components/SciencePage'
import ProductsPage from './components/ProductsPage'
import Header from './components/Header'

function App() {
  const [view, setView] = useState<'project' | 'science' | 'products' | 'contact'>('project')
  const { scrollYProgress } = useScroll()

  /* ---------------------------------------------
     Smooth scroll signal
  --------------------------------------------- */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  /* ---------------------------------------------
     SPEED (0 → 120 km/h)
  --------------------------------------------- */
  const [speed, setSpeed] = useState(0)
  const speedValue = useTransform(smoothProgress, [0, 1], [0, 120])

  /* ---------------------------------------------
     ALTITUDE (ground-effect regime)
     Starts increasing after ~80 km/h
     Max visual altitude ~0.6 m
  --------------------------------------------- */
  const [altitude, setAltitude] = useState(0)
  const altitudeValue = useTransform(speedValue, (v) => {
    if (v < 80) return 0
    return ((v - 80) / 40) * 0.6
  })

  /* ---------------------------------------------
     Utility: smoothstep
  --------------------------------------------- */
  const smoothstep = (edge0: number, edge1: number, x: number) => {
    const t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1)
    return t * t * (3 - 2 * t)
  }

  /* ---------------------------------------------
     EFFICIENCY (L/D)
     - Appears smoothly after 15 km/h
     - Free stream L/D = 70
     - ~77 at 1 m
     - Ground-effect amplification near surface
     - Realistic saturation
  --------------------------------------------- */
  const [efficiency, setEfficiency] = useState(0)

  const efficiencyValue = useTransform(
    [speedValue, altitudeValue],
    ([v, alt]) => {
      const FREE_STREAM = 70
      const AT_1M = 77
      const MAX_EFF = 125

      /* Smooth activation: 10 → 20 km/h */
      const speedActivation = smoothstep(10, 20, v)
      if (speedActivation <= 0.001) return 0

      /* Clamp altitude */
      const h = Math.min(Math.max(alt, 0.05), 1.0)

      /* Base efficiency ramp (70 → 77) */
      const baseEff =
        FREE_STREAM + (AT_1M - FREE_STREAM) * (1 - Math.min(h, 1))

      /* Ground-effect amplification (exponential, normalized) */
      const k = 2.0
      const rawGain = Math.exp(k * (1 - h)) - 1
      const maxGain = Math.exp(k * (1 - 0.05)) - 1
      const gainNorm = rawGain / maxGain

      const eff = baseEff + gainNorm * (MAX_EFF - AT_1M)

      return speedActivation * Math.min(eff, MAX_EFF)
    }
  )

  /* ---------------------------------------------
     Sync motion values → state
  --------------------------------------------- */
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
     Products page demo override
  --------------------------------------------- */
  const displaySpeed = view === 'products' ? 120 : speed
  const displayAltitude = view === 'products' ? 1.0 : altitude
  const displayEfficiency = view === 'products' ? 70 : efficiency

  return (
    <div className="bg-black text-white selection:bg-accent-blue selection:text-black">
      <Header currentView={view} onViewChange={setView} />

      <Cockpit
        speed={displaySpeed}
        altitude={displayAltitude}
        efficiency={displayEfficiency}
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