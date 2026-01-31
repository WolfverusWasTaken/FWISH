import type { FC } from 'react';
import { motion } from 'framer-motion';

const HeroSection: FC = () => {
    return (
        <section id="pre-flight" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-64">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="z-10 flex flex-col items-center"
            >
                <img
                    src="./favicon.jpg"
                    alt="FWISH Icon"
                    className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-accent-blue shadow-[0_0_50px_rgba(0,163,255,0.3)]"
                />
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
