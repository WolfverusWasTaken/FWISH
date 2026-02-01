import { type FC } from 'react';
import PressureSection from './PressureSection';
import ScienceSection from './ScienceSection';
import { motion } from 'framer-motion';

const SciencePage: FC = () => {
    return (
        <div className="bg-black min-h-screen">
            <main className="pt-40 md:pt-48">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center px-8 mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                        Aerodynamic <span className="text-accent-blue">Domain</span>
                    </h1>
                    <p className="text-white/40 font-mono text-xs md:text-sm max-w-xl tracking-widest uppercase">
                        Scientific analysis and pressure cushion verification for Ground-Effect systems.
                    </p>
                </motion.div>

                <PressureSection />
                <ScienceSection />
            </main>

            {/* Science Footer */}
            <footer className="py-20 flex flex-col items-center border-t border-white/5 opacity-50">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center space-y-4"
                >
                    <div className="text-[10px] font-mono mb-2 uppercase tracking-[1em] text-white">FWISH SCIENCE</div>
                    <p className="text-[9px] text-white/30 max-w-sm mx-auto leading-relaxed">
                        Data generated through real-world flight testing and CFD validation.
                        Engineering specifications subject to institutional review.
                    </p>
                </motion.div>
            </footer>
        </div>
    );
};

export default SciencePage;
