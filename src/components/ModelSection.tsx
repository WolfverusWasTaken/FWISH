import { type FC, Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Html } from '@react-three/drei';
import { FwishModel } from './three/FwishModel';

// 🔒 Explicit, deterministic pivot (tune once)
const MODEL_PIVOT: [number, number, number] = [0, -0.28, 0];

const ModelSection: FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section
            id="prototype-3d"
            className="min-h-screen bg-black flex flex-col p-4 md:p-20 items-center justify-center"
        >
            {/* Header */}
            <div className="w-full max-w-[1200px] mb-8 md:mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse shadow-[0_0_15px_#00A3FF]" />
                    <div className="text-accent-blue font-mono text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase opacity-70">
                        Tactical Design Review // WIG-01
                    </div>
                </div>
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-white">
                    Technical <span className="text-accent-blue">Prototype</span>
                </h2>
            </div>

            {/* Dual Viewports */}
            <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 px-2 md:px-0">

                {/* ================= LOGISTIC MODEL ================= */}
                <div className="aspect-[4/3] lg:aspect-square relative border border-white/10 bg-black/20 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                    <Canvas
                        shadows
                        dpr={isMobile ? 1 : [1, 2]}
                        camera={{ position: [6, 4, 10], fov: 35 }}
                        gl={{ antialias: true }}
                    >
                        <Suspense
                            fallback={
                                <Html center>
                                    <div className="text-accent-blue/40 font-mono text-[8px] tracking-widest animate-pulse">
                                        INIT_MESH...
                                    </div>
                                </Html>
                            }
                        >
                            <Environment
                                preset={isMobile ? 'studio' : 'city'}
                                environmentIntensity={0.5}
                            />

                            <ambientLight intensity={1.1} />
                            <directionalLight
                                position={[-5, 8, 4]}
                                intensity={3}
                                castShadow={!isMobile}
                            />
                            <directionalLight
                                position={[5, 3, -4]}
                                intensity={2.5}
                                color="#00A3FF"
                            />

                            <OrbitControls
                                enableZoom
                                enablePan={false}
                                minDistance={2}
                                maxDistance={15}
                                target={[0, 0, 0]}
                                makeDefault
                                enableDamping
                                rotateSpeed={0.8}
                                zoomSpeed={1.2}
                            />

                            {/* 🔒 Fixed pivot */}
                            <group
                                scale={isMobile ? 0.0008 : 0.001}
                                position={MODEL_PIVOT}
                            >
                                <FwishModel
                                    modelPath="assets/Logistic_Model_V0.stl"
                                    viewType="front"
                                />
                            </group>

                            <ContactShadows
                                position={[0, -2.5, 0]}
                                opacity={0.4}
                                scale={20}
                                blur={isMobile ? 4 : 2.5}
                                far={4.5}
                            />
                        </Suspense>
                    </Canvas>

                    {/* Overlay UI */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 font-mono text-[8px] md:text-[9px] text-accent-blue/80 uppercase tracking-widest md:tracking-[0.4em] border-l border-accent-blue pl-2 md:pl-3 pointer-events-none">
                        VARIANT_LOGISTIC
                        <br />
                        REV: L-01 · DESIGN-VERIFIED · 2026-01
                    </div>

                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-right pointer-events-none">
                        <div className="text-accent-blue font-mono text-[9px] md:text-[10px] mb-1 tracking-widest md:tracking-[0.3em] font-bold uppercase">
                            Logistic Transport Model
                        </div>
                        <div className="text-white/20 text-[7px] md:text-[8px] font-mono leading-relaxed uppercase tracking-widest md:tracking-[0.2em]">
                            Bulk Cargo Configuration
                        </div>
                    </div>
                </div>

                {/* ================= WATERSPORT MODEL ================= */}
                <div className="aspect-[4/3] lg:aspect-square relative border border-white/10 bg-black/20 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                    <Canvas
                        shadows
                        dpr={isMobile ? 1 : [1, 2]}
                        camera={{ position: [6, 4, 10], fov: 35 }}
                        gl={{ antialias: true }}
                    >
                        <Suspense
                            fallback={
                                <Html center>
                                    <div className="text-accent-blue/40 font-mono text-[8px] tracking-widest animate-pulse">
                                        INIT_MESH...
                                    </div>
                                </Html>
                            }
                        >
                            <Environment
                                preset={isMobile ? 'studio' : 'city'}
                                environmentIntensity={0.5}
                            />

                            <ambientLight intensity={1.1} />
                            <directionalLight
                                position={[-5, 8, 4]}
                                intensity={3}
                                castShadow={!isMobile}
                            />
                            <directionalLight
                                position={[5, 3, -4]}
                                intensity={2.5}
                                color="#00A3FF"
                            />

                            <OrbitControls
                                enableZoom
                                enablePan={false}
                                minDistance={2}
                                maxDistance={15}
                                target={[0, 0, 0]}
                                makeDefault
                                enableDamping
                                rotateSpeed={0.6}
                                zoomSpeed={1.2}
                            />

                            {/* 🔒 Same pivot */}
                            <group
                                scale={isMobile ? 0.0008 : 0.001}
                                position={MODEL_PIVOT}
                            >
                                <FwishModel
                                    modelPath="assets/Model_V0.1.stl"
                                    viewType="front"
                                />
                            </group>

                            <ContactShadows
                                position={[0, -2.5, 0]}
                                opacity={0.4}
                                scale={20}
                                blur={isMobile ? 4 : 2.5}
                                far={4.5}
                            />
                        </Suspense>
                    </Canvas>

                    {/* Overlay UI */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 font-mono text-[8px] md:text-[9px] text-accent-blue/80 uppercase tracking-widest md:tracking-[0.4em] border-l border-accent-blue pl-2 md:pl-3 pointer-events-none">
                        VARIANT_WATERSPORT
                        <br />
                        REV: WS-01 · DESIGN-VERIFIED · 2026-01
                    </div>

                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-right pointer-events-none">
                        <div className="text-accent-blue font-mono text-[9px] md:text-[10px] mb-1 tracking-widest md:tracking-[0.3em] font-bold uppercase">
                            One Seater Watersport Model
                        </div>
                        <div className="text-white/20 text-[7px] md:text-[8px] font-mono leading-relaxed uppercase tracking-widest md:tracking-[0.2em]">
                            Personal Agility Platform
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="w-full max-w-[1200px] mt-12 pt-8 border-t border-white/5 flex justify-between items-center opacity-30 font-mono text-[9px] uppercase tracking-[0.5em] text-white">
                <span>INTERNAL DESIGN STUDY</span>
                <span>© 2026 DESIGN BUREAU 42</span>
            </div>
        </section>
    );
};

export default ModelSection;