import type { FC } from 'react';
import { motion } from 'framer-motion';

const ScienceSection: FC = () => {
    return (
        <section
            id="science"
            className="w-full py-20 flex flex-col items-center justify-center relative px-8"
        >
            <div className="max-w-6xl w-full flex flex-col gap-12">

                {/* SECTION LABEL */}
                <div className="text-accent-blue font-mono text-xs flex items-center gap-2 justify-center lg:justify-start">
                    <span className="w-8 h-px bg-accent-blue" />
                    AERODYNAMIC DOMAIN STUDY
                </div>

                {/* TITLE */}
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-center lg:text-left">
                    The Ground Effect <span className="text-accent-blue">Regime</span>
                </h2>

                {/* ANIMATION BLOCK */}
                <div className="relative h-[280px] md:h-[350px] glass rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center">
                    <svg width="100%" height="100%" viewBox="-20 40 440 260" className="opacity-80">
                        {/* Wing Profile */}
                        <g transform="rotate(5 200 160)">
                            <path
                                d="M 50.00,160.01 L 50.05,159.74 L 50.28,159.27 L 50.82,158.58 L 52.09,157.46 L 53.54,156.47 L 57.56,154.45 L 63.03,152.40 L 69.88,150.36 L 78.03,148.37 L 87.41,146.46 L 97.89,144.69 L 109.39,143.06 L 121.77,141.63 L 134.92,140.40 L 148.69,139.41 L 162.94,138.67 L 177.51,138.19 L 192.27,137.99 L 207.06,138.07 L 221.71,138.45 L 236.09,139.13 L 250.03,140.12 L 263.38,141.46 L 276.08,143.23 L 288.21,145.37 L 299.70,147.68 L 310.39,150.00 L 320.11,152.21 L 328.68,154.24 L 335.93,156.06 L 341.76,157.65 L 346.17,158.94 L 349.00,159.75 L 350.00,160.00 L 350.00,160.00 L 348.96,159.82 L 345.78,159.35 L 340.43,158.75 L 332.97,158.25 L 323.59,158.01 L 312.56,158.12 L 300.11,158.58 L 286.47,159.40 L 271.89,160.54 L 256.63,161.95 L 240.89,163.55 L 224.91,165.26 L 208.88,166.98 L 192.98,168.64 L 177.38,170.15 L 162.23,171.43 L 162.23,171.43 L 147.67,172.43 L 133.81,173.08 L 120.76,173.36 L 108.64,173.21 L 97.48,172.61 L 87.28,171.58 L 78.10,170.26 L 70.06,168.72 L 63.25,167.03 L 57.77,165.25 L 53.70,163.41 L 52.19,162.48 L 50.88,161.41 L 50.31,160.74 L 50.06,160.29 L 50.00,160.01 Z"
                                fill="rgba(0, 163, 255, 0.2)"
                                stroke="var(--color-accent-blue)"
                                strokeWidth="2"
                            />
                        </g>

                        {/* Ground */}
                        <line
                            x1="-100"
                            y1="270"
                            x2="500"
                            y2="270"
                            stroke="var(--color-accent-blue)"
                            strokeWidth="2"
                            strokeOpacity="0.4"
                        />

                        {/* Bottom compressed flow */}
                        {[0, 1, 2, 3, 4].map((i) => (
                            <motion.path
                                key={i}
                                d={`M -50 ${185 + i * 12} Q 180 ${210 + i * 10} 450 ${185 + i * 12}`}
                                fill="none"
                                stroke="var(--color-accent-blue)"
                                strokeWidth={1.4 - i * 0.15}
                                strokeDasharray="8,12"
                                animate={{ strokeDashoffset: [100, 0] }}
                                transition={{
                                    duration: 1.4,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.1,
                                }}
                                style={{ opacity: 0.25 }}
                            />
                        ))}
                    </svg>

                    <div className="absolute top-4 right-4 text-[8px] text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full uppercase font-mono">
                        Ground Proximity Regime
                    </div>
                </div>

                {/* TEXT BELOW ANIMATION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center lg:text-left"
                >
                    <p className="text-white/60 leading-relaxed font-light text-base md:text-lg">
                        There is a neglected aerodynamic regime at the boundary between the open ocean and the sky.
                        Wing-In-Ground (WIG) flight emerges when lifting surfaces operate in close proximity to a surface,
                        altering pressure distribution and lift behavior in ways that do not fit neatly into conventional
                        aerospace or maritime models.
                        <br /><br />
                        Despite its potential, this regime has remained underexplored — not because the physics are unknown,
                        but because it exists between institutional boundaries. Project FWISH exists to reframe ground-effect
                        flight as a legitimate engineering domain worthy of attention, experimentation, and serious systems thinking.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ScienceSection;
