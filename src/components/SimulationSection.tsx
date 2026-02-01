import React, { type FC } from 'react';
import { motion } from 'framer-motion';

const SimulationSection: FC = () => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 5.0;
        }
    }, []);

    return (
        <section id="simulation" className="min-h-screen py-20 flex flex-col items-center justify-center relative px-8 bg-black">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="px-4 font-mono"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start justify-between text-left">
                        <div className="flex-1">
                            <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight">Beyond This Prototype</h3>
                            <p className="text-sm md:text-base text-white/60 leading-relaxed">
                                FWISH is not the end goal. It is an engineering probe designed to spark a larger movement.
                                We are laying the groundwork for a <span className="text-accent-blue">Foundation for Experimental Aerospace</span>—a dedicated collective for advanced transport and serious hardware culture.
                            </p>
                        </div>
                        <div className="flex-1 border-l border-white/10 pl-6 space-y-4">
                            <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight">Call for Collaboration</h3>
                            <p className="text-sm md:text-base text-white/60 leading-relaxed font-mono">
                                We are looking for:
                                <br /> - University Research Partners (CFD/Aerodynamics)
                                <br /> - Composite Manufacturing Specialists
                                <br /> - Early Patrons & Grant Support
                            </p>
                            <a href="#" className="inline-block mt-4 text-accent-blue text-xs uppercase tracking-widest border-b border-accent-blue hover:text-white hover:border-white transition-colors pb-1">
                                Initiate Contact {">"}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SimulationSection;
