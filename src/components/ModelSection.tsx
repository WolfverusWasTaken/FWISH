import { type FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Html } from '@react-three/drei';
import { FwishModel } from './three/FwishModel';

// 🔒 Explicit, deterministic pivot (tune once)
const MODEL_PIVOT: [number, number, number] = [0, -0.28, 0];

const ModelSection: FC = () => {
    return (
        <section
            id="prototype-3d"
            className="w-full flex flex-col p-4 items-center justify-center font-sans flex-grow"
        >
            {/* Header */}
            <div className="w-full max-w-[1200px] mb-6 md:mb-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse shadow-[0_0_15px_#00A3FF]" />
                    <div className="text-accent-blue font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase opacity-70">
                        Systems Engineering Review // PROTOTYPES
                    </div>
                </div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
                    Ground-Effect <span className="text-accent-blue">Probes</span>
                </h2>
            </div>

            {/* Dual Viewports */}
            <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-8">

                {/* ================= LOGISTIC MODEL ================= */}
                <div className="aspect-video relative border border-white/10 bg-black/20 rounded-xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                    <Canvas
                        shadows
                        dpr={[1, 2]}
                        camera={{ position: [6, 4, 10], fov: 30 }}
                        gl={{ antialias: true, preserveDrawingBuffer: true }}
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
                                preset="city"
                                environmentIntensity={0.6}
                            />

                            <ambientLight intensity={0.4} color="#00A3FF" />
                            <ambientLight intensity={0.5} />

                            <directionalLight
                                position={[-5, 8, 4]}
                                intensity={3.5}
                                castShadow
                                shadow-mapSize={[1024, 1024]}
                                shadow-bias={-0.0001}
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
                                enableRotate={true}
                            />

                            {/* 🔒 Full Scale on all platforms */}
                            <group
                                scale={0.0015}
                                position={MODEL_PIVOT}
                            >
                                <FwishModel
                                    modelPath="assets/Logistic_Model_V0.stl"
                                    viewType="front"
                                />
                            </group>

                            <ContactShadows
                                position={[0, -2.5, 0]}
                                opacity={0.6}
                                scale={20}
                                blur={2.2}
                                far={4.5}
                                resolution={512}
                                color="#000000"
                            />
                        </Suspense>
                    </Canvas>

                    {/* Overlay UI */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 font-mono text-[7px] md:text-[8px] text-accent-blue/80 uppercase tracking-widest md:tracking-[0.3em] border-l border-accent-blue pl-2 pointer-events-none">
                        VARIANT_LOGISTIC
                        <br />
                        REV: L-01
                    </div>

                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 text-right pointer-events-none">
                        <div className="text-accent-blue font-mono text-[8px] md:text-[9px] mb-0.5 tracking-widest font-bold uppercase">
                            Logistic Transport
                        </div>
                    </div>
                </div>

                {/* ================= WATERSPORT MODEL ================= */}
                <div className="aspect-video relative border border-white/10 bg-black/20 rounded-xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                    <Canvas
                        shadows
                        dpr={[1, 2]}
                        camera={{ position: [6, 4, 10], fov: 30 }}
                        gl={{ antialias: true, preserveDrawingBuffer: true }}
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
                                preset="city"
                                environmentIntensity={0.6}
                            />

                            <ambientLight intensity={0.4} color="#00A3FF" />
                            <ambientLight intensity={0.5} />

                            <directionalLight
                                position={[-5, 8, 4]}
                                intensity={3.5}
                                castShadow
                                shadow-mapSize={[1024, 1024]}
                                shadow-bias={-0.0001}
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
                                enableRotate={true}
                            />

                            {/* 🔒 Full Scale on all platforms */}
                            <group
                                scale={0.0015}
                                position={MODEL_PIVOT}
                            >
                                <FwishModel
                                    modelPath="assets/Model_V0.1.stl"
                                    viewType="front"
                                />
                            </group>

                            <ContactShadows
                                position={[0, -2.5, 0]}
                                opacity={0.6}
                                scale={20}
                                blur={2.2}
                                far={4.5}
                                resolution={512}
                                color="#000000"
                            />
                        </Suspense>
                    </Canvas>

                    {/* Overlay UI */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 font-mono text-[7px] md:text-[8px] text-accent-blue/80 uppercase tracking-widest md:tracking-[0.3em] border-l border-accent-blue pl-2 pointer-events-none">
                        VARIANT_WATERSPORT
                        <br />
                        REV: WS-01
                    </div>

                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 text-right pointer-events-none">
                        <div className="text-accent-blue font-mono text-[8px] md:text-[9px] mb-0.5 tracking-widest font-bold uppercase">
                            Agility Platform
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="w-full max-w-[1200px] mt-8 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-40 font-mono text-[8px] uppercase tracking-[0.2em] text-white gap-2">
                <span className="max-w-md text-center md:text-left leading-relaxed lowercase first-letter:uppercase">
                    *Experimental configurations for geometry & integration study only. Not final production hardware.
                </span>
                <span>© 2026 DESIGN BUREAU</span>
            </div>
        </section>
    );
};

export default ModelSection;