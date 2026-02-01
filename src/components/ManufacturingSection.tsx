import React, { type FC } from 'react';
import { motion } from 'framer-motion';
import buildingImg from '../assets/Model_V0_building.jpg';

const ManufacturingSection: FC = () => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 5.0;
        }
    }, []);

    return (
        <section id="manufacturing" className="min-h-screen py-32 flex flex-col items-center justify-center relative px-8 bg-black overflow-hidden">
            {/* Background Narrative Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 0.7, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src={buildingImg}
                        alt=""
                        className="w-full h-full object-cover object-center grayscale opacity-60"
                    />
                    {/* Gradient Blending Masks - Softened */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </motion.div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Side: Technical Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-accent-blue font-mono text-[10px] md:text-xs mb-3 md:mb-4 flex items-center gap-2">
                        <span className="w-6 md:w-8 h-px bg-accent-blue" />
                        WHAT FWISH IS
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 uppercase">Systems <br /><span className="text-accent-blue">Engineering</span></h2>
                    <p className="text-white/60 leading-relaxed font-mono text-xs md:text-sm space-y-3 md:space-y-4">
                        <span className="block italic mb-3 md:mb-4">"A design-led exploration of the ground-effect regime."</span>
                        <span className="block">{">"} FWISH is not a product. It is a systems engineering campaign.</span>
                        <span className="block">{">"} We verify aerodynamics through rapid, hardware-rich iteration.</span>
                        <span className="block">{">"} Our goal is to generate open verifyable data for low-altitude transport.</span>
                        <span className="block">{">"} We cut, laminate, and fly to validate the physics.</span>
                    </p>

                </motion.div>

                {/* Right Side: Visual Evidence */}
                <div className="flex flex-col items-center">
                    {/* Manufacturing Video */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative aspect-[9/16] max-h-[500px] w-full max-w-[300px] rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_50px_rgba(0,163,255,0.1)]"
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
            </div>
        </section>
    );
};

export default ManufacturingSection;
