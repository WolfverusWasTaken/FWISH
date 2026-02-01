import type { FC } from 'react';
import { motion } from 'framer-motion';

const HeroSection: FC = () => {
    return (
        <section id="pre-flight" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-64">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="z-10 flex flex-col items-center text-center px-4"
            >
                <div className="mb-8 relative">
                    <img
                        src="./favicon.jpg"
                        alt="FWISH Engineering Emblem"
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 rounded-full border border-accent-blue/30 animate-pulse" />
                </div>

                <h1 className="text-[10px] md:text-sm font-mono text-accent-blue tracking-[0.4em] md:tracking-[0.6em] uppercase mb-4">
                    Research Bureau 42 // EST. 2026
                </h1>

                <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter mb-6 relative leading-none">
                    PROJECT <span className="stroke-text-transparent">FWISH</span>
                </h2>

                <p className="max-w-2xl text-white/50 text-base md:text-lg font-light leading-relaxed font-mono">
                    <span className="text-accent-blue">Classification:</span> Experimental Ground-Effect Prove-Out.
                    <br />
                    <span className="block mt-4">
                        We are probing the forgotten regime of aerodynamic ground effect.
                        FWISH is an open engineering initiative dedicated to validating high-speed transport hardware
                        that lives between the sea and the sky.
                    </span>
                </p>
            </motion.div>

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />
        </section>
    );
};

export default HeroSection;
