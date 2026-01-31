import { useState, useEffect } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import Cockpit from './components/Cockpit';
import HeroSection from './components/HeroSection';
import ModelSection from './components/ModelSection';
import ScienceSection from './components/ScienceSection';
import SimulationSection from './components/SimulationSection';
import ManufacturingSection from './components/ManufacturingSection';
import PressureSection from './components/PressureSection';

function App() {
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate Speed (0 to 240 KPH)
  const [speed, setSpeed] = useState(0);
  const speedValue = useTransform(smoothProgress, [0, 1], [0, 242]);

  // Calculate Altitude (Starts at 20m, drops to 1.2m at Science section, then levels out)
  const [altitude, setAltitude] = useState(20);
  const altitudeValue = useTransform(smoothProgress, [0, 0.4, 0.5, 0.8, 1], [20, 15, 1.2, 0.8, 5]);

  // Calculate Efficiency (L/D Ratio) - Spikes when altitude is low
  const [efficiency, setEfficiency] = useState(8);
  const efficiencyValue = useTransform(smoothProgress, [0, 0.45, 0.5, 0.7, 0.75, 1], [8, 12, 24.5, 22.1, 15, 12]);

  // Sync state with motion values for the non-motion components if needed
  // But Cockpit can actually take motion values if we wrap it, but for simplicity:
  useEffect(() => {
    return speedValue.on("change", (latest) => setSpeed(latest));
  }, [speedValue]);

  useEffect(() => {
    return altitudeValue.on("change", (latest) => setAltitude(latest));
  }, [altitudeValue]);

  useEffect(() => {
    return efficiencyValue.on("change", (latest) => setEfficiency(latest));
  }, [efficiencyValue]);

  return (
    <div className="bg-black text-white selection:bg-accent-blue selection:text-black min-h-[300vh]">
      <Cockpit
        speed={speed}
        altitude={altitude}
        efficiency={efficiency}
      />

      <main className="relative z-10">
        <HeroSection />
        <ModelSection />

        <ScienceSection />
        <PressureSection />
        <SimulationSection />
        <ManufacturingSection />

        <footer className="py-20 flex flex-col items-center border-t border-white/5 opacity-50 scroll-snap-align-start snap-start">
          <div className="text-[10px] font-mono mb-2 uppercase tracking-[1em]">FWISH Project</div>
          <div className="text-[8px] text-white/20">© 2026 DESIGN BUREAU 42. ALL FLIGHT SYSTEMS SECURED.</div>
        </footer>
      </main>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-green/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}

export default App;
