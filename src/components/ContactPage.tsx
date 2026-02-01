import type { FC } from 'react'
import { motion } from 'framer-motion'

const ContactPage: FC = () => {
    return (
        <div className="bg-black min-h-screen">
            <main className="pt-40 md:pt-48 pb-20 px-6 md:px-8 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl w-full text-center relative z-10"
                >
                    <div className="mb-16 md:mb-24">
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                            Contact <span className="text-accent-blue">& Development</span>
                        </h1>
                        <p className="text-white/40 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase max-w-xl mx-auto leading-relaxed">
                            Established for institutional coordination and industrial partnerships.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12 md:gap-20 font-mono">
                        {/* Primary Corporate Matrix */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-center md:text-left">
                            {/* MISSION */}
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight flex items-center justify-center md:justify-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                                    Mission
                                </h3>
                                <p className="text-[11px] md:text-sm text-white/50 leading-relaxed">
                                    FWISH AEROSPACE is a technology company dedicated to commercializing high-speed
                                    ground-effect transport. We are bridging the infrastructure gap between traditional
                                    maritime logistics and short-haul aviation.
                                </p>
                            </div>

                            {/* VISION */}
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight flex items-center justify-center md:justify-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                                    Vision
                                </h3>
                                <p className="text-[11px] md:text-sm text-white/50 leading-relaxed">
                                    Our goal is to set the global standard for WIG-effect safety and efficiency —
                                    manufacturing the hardware that will power the next century of carbon-neutral
                                    oceanic connectivity.
                                </p>
                            </div>
                        </div>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* CORPORATE PARTNERSHIPS */}
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                                    Strategic Partnerships
                                </h3>
                                <p className="text-[11px] md:text-base text-white/50 leading-relaxed max-w-2xl mx-auto">
                                    We are engaging with industrial leaders, logistics providers, and infrastructure developers to scale our transport solutions globally.
                                </p>
                            </div>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[9px] md:text-[11px] text-white/40 uppercase tracking-widest max-w-2xl mx-auto list-none text-center">
                                <li className="border border-white/5 py-4 px-4 bg-white/[0.02]">Tier 1 Aerospace Suppliers</li>
                                <li className="border border-white/5 py-4 px-4 bg-white/[0.02]">Maritime Logistics Operators</li>
                                <li className="border border-white/5 py-4 px-4 bg-white/[0.02]">Port Infrastructure Developers</li>
                                <li className="border border-white/5 py-4 px-4 bg-white/[0.02]">Sovereign Wealth & Institutional Capital</li>
                            </ul>

                            {/* CTA */}
                            <div className="pt-4 flex flex-col items-center gap-4">
                                <a
                                    href="mailto:hello@fwish.aero?subject=Corporate%20Inquiry%20-%20Aero%20Division"
                                    className="px-14 py-4 bg-accent-blue/10 border border-accent-blue/40 text-accent-blue text-[10px] md:text-[11px] uppercase tracking-[0.4em] hover:bg-accent-blue hover:text-black transition-all duration-700 font-bold"
                                >
                                    Contact Development
                                </a>

                                <div className="flex items-center gap-2 opacity-20">
                                    <div className="w-1 h-1 rounded-full bg-accent-blue" />
                                    <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase">
                                        FWISH AEROSPACE TECHNOLOGIES // GLOBAL HQ
                                    </span>
                                    <div className="w-1 h-1 rounded-full bg-accent-blue" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    )
}

export default ContactPage
