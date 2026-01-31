import { type FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, PresentationControls, ContactShadows } from '@react-three/drei';
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

            {/* Main Center View - Dual Viewports */}
            <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-8 relative">

                {/* Logistic Transport Model */}
                <div className="aspect-[4/3] lg:aspect-square relative border border-white/10 bg-black/20 rounded-3xl overflow-hidden shadow-2xl transition-all hover:bg-black/30 hover:border-accent-blue/20 group">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 25 }}>
                        <Suspense fallback={null}>
                            <PresentationControls
                                global
                                snap={false}
                                rotation={[0, 0.3, 0]}
                                polar={[-Math.PI / 3, Math.PI / 3]}
                                azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                            >
                                <Center scale={2.5}>
                                    <FwishModel modelPath="assets/Logistic_Model_V0.stl" viewType="front" center={true} />
                                </Center>
                            </PresentationControls>
                            <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
                        </Suspense>
                    </Canvas>
                    <div className="absolute top-6 left-6 font-mono text-[9px] text-accent-blue/80 uppercase tracking-[0.4em] border-l border-accent-blue pl-3">
                        VARIANT_LOGISTIC // 01
                    </div>
                    <div className="absolute bottom-6 right-6 text-right">
                        <div className="text-accent-blue font-mono text-[10px] mb-1 tracking-[0.3em] font-bold uppercase">Logistic Transport Model</div>
                        <div className="text-white/20 text-[8px] font-mono leading-relaxed uppercase tracking-[0.2em]">Bulk Cargo Configuration</div>
                    </div>
                </div>

                {/* Watersport Model */}
                <div className="aspect-[4/3] lg:aspect-square relative border border-white/10 bg-black/20 rounded-3xl overflow-hidden shadow-2xl transition-all hover:bg-black/30 hover:border-accent-blue/20 group">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 25 }}>
                        <Suspense fallback={null}>
                            <PresentationControls
                                global
                                snap={false}
                                rotation={[0, 0.3, 0]}
                                polar={[-Math.PI / 3, Math.PI / 3]}
                                azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                            >
                                <Center scale={2.5}>
                                    <FwishModel modelPath="assets/Model_V0.1.stl" viewType="front" center={true} />
                                </Center>
                            </PresentationControls>
                            <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
                        </Suspense>
                    </Canvas>
                    <div className="absolute top-6 left-6 font-mono text-[9px] text-accent-blue/80 uppercase tracking-[0.4em] border-l border-accent-blue pl-3">
                        VARIANT_WATERSPORT // 02
                    </div>
                    <div className="absolute bottom-6 right-6 text-right">
                        <div className="text-accent-blue font-mono text-[10px] mb-1 tracking-[0.3em] font-bold uppercase">One Seater Watersport Model</div>
                        <div className="text-white/20 text-[8px] font-mono leading-relaxed uppercase tracking-[0.2em]">Personal Agility Platform</div>
                    </div>
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
