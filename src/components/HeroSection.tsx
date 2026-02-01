import type { FC } from 'react';
import { motion } from 'framer-motion';

const FLOAT_ANIMATION = {
    animate: { y: [0, -4, 0] },
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" as const },
};

const HeroSection: FC = () => {
    return (
        <section
            id="pre-flight"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-40 pb-56"
        >
            {/* Foreground Content — STATIC REFERENCE */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="z-10 flex flex-col items-center text-center px-4"
            >
                {/* Emblem */}
                <div className="mb-6 relative">
                    <img
                        src="./favicon.jpg"
                        alt="FWISH Engineering Emblem"
                        className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full border border-white/10 grayscale"
                    />
                    <div className="absolute inset-0 rounded-full border border-accent-blue/20" />
                </div>

                {/* Identity Line */}
                <h1 className="text-[9px] md:text-xs font-mono text-accent-blue/80 tracking-[0.45em] uppercase mb-3">
                    Advanced Aerospace Technologies · Est. 2026
                </h1>

                {/* Title */}
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-none">
                    PROJECT <span className="stroke-text-transparent">FWISH</span>
                </h2>

                {/* Mission Line — CLEAN */}
                <h3 className="mt-3 text-base md:text-xl font-medium text-white/80 tracking-tight">
                    High-Speed Ground-Effect Transport
                </h3>

                {/* Classification — Technical Metadata */}
                <p className="mt-4 text-accent-blue font-mono text-[11px] md:text-xs tracking-wide">
                    Division: High-Speed Marine Transport
                </p>

                {/* Optimized Scroll Action */}
                <motion.button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-16 md:mt-20 px-8 py-3 relative group overflow-hidden border border-white/5 hover:border-accent-blue/30 transition-all duration-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <div className="absolute inset-0 bg-accent-blue/0 group-hover:bg-accent-blue/[0.02] transition-colors" />

                    {/* Animated Scanning Bar */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[1px] bg-accent-blue/40"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    <span className="relative z-10 text-white/30 group-hover:text-white font-mono text-[9px] md:text-[10px] tracking-[0.5em] uppercase transition-colors">
                        Explore Systems <span className="inline-block group-hover:translate-y-0.5 transition-transform">↓</span>
                    </span>
                </motion.button>
            </motion.div>

            {/* BACKGROUND TELEMETRY */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-30 flex items-center justify-center">
                    <svg
                        className="w-full h-full max-w-[2000px]"
                        viewBox="0 0 400 300"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <linearGradient id="bgCushionGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#00A3FF" stopOpacity="0" />
                                <stop offset="50%" stopColor="#00A3FF" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
                            </linearGradient>

                            <pattern
                                id="bgMovingGround"
                                x="0"
                                y="0"
                                width="80"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 0 10 Q 20 5 40 10 T 80 10"
                                    stroke="#00A3FF"
                                    strokeWidth="0.5"
                                    strokeOpacity="0.35"
                                    fill="none"
                                />
                            </pattern>
                        </defs>

                        {/* Pressure Cushion */}
                        <motion.path
                            d="M -50,160 L 450,185 L 450,300 L -50,300 Z"
                            fill="url(#bgCushionGradient)"
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Wing Motion Layer — FLOW ONLY */}
                        <motion.g
                            {...FLOAT_ANIMATION}
                            style={{ transformOrigin: '200px 150px' }}
                        >
                            <g transform="rotate(5 200 150)">
                                {[0, 1, 2].map((i) => (
                                    <motion.path
                                        key={i}
                                        d={`M -100 ${100 - i * 15} Q 200 ${50 - i * 15} 500 ${100 - i * 15}`}
                                        fill="none"
                                        stroke="#00A3FF"
                                        strokeWidth="0.8"
                                        strokeDasharray="10,20"
                                        animate={{ strokeDashoffset: [100, 0] }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: i * 0.8,
                                        }}
                                        style={{ opacity: 0.08 + i * 0.04 }}
                                        transform="scale(1.2) translate(-20, -30)"
                                    />
                                ))}
                            </g>
                        </motion.g>

                        {/* Ground */}
                        <motion.rect
                            x="-200"
                            y="270"
                            width="2000"
                            height="120"
                            fill="url(#bgMovingGround)"
                            animate={{ x: [-200, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
