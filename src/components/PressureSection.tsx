import { type FC } from 'react';
import { motion } from 'framer-motion';

const PressureSection: FC = () => {
    return (
        <section id="pressure-viz" className="w-full pt-4 pb-20 md:pb-32 flex flex-col items-center justify-center relative px-6 md:px-8 bg-black">
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
                        <p className="block">The boundary between flight and sailing has long existed outside mainstream aerospace and maritime development.</p>
                        <p className="block">Project FWISH exists to re-center engineering attention on this neglected domain — not as a product effort, but as a systems-level exploration of what becomes possible when ground-effect flight is treated as a first-class discipline.</p>
                        <p className="block">Our aim is to inspire engineers, researchers, and builders to engage with this regime — to think, prototype, and experiment where conventional categories break down.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PressureSection;
