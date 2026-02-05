import { useState, type FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ContactPage: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="bg-black min-h-screen">
            <main className="pt-40 md:pt-48 pb-20 px-6 md:px-8 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl w-full text-center relative z-10"
                >
                    {/* HERO */}
                    <div className="mb-16 md:mb-24">
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                            Contact <span className="text-accent-blue">& Development</span>
                        </h1>
                        <p className="text-white/40 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase max-w-xl mx-auto leading-relaxed">
                            Established for institutional coordination and industrial partnerships.
                        </p>
                    </div>

                    <div className="flex flex-col gap-14 md:gap-24 font-mono">

                        {/* STRATEGIC PARTNERSHIPS — MOVED UP */}
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                                    Strategic Partnerships
                                </h3>
                                <p className="text-[11px] md:text-base text-white/50 leading-relaxed max-w-2xl mx-auto">
                                    We engage with institutions and industrial stakeholders aligned with advancing
                                    high-speed ground-effect transport from prototype to infrastructure-scale deployment.
                                </p>
                            </div>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[9px] md:text-[11px] text-white/40 uppercase tracking-widest max-w-2xl mx-auto list-none text-center">
                                <li className="border border-white/5 py-4 px-4 bg-white/[0.02]">
                                    Tier 1 Aerospace Suppliers
                                </li>
                                <li className="border border-white/5 py-4 px-4 bg-white/[0.02]">
                                    Maritime Logistics Operators
                                </li>
                                <li className="border border-white/5 py-4 px-4 bg-white/[0.02]">
                                    Port & Coastal Infrastructure Developers
                                </li>
                                <li className="border border-white/5 py-4 px-4 bg-white/[0.02]">
                                    Institutional & Strategic Capital Partners
                                </li>
                            </ul>

                            {/* PRIMARY CTA */}
                            <div className="pt-6 flex flex-col items-center gap-4">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="px-14 py-4 bg-accent-blue/10 border border-accent-blue/40 text-accent-blue text-[10px] md:text-[11px] uppercase tracking-[0.4em] hover:bg-accent-blue hover:text-black transition-all duration-700 font-bold cursor-pointer"
                                >
                                    Request Briefing
                                </button>

                                <div className="flex items-center gap-2 opacity-20">
                                    <div className="w-1 h-1 rounded-full bg-accent-blue" />
                                    <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase">
                                        FWISH TECHNOLOGY
                                    </span>
                                    <div className="w-1 h-1 rounded-full bg-accent-blue" />
                                </div>
                            </div>
                        </div>

                        {/* DIVIDER */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* MISSION + VISION — NOW SECONDARY */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-center md:text-left">

                            {/* MISSION */}
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight flex items-center justify-center md:justify-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                                    Mission
                                </h3>
                                <p className="text-[11px] md:text-sm text-white/50 leading-relaxed">
                                    FWISH TECHNOLOGY develops and commercializes high-speed ground-effect transport systems,
                                    bridging the operational gap between maritime logistics and short-haul aviation.
                                </p>
                            </div>

                            {/* VISION */}
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight flex items-center justify-center md:justify-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                                    Vision
                                </h3>
                                <p className="text-[11px] md:text-sm text-white/50 leading-relaxed">
                                    To establish ground-effect transport as a globally trusted mobility layer—defined by
                                    safety, efficiency, and infrastructure-scale viability.
                                </p>
                            </div>
                        </div>

                        {/* DIVIDER */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* FOUNDERS SECTION */}
                        <div className="space-y-8 pt-4">
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight text-center">
                                Team
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
                                <a href="https://www.linkedin.com/in/calwin-ang/" target="_blank" rel="noopener noreferrer" className="border border-white/5 py-4 px-2 bg-white/[0.02] text-[9px] text-white/40 uppercase tracking-[0.2em] hover:border-accent-blue/30 hover:text-accent-blue transition-all duration-500">
                                    Calwin Ang
                                </a>
                                <a href="https://www.linkedin.com/in/carl-louis/" target="_blank" rel="noopener noreferrer" className="border border-white/5 py-4 px-2 bg-white/[0.02] text-[9px] text-white/40 uppercase tracking-[0.2em] hover:border-accent-blue/30 hover:text-accent-blue transition-all duration-500">
                                    Carl Louis
                                </a>
                                <a href="https://www.linkedin.com/in/alexi-george/" target="_blank" rel="noopener noreferrer" className="border border-white/5 py-4 px-2 bg-white/[0.02] text-[9px] text-white/40 uppercase tracking-[0.2em] hover:border-accent-blue/30 hover:text-accent-blue transition-all duration-500">
                                    Alexi George
                                </a>
                                <a href="https://www.linkedin.com/in/nigel-lokex/" target="_blank" rel="noopener noreferrer" className="border border-white/5 py-4 px-2 bg-white/[0.02] text-[9px] text-white/40 uppercase tracking-[0.2em] hover:border-accent-blue/30 hover:text-accent-blue transition-all duration-500">
                                    Nigel Loke
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </main>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative z-10 w-full max-w-lg bg-black border border-white/10 p-8 md:p-12 text-center glass overflow-hidden"
                        >
                            {/* Scanning line for aesthetic consistency */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-[1px] bg-accent-blue/40"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="space-y-6 font-mono text-left">
                                <div className="text-center space-y-2">
                                    <h3 className="text-white text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold">Partnership Inquiry</h3>
                                    <p className="text-[10px] text-white/60 leading-relaxed uppercase tracking-widest">
                                        FWISH Technology is currently engaging in limited early-stage discussions.
                                    </p>
                                </div>

                                <p className="text-[9px] text-white/40 uppercase tracking-[0.1em] leading-relaxed text-center">
                                    Please provide your contact information and brief context.<br />
                                    Relevant inquiries will receive a response.
                                </p>

                                <form
                                    action="https://formspree.io/f/xojnawlw"
                                    method="POST"
                                    className="space-y-4"
                                >
                                    <div className="space-y-1">
                                        <label className="text-[8px] text-white/30 uppercase tracking-widest pl-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-[10px] text-white focus:outline-none focus:border-accent-blue/40 transition-colors rounded-sm"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center px-1">
                                            <label className="text-[8px] text-white/30 uppercase tracking-widest">Brief Context</label>
                                        </div>
                                        <textarea
                                            required
                                            name="context"
                                            maxLength={300}
                                            rows={4}
                                            className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-[10px] text-white focus:outline-none focus:border-accent-blue/40 transition-colors rounded-sm resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-accent-blue/10 border border-accent-blue/40 text-accent-blue text-[10px] uppercase tracking-[0.4em] hover:bg-accent-blue hover:text-black transition-all duration-700 font-bold mt-4"
                                    >
                                        Submit Inquiry
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ContactPage

