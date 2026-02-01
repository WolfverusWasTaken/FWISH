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
                    <div className="flex flex-col lg:flex-row gap-12 items-start justify-between text-left">
                        {/* Vision Column */}
                        <div className="flex-1 space-y-6">
                            <h3 className="text-xl font-black text-white uppercase tracking-tight">Purpose & Vision</h3>
                            <p className="text-sm text-white/60 leading-relaxed max-w-md">
                                FWISH is a starting probe. The long-term goal is to establish a
                                <span className="text-accent-blue font-bold"> Foundation for Experimental Aerospace</span>
                                —a builder-led association for serious hardware engineering, open inquiry, and advanced transport research.
                            </p>

                            <div className="pt-4">
                                <h4 className="text-xs font-mono text-accent-blue uppercase tracking-widest mb-3">Who This Is For</h4>
                                <ul className="text-sm text-white/50 space-y-2 font-mono">
                                    <li>{">"} Academic Researchers (Aerodynamics / Controls)</li>
                                    <li>{">"} Storage & Composite Manufacturers</li>
                                    <li>{">"} Serious Makers & Hardware Engineers</li>
                                    <li>{">"} Early-Stage Patrons of Science</li>
                                </ul>
                            </div>
                        </div>

                        {/* Connection Column */}
                        <div className="flex-1 lg:max-w-md border-l border-white/10 pl-8 space-y-6">
                            <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight">Call for Collaboration</h3>
                            <p className="text-sm text-white/60 leading-relaxed font-mono">
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
