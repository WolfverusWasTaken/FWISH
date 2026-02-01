import { useState, useEffect } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import ManufacturingSection from './components/ManufacturingSection';
import Cockpit from './components/Cockpit';
import SciencePage from './components/SciencePage';
import ProductsPage from './components/ProductsPage';
import Header from './components/Header';

function App() {
  const [view, setView] = useState<'project' | 'science' | 'products'>('project');
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

  // Sync state with motion values
  useEffect(() => {
    const unsubSpeed = speedValue.on("change", (latest: number) => setSpeed(latest));
    const unsubAlt = altitudeValue.on("change", (latest: number) => setAltitude(latest));
    const unsubEff = efficiencyValue.on("change", (latest: number) => setEfficiency(latest));
    return () => {
      unsubSpeed();
      unsubAlt();
      unsubEff();
    };
  }, [speedValue, altitudeValue, efficiencyValue]);

  return (
    <div className="bg-black text-white selection:bg-accent-blue selection:text-black">
      <Header currentView={view} onViewChange={setView} />

      <Cockpit
        speed={speed}
        altitude={altitude}
        efficiency={efficiency}
      />

      {view === 'science' ? (
        <SciencePage />
      ) : view === 'products' ? (
        <ProductsPage />
      ) : (
        <main className="relative z-10 min-h-[300vh]">
          <HeroSection />
          <ManufacturingSection />
          <ContactSection />

          <footer className="py-20 flex flex-col items-center border-t border-white/5 opacity-50 scroll-snap-align-start snap-start">
            <div className="text-[10px] font-mono mb-2 uppercase tracking-[1em]">FWISH AEROSPACE</div>
            <div className="text-[8px] text-white/20">© 2026 FWISH AEROSPACE TECHNOLOGIES — GLOBAL TRANSPORT INFRASTRUCTURE.</div>
          </footer>
        </main>
      )}

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-green/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}

export default App;
