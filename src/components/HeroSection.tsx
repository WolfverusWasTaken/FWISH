import type { FC } from 'react';
import { motion } from 'framer-motion';

import imgLogo from '../assets/Logo_nobackground.png';
import imgIcon from '../assets/icon_nobackground.png';

const HeroSection: FC = () => {
    return (
        <section
            id="pre-flight"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-48 md:pt-40 md:pb-56 px-4"
        >
            {/* Foreground Content */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="z-10 flex flex-col items-center text-center w-full max-w-lg md:max-w-none"
            >
                {/* === LOGO GROUP === */}
                <div className="mb-6 flex items-center gap-6">
                    {/* LEFT LOGO */}
                    <img
                        src={imgLogo}
                        alt="Founding Bureau Logo"
                        className="
                            w-24 h-24 md:w-32 md:h-32
                            object-contain
                            opacity-80
                        "
                    />

                    {/* SEPARATOR */}
                    <div className="h-14 md:h-20 w-px bg-white/15" />

                    {/* FWISH LOGO (NO CIRCLE) */}
                    <img
                        src={imgIcon}
                        alt="FWISH Engineering Logo"
                        className="
                            w-24 h-24 md:w-32 md:h-32
                            object-contain
                            opacity-90
                        "
                    />
                </div>

                {/* Identity Line */}
                <h1 className="text-[8px] md:text-xs font-mono text-accent-blue/80 tracking-[0.3em] md:tracking-[0.45em] uppercase mb-3 px-2">
                    Est. 2025
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-7xl font-black text-white tracking-tight leading-none uppercase">
                    PROJECT <span className="stroke-text-transparent">FWISH</span>
                </h2>

                {/* Mission Line */}
                <h3 className="mt-3 text-sm md:text-xl font-medium text-white/80 tracking-tight px-4 max-w-xs md:max-w-none">
                    Making Ground-Effect Transport Operable, Stable, and Scalable
                </h3>

                {/* Classification */}
                <p className="mt-5 text-accent-blue font-mono text-[8px] md:text-xxs tracking-wide">
                    High-Speed Marine Transport
                </p>

                {/* Scroll Action */}
                <motion.button
                    onClick={() =>
                        document
                            .getElementById('manufacturing')
                            ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="mt-16 md:mt-20 px-8 py-3 relative group overflow-hidden border border-white/10 hover:border-accent-blue/30 transition-all duration-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.25 }}
                >
                    <div className="absolute inset-0 bg-accent-blue/0 group-hover:bg-accent-blue/[0.02] transition-colors" />

                    {/* Scanning Bar */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[1px] bg-accent-blue/40"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    <span className="relative z-10 text-white/55 group-hover:text-white font-mono text-[9px] md:text-[10px] tracking-[0.5em] uppercase transition-colors">
                        Explore the Engineering <span className="inline-block group-hover:translate-y-0.5 transition-transform"></span>
                    </span>
                </motion.button>
            </motion.div>
        </section>
    );
};

export default HeroSection;
