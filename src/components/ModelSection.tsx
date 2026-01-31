import { type FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center, PresentationControls } from '@react-three/drei';
import { FwishModel } from './three/FwishModel';

const ModelSection: FC = () => {
    return (
        <section id="prototype-3d" className="min-h-screen bg-black flex flex-col p-8 md:p-20 items-center justify-center">
            {/* Header */}
            <div className="w-full max-w-[1200px] mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse shadow-[0_0_15px_#00A3FF]" />
                    <div className="text-accent-blue font-mono text-[11px] tracking-[0.6em] uppercase opacity-70">Tactical Design Review // WIG-01</div>
                </div>
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none m-0 text-white">
                    Technical <span className="text-accent-blue">Prototype</span>
                </h2>
            </div>

            {/* Main Center View */}
            <div className="w-full max-w-[900px] aspect-square relative border border-white/10 bg-black/20 rounded-3xl overflow-hidden shadow-2xl transition-all hover:bg-black/30 hover:border-accent-blue/20 group">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 25 }}>
                    <Suspense fallback={null}>
                        <Environment preset="city" />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={3} color="#00A3FF" />
                        <pointLight position={[-10, -10, -10]} intensity={2} color="#00A3FF" />

                        <PresentationControls
                            global
                            config={{ mass: 2, tension: 500 }}
                            snap={{ mass: 4, tension: 1500 }}
                            rotation={[0, 0.3, 0]}
                            polar={[-Math.PI / 3, Math.PI / 3]}
                            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                        >
                            <Center scale={2.5}>
                                <FwishModel viewType="front" center={true} />
                            </Center>
                        </PresentationControls>
                    </Suspense>
                </Canvas>

                {/* Viewport UI Overlay */}
                <div className="absolute top-8 left-8 font-mono text-[10px] text-accent-blue/80 uppercase tracking-[0.4em] border-l-2 border-accent-blue pl-4">
                    SECURE VIEWPORT // 01
                </div>

                <div className="absolute bottom-8 right-8 text-right">
                    <div className="text-accent-blue font-mono text-xs mb-1 tracking-[0.3em] font-bold uppercase">WIG-01 Chassis</div>
                    <div className="text-white/20 text-[10px] font-mono leading-relaxed uppercase tracking-[0.2em]">Full aerodynamic geometric validation</div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="w-full max-w-[1200px] mt-12 pt-8 border-t border-white/5 flex justify-between items-center opacity-30 font-mono text-[9px] uppercase tracking-[0.5em] text-white">
                <span>Block-09 Geometry Verified // AUTH-772</span>
                <span>© 2026 DESIGN BUREAU 42</span>
            </div>
        </section>
    );
};

export default ModelSection;
