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
                    <div className="text-accent-blue font-mono text-xs mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-accent-blue" />
                        AERODYNAMIC DOMAIN STUDY
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">THE GROUND EFFECT <br /><span className="text-accent-blue">REGIME</span></h2>
                    <p className="text-white/60 leading-relaxed mb-8 font-light text-lg">
                        There is a forgotten boundary between the open ocean and the sky.
                        WIG (Wing-In-Ground) craft operate in this interface, compressing air against the surface to generate high-efficiency lift.
                        <br /><br />
                        We are not inventing new physics; we are engineering hardware to stabilize this chaotic regime.
                        Our focus is the "cushion"—the high-pressure volume that allows transport efficiency 3x greater than free-flight aircraft.
                    </p>


                </motion.div>

                <div className="relative h-[400px] glass rounded-3xl overflow-hidden border border-white/5 flex flex-col items-center justify-center">
                    <div className="absolute top-4 left-4 font-mono text-[9px] text-white/30 uppercase tracking-widest">
                        Fig 02. Chord-Dominant Flow Visualization
                    </div>
                    {/* SVG Airflow Animation */}
                    <svg width="100%" height="100%" viewBox="-20 -20 440 340" className="opacity-80">
                        {/* Wing Profile */}
                        <g transform="rotate(5 200 160)">
                            <path
                                d="M 50.00,160.01 L 50.05,159.74 L 50.28,159.27 L 50.82,158.58 L 52.09,157.46 L 53.54,156.47 L 57.56,154.45 L 63.03,152.40 L 69.88,150.36 L 78.03,148.37 L 87.41,146.46 L 97.89,144.69 L 109.39,143.06 L 121.77,141.63 L 134.92,140.40 L 148.69,139.41 L 162.94,138.67 L 177.51,138.19 L 192.27,137.99 L 207.06,138.07 L 221.71,138.45 L 236.09,139.13 L 250.03,140.12 L 263.38,141.46 L 276.08,143.23 L 288.21,145.37 L 299.70,147.68 L 310.39,150.00 L 320.11,152.21 L 328.68,154.24 L 335.93,156.06 L 341.76,157.65 L 346.17,158.94 L 349.00,159.75 L 350.00,160.00 L 350.00,160.00 L 348.96,159.82 L 345.78,159.35 L 340.43,158.75 L 332.97,158.25 L 323.59,158.01 L 312.56,158.12 L 300.11,158.58 L 286.47,159.40 L 271.89,160.54 L 256.63,161.95 L 240.89,163.55 L 224.91,165.26 L 208.88,166.98 L 192.98,168.64 L 177.38,170.15 L 162.23,171.43 L 162.23,171.43 L 147.67,172.43 L 133.81,173.08 L 120.76,173.36 L 108.64,173.21 L 97.48,172.61 L 87.28,171.58 L 78.10,170.26 L 70.06,168.72 L 63.25,167.03 L 57.77,165.25 L 53.70,163.41 L 52.19,162.48 L 50.88,161.41 L 50.31,160.74 L 50.06,160.29 L 50.00,160.01 Z"
                                fill="rgba(0, 163, 255, 0.2)"
                                stroke="var(--color-accent-blue)"
                                strokeWidth="2"
                            />
                        </g>
                        <defs>
                            <pattern id="groundPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
                            </pattern>
                            <linearGradient id="groundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="var(--color-accent-blue)" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                            </linearGradient>
                            <radialGradient id="pressureGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="var(--color-accent-blue)" />
                                <stop offset="100%" stopColor="transparent" />
                            </radialGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Ground Surface */}
                        <motion.rect
                            x="-100" y="270" width="600" height="30"
                            fill="url(#groundGradient)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        />
                        <rect x="0" y="270" width="400" height="30" fill="url(#groundPattern)" />
                        <line x1="0" y1="270" x2="400" y2="270" stroke="var(--color-accent-blue)" strokeWidth="2" strokeOpacity="0.5" filter="url(#glow)" />

                        {/* Mirror Airfoil Effect */}
                        <g transform="translate(0, 540) scale(1, -1) rotate(5 200 160)" opacity="0.15">
                            <path
                                d="M 50.00,160.01 L 50.05,159.74 L 50.28,159.27 L 50.82,158.58 L 52.09,157.46 L 53.54,156.47 L 57.56,154.45 L 63.03,152.40 L 69.88,150.36 L 78.03,148.37 L 87.41,146.46 L 97.89,144.69 L 109.39,143.06 L 121.77,141.63 L 134.92,140.40 L 148.69,139.41 L 162.94,138.67 L 177.51,138.19 L 192.27,137.99 L 207.06,138.07 L 221.71,138.45 L 236.09,139.13 L 250.03,140.12 L 263.38,141.46 L 276.08,143.23 L 288.21,145.37 L 299.70,147.68 L 310.39,150.00 L 320.11,152.21 L 328.68,154.24 L 335.93,156.06 L 341.76,157.65 L 346.17,158.94 L 349.00,159.75 L 350.00,160.00 L 350.00,160.00 L 348.96,159.82 L 345.78,159.35 L 340.43,158.75 L 332.97,158.25 L 323.59,158.01 L 312.56,158.12 L 300.11,158.58 L 286.47,159.40 L 271.89,160.54 L 256.63,161.95 L 240.89,163.55 L 224.91,165.26 L 208.88,166.98 L 192.98,168.64 L 177.38,170.15 L 162.23,171.43 L 162.23,171.43 L 147.67,172.43 L 133.81,173.08 L 120.76,173.36 L 108.64,173.21 L 97.48,172.61 L 87.28,171.58 L 78.10,170.26 L 70.06,168.72 L 63.25,167.03 L 57.77,165.25 L 53.70,163.41 L 52.19,162.48 L 50.88,161.41 L 50.31,160.74 L 50.06,160.29 L 50.00,160.01 Z"
                                fill="var(--color-accent-blue)"
                                stroke="var(--color-accent-blue)"
                                strokeWidth="1"
                            />
                        </g>

                        {/* Top Airflow Lines (Thinner, Following Wing Contour) */}
                        {[0, 1, 2, 3].map((i) => (
                            <motion.path
                                key={`top-${i}`}
                                d={`M -50 ${120 - i * 20} Q 150 ${40 - i * 20} 450 ${120 - i * 20}`}
                                fill="none"
                                stroke="var(--color-accent-blue)"
                                strokeWidth="0.5"
                                strokeDasharray="4,8"
                                initial={{ strokeDashoffset: 100 }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                                style={{ opacity: 0.1 }}
                            />
                        ))}

                        {/* Specific Top-Surface Hugging Line */}
                        <motion.path
                            d="M -50 145 Q 150 70 450 155"
                            fill="none"
                            stroke="var(--color-accent-blue)"
                            strokeWidth="1.2"
                            strokeDasharray="6 6"
                            filter="url(#glow)"
                            initial={{ strokeDashoffset: 100 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            style={{ opacity: 0.2 }}
                        />

                        {/* Bottom Airflow Lines (Dense, Compressed) */}
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                            const baseY = 185 + i * 10;
                            const curveY = 200 + i * 8;
                            return (
                                <motion.path
                                    key={`bottom-${i}`}
                                    d={`M -50 ${baseY} Q 180 ${curveY} 450 ${baseY}`}
                                    fill="none"
                                    stroke="var(--color-accent-blue)"
                                    strokeWidth={1.5 - (i * 0.1)}
                                    strokeDasharray="8,12"
                                    initial={{ strokeDashoffset: 100 }}
                                    animate={{ strokeDashoffset: 0 }}
                                    transition={{ duration: 2.5 - (i * 0.1), repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                                    style={{ opacity: 0.3 - (i * 0.02) }}
                                />
                            );
                        })}

                        {/* High Pressure Cushion Visual */}
                        <motion.rect
                            x="50" y="175" width="300" height="95"
                            fill="url(#pressureGradient)"
                            animate={{
                                opacity: [0.05, 0.15, 0.05],
                                scaleY: [1, 1.05, 1],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{ transformOrigin: 'top' }}
                        />
                    </svg>

                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-[8px] text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-full uppercase font-mono animate-pulse">
                            HIGH-PRESSURE ZONE LOCKED
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScienceSection;
