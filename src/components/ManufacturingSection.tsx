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
        <section id="manufacturing" className="py-20 md:py-32 flex flex-col items-center justify-center relative px-6 md:px-8 bg-black overflow-hidden">
            {/* Background Narrative Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 0.7, scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src={buildingImg}
                        alt=""
                        className="
                            w-full h-full
                            object-cover
                            object-[45%_75%] md:object-[35%_75%]
                            grayscale opacity-40 md:opacity-60
                            "
                    />

                    {/* Gradient Blending Masks - Softened */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/20 md:via-black/20 md:to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </motion.div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
                {/* Left Side: Technical Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <div className="text-accent-blue font-mono text-[9px] md:text-xs mb-3 md:mb-4 flex items-center justify-center md:justify-start gap-2">
                        <span className="w-6 md:w-8 h-px bg-accent-blue" />
                        SYSTEMS ARCHITECTURE
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 uppercase tracking-tight">Systems <br className="hidden md:block" /><span className="text-accent-blue">Engineering</span></h2>
                    <p className="text-white/60 leading-relaxed font-mono text-[10px] md:text-sm space-y-2 md:space-y-4 max-w-sm mx-auto md:mx-0">
                        <span className="block italic mb-2 md:mb-4">"A design-led exploration of ground-effect."</span>
                        <span className="block">{">"} FWISH is a specialized engineering campaign.</span>
                        <span className="block">{">"} Verifying aerodynamics via rapid hardware iteration.</span>
                        <span className="block">{">"} Generating verifiable data for low-altitude transit.</span>
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
