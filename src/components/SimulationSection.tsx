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
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_50px_rgba(0,163,255,0.1)]"
                >
                    <video
                        ref={videoRef}
                        src="./simulation.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-8 px-4 font-mono text-center"
                >
                    <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
                        <span className="text-accent-blue font-bold">WIG-01 Simulation:</span> Real-time computational analysis of low-altitude flight dynamics, demonstrating the stability of the high-pressure air cushion at peak cruise velocity.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SimulationSection;
