import React, { type FC } from 'react';
import { motion } from 'framer-motion';
import buildingImg from '../assets/Model_V0_building.jpg';

interface ManufacturingSectionProps {
    onContactClick?: () => void;
}

const ManufacturingSection: FC<ManufacturingSectionProps> = ({ onContactClick }) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 5.0;
        }
    }, []);

    const handleContactClick = () => {
        if (onContactClick) {
            onContactClick();
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="manufacturing"
            className="py-20 md:py-32 flex flex-col items-center justify-center relative px-6 md:px-8 bg-black overflow-hidden"
        >
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
                            object-[55%_75%] md:object-[35%_75%]
                            grayscale opacity-50 md:opacity-60
                        "
                    />

                    {/* Gradient Masks */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/30 md:via-black/20 md:to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </motion.div>
            </div>

            {/* CONTENT */}
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

                {/* TEXT BLOCK */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 text-center md:text-left"
                >
                    <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tight">
                        Ground-Effect <br className="hidden md:block" />
                        <span className="text-accent-blue">Transport</span>
                    </h2>

                    {/* ONE-SENTENCE POSITIONING */}
                    <p className="text-white/65 font-mono text-[11px] md:text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                        We design, build, and test ground-effect transport systems at low altitude.
                    </p>

                    {/* SCANNABLE BULLETS */}
                    <ul className="mt-5 space-y-2 text-white/50 font-mono text-[10px] md:text-sm max-w-sm mx-auto md:mx-0">
                        <li>• Hardware-first development</li>
                        <li>• Rapid prototyping & testing</li>
                        <li>• Verifiable aerodynamic data</li>
                        <li>• Efficient surface-level transport</li>
                    </ul>

                    <p className="mt-4 text-white/35 font-mono text-[9px] md:text-[10px] max-w-sm mx-auto md:mx-0">
                        Current work includes scaled prototypes, fabrication tooling, and controlled test campaigns.
                    </p>
                </motion.div>

                {/* VIDEO — PRIORITIZED ON MOBILE */}
                <div className="order-1 md:order-2 flex flex-col items-center md:items-end md:translate-x-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="
                            relative aspect-[9/16]
                            w-full
                            max-w-[200px] sm:max-w-[220px] md:max-w-[300px]
                            max-h-[340px] sm:max-h-[380px] md:max-h-[500px]
                            rounded-3xl
                            overflow-hidden
                            glass
                            border border-white/10
                            shadow-[0_0_40px_rgba(0,163,255,0.12)]
                        "
                    >
                        <video
                            ref={videoRef}
                            src="./manufacturing.MOV"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-85"
                        />
                    </motion.div>
                </div>
            </div>

            {/* MOBILE COLLAPSIBLE — TECHNICAL DETAILS */}
            <details className="mt-6 md: text-left max-w-sm mx-auto relative z-10">
                <summary className="cursor-pointer font-mono text-[10px] text-accent-blue tracking-wide list-none">
                    + View technical scope
                </summary>

                <div className="mt-3 space-y-2 text-white/45 font-mono text-[9px] leading-relaxed">
                    <p>• Ground-effect aerodynamic characterization</p>
                    <p>• Structural integration of lifting surfaces</p>
                    <p>• Control authority near surface boundary</p>
                    <p>• Fabrication-led validation methodology</p>
                </div>
            </details>

            {/* MOBILE CTA — LEAD ACTION */}
            <div className="mt-10 md: relative z-10">
                <button
                    onClick={handleContactClick}
                    className="
                        inline-block
                        px-8 py-3
                        border border-accent-blue/30
                        text-accent-blue
                        font-mono text-[9px]
                        tracking-[0.35em]
                        uppercase
                        hover:bg-accent-blue
                        hover:text-black
                        transition-all duration-500
                    "
                >
                    Initiate Collaboration
                </button>
            </div>
        </section>
    );
};

export default ManufacturingSection;
