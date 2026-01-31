import React, { type FC } from 'react';
import { motion } from 'framer-motion';

const ManufacturingSection: FC = () => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 5.0;
        }
    }, []);

    return (
        <section id="manufacturing" className="min-h-screen py-32 flex flex-col items-center justify-center relative px-8 bg-black">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left Side: Technical Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-accent-green font-mono text-xs mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-accent-green" />
                        SUBTRACTIVE FABRICATION
                    </div>
                    <h2 className="text-4xl font-black mb-6 uppercase">In-House <br /><span className="text-accent-blue">Manufacturing</span></h2>
                    <p className="text-white/60 leading-relaxed font-mono text-sm space-y-4">
                        <span className="block">{">"} Proprietary in-house styrofoam CNC cutting system.</span>
                        <span className="block">{">"} High-precision subtractive manufacturing for core airframe geometry.</span>
                        <span className="block">{">"} Rapid wing spar and fuselage block carving from aerospace-grade foam.</span>
                        <span className="block">{">"} Integrated structural assembly and composite skin application.</span>
                    </p>

                </motion.div>

                {/* Right Side: Portrait Video */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative aspect-[9/16] max-h-[700px] w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_50px_rgba(0,163,255,0.1)]"
                >
                    <video
                        ref={videoRef}
                        src="./manufacturing.MOV"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ManufacturingSection;
