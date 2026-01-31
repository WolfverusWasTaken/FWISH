import type { FC } from 'react';
import { motion } from 'framer-motion';

const ScienceSection: FC = () => {
    return (
        <section id="science" className="min-h-screen py-32 flex flex-col items-center justify-center relative px-8 bg-surface">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-accent-green font-mono text-xs mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-accent-green" />
                        AERODYNAMIC PHENOMENON
                    </div>
                    <h2 className="text-5xl font-black mb-6 uppercase tracking-tight">The Science of <br /><span className="text-accent-blue">Ground Effect</span></h2>
                    <p className="text-white/60 leading-relaxed mb-8 font-light text-lg">
                        FWISH utilizes the high-pressure air cushion that forms between a wing and the ground.
                        By flying within one chord length of the surface, we reduce induced drag and dramatically
                        increase the Lift-to-Drag ($L/D$) ratio, achieving fuel efficiency levels 3x greater than
                        conventional aircraft.
                    </p>


                </motion.div>

                <div className="relative h-[400px] glass rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center">
                    {/* SVG Airflow Animation */}
                    <svg width="100%" height="100%" viewBox="0 0 400 300" className="opacity-80">
                        {/* Wing Profile */}
                        <path
                            d="M 50 150 Q 150 50 350 160 L 350 170 Q 150 100 50 150 Z"
                            fill="rgba(0, 163, 255, 0.2)"
                            stroke="var(--color-accent-blue)"
                            strokeWidth="2"
                        />

                        {/* Ground Line */}
                        <line x1="0" y1="280" x2="400" y2="280" stroke="white" strokeWidth="1" strokeOpacity="0.1" />

                        {/* Airflow Lines */}
                        {[0, 1, 2, 3].map((i) => (
                            <motion.path
                                key={i}
                                d={`M -50 ${180 + i * 20} Q 150 ${220 + i * 15} 450 ${180 + i * 20}`}
                                fill="none"
                                stroke="var(--color-accent-blue)"
                                strokeWidth="1"
                                strokeDasharray="5,5"
                                initial={{ strokeDashoffset: 100 }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                                style={{ opacity: 0.2 + (i * 0.1) }}
                            />
                        ))}

                        {/* High Pressure Zone */}
                        <motion.rect
                            x="120" y="170" width="160" height="100"
                            fill="url(#pressureGradient)"
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        <defs>
                            <radialGradient id="pressureGradient">
                                <stop offset="0%" stopColor="var(--color-accent-blue)" />
                                <stop offset="100%" stopColor="transparent" />
                            </radialGradient>
                        </defs>
                    </svg>

                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-[8px] text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-full uppercase font-mono animate-pulse">
                            High Pressure Trap Active
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScienceSection;
