import { type FC } from 'react';
import { motion } from 'framer-motion';

const PressureSection: FC = () => {
    return (
        <section id="pressure-viz" className="min-h-screen py-32 flex flex-col items-center justify-center relative px-8 bg-black">
            <div className="max-w-3xl w-full">
                {/* Text only research statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="text-accent-blue font-mono text-xs mb-4 flex items-center justify-center gap-2">
                        <span className="w-8 h-px bg-accent-blue" />
                        WHY THIS MATTERS
                        <span className="w-8 h-px bg-accent-blue" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter text-white">The Uncharted <span className="text-accent-blue">Gap</span></h2>
                    <div className="text-white/60 leading-relaxed font-mono text-sm md:text-base space-y-6 max-w-2xl mx-auto">
                        <p className="block">The zone between flight and sailing is historically littered with failures. We are building the open-source flight data required to tame it.</p>
                        <p className="block">This is not just about one vehicle; it's about unlocking a new mode of transit. High-risk, high-reward engineering for the post-carbon era.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PressureSection;
