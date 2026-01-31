import { type FC } from 'react';
import { motion } from 'framer-motion';

const PressureSection: FC = () => {
    return (
        <section id="pressure-viz" className="min-h-screen py-32 flex flex-col items-center justify-center relative px-8 bg-black">
            <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                {/* Left Side: Pressure Visualization Image (Larger) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="lg:col-span-3 relative aspect-video rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_80px_rgba(0,163,255,0.15)]"
                >
                    <img
                        src="./pressure_viz.jpg"
                        alt="Pressure Visualization"
                        className="w-full h-full object-cover scale-105"
                    />
                </motion.div>

                {/* Right Side: Technical Text (More on the right) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-2 lg:pl-10"
                >
                    <div className="text-accent-blue font-mono text-xs mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-accent-blue" />
                        VIRTUAL WIND TUNNEL
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Pressure <br /><span className="text-accent-blue">Distribution</span></h2>
                    <p className="text-white/60 leading-relaxed font-mono text-base space-y-6">
                        <span className="block">{">"} Analyzing high-pressure trap zones beneath the chord line.</span>
                        <span className="block">{">"} Computational Fluid Dynamics (CFD) optimization for Block 09.</span>
                        <span className="block">{">"} Surface pressure gradients calibrated for maximum ground-effect lift.</span>
                        <span className="block">{">"} Boundary layer interaction verified at 240 KPH cruise velocity.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PressureSection;
