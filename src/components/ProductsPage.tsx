import { type FC } from 'react';
import ModelSection from './ModelSection';
import { motion } from 'framer-motion';

const ProductsPage: FC = () => {
    return (
        <div className="bg-black min-h-screen">
            <main className="pt-40 md:pt-48 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center px-8 mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                        Ground-Effect <span className="text-accent-blue">Probes</span>
                    </h1>
                    <p className="text-white/40 font-mono text-xs md:text-sm max-w-xl tracking-[0.3em] uppercase leading-relaxed">
                        Design variations for the logistics, research, and watersport sectors.
                    </p>
                </motion.div>

                <ModelSection />
            </main>

            {/* Products Footer Info */}
            <div className="max-w-4xl mx-auto px-8 py-10 border-t border-white/5 text-center">
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
                    All variants are verified through aerodynamic prototyping.
                </p>
            </div>
        </div>
    );
};

export default ProductsPage;
