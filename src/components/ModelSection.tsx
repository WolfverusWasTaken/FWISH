import { type FC } from 'react';

const ModelSection: FC = () => {
    return (
        <section id="prototype-3d" className="min-h-screen bg-black flex flex-col p-8 md:p-20 items-center justify-center">
            {/* Header */}
            <div className="w-full max-w-[1200px] mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse shadow-[0_0_15px_#00A3FF]" />
                    <div className="text-accent-blue font-mono text-[11px] tracking-[0.6em] uppercase opacity-70">Tactical Design Review // WIG-01</div>
                </div>
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none m-0 text-white">
                    Technical <span className="text-accent-blue">Prototype</span>
                </h2>
            </div>

            {/* Main Center View - Placeholder */}
            <div className="w-full max-w-[900px] aspect-square relative border border-white/10 bg-black/20 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                {/* Technical Grid Background */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="z-10 flex flex-col items-center gap-6">
                    <div className="w-24 h-24 border-2 border-accent-blue rounded-full flex items-center justify-center animate-spin-slow">
                        <div className="w-16 h-16 border border-accent-blue/30 rounded-full" />
                    </div>
                    <div className="text-center font-mono">
                        <div className="text-accent-blue text-sm tracking-[0.3em] font-bold uppercase mb-2">System Initializing</div>
                        <div className="text-white/20 text-[10px] uppercase tracking-widest animate-pulse">Establishing Secure Uplink...</div>
                    </div>
                </div>

                {/* Viewport UI Overlay */}
                <div className="absolute top-8 left-8 font-mono text-[10px] text-accent-blue/80 uppercase tracking-[0.4em] border-l-2 border-accent-blue pl-4">
                    SECURE VIEWPORT // 01
                </div>

                <div className="absolute bottom-8 right-8 text-right">
                    <div className="text-accent-blue font-mono text-xs mb-1 tracking-[0.3em] font-bold uppercase">WIG-01 Chassis</div>
                    <div className="text-white/20 text-[10px] font-mono leading-relaxed uppercase tracking-[0.2em]">Full aerodynamic geometric validation</div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="w-full max-w-[1200px] mt-12 pt-8 border-t border-white/5 flex justify-between items-center opacity-30 font-mono text-[9px] uppercase tracking-[0.5em] text-white">
                <span>Block-09 Geometry Verified // AUTH-772</span>
                <span>© 2026 DESIGN BUREAU 42</span>
            </div>
        </section>
    );
};

export default ModelSection;
