import { useState, useEffect } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ContactPage from './components/ContactPage';
import ManufacturingSection from './components/ManufacturingSection';
import Cockpit from './components/Cockpit';
import SciencePage from './components/SciencePage';
import ProductsPage from './components/ProductsPage';
import Header from './components/Header';

function App() {
  const [view, setView] = useState<'project' | 'science' | 'products' | 'contact'>('project');
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate Speed (0 to 120 KM/H)
  const [speed, setSpeed] = useState(0);
  const speedValue = useTransform(smoothProgress, [0, 1], [0, 120]);

  // Calculate Altitude:
  // Starts ONLY when Speed > 80km/h.
  // Speed 80 -> Alt 0. Speed 120 -> Alt 1.0.
  const [altitude, setAltitude] = useState(0);
  const altitudeValue = useTransform(speedValue, (currentSpeed) => {
    if (currentSpeed < 80) return 0;
    return ((currentSpeed - 80) / 40) * 0.6;
  });

  // Calculate Efficiency (L/D Ratio):
  // 0 Speed -> 0 Efficiency
  // 0.1m Altitude -> Max Efficiency (80)
  // >0.1m -> Efficiency drops as we leave ground effect
  const [efficiency, setEfficiency] = useState(0);
  const efficiencyValue = useTransform(altitudeValue, (alt) => {
    if (alt <= 0.001) return 0; // On ground/static
    if (alt <= 0.1) return (alt / 0.1) * 80; // Ramp up to peak at 0.1m
    // Decay from 80 down to ~12 at 1.0m (standard aircraft L/D)
    return 80 - ((alt - 0.1) / 0.9) * (80 - 12);
  });

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
  }, [speedValue, altitudeValue]);

  // Determine Telemetry Display Values (Mock Max for Products View)
  const displaySpeed = view === 'products' ? 120 : speed;
  const displayAltitude = view === 'products' ? 1.0 : altitude;
  const displayEfficiency = view === 'products' ? 12.0 : efficiency;

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

          <footer className="py-20 flex flex-col items-center border-t border-white/5 opacity-50 scroll-snap-align-start snap-start">
            <div className="text-[10px] font-mono mb-2 uppercase tracking-[1em]">FWISH AEROSPACE</div>
            <div className="text-[8px] text-white/20">© 2025 FWISH AEROSPACE TECHNOLOGIES — GLOBAL TRANSPORT INFRASTRUCTURE.</div>
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
