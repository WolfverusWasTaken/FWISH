import { type FC } from 'react';

interface HeaderProps {
    currentView: 'project' | 'science' | 'products';
    onViewChange: (view: 'project' | 'science' | 'products') => void;
}

const Header: FC<HeaderProps> = ({ currentView, onViewChange }) => {
    const handleProjectClick = () => {
        if (currentView === 'project') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            onViewChange('project');
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[100] px-4 py-6 md:px-12 md:py-8 flex justify-between items-center pointer-events-none">
            {/* Branding - Always leads to project */}
            <button
                onClick={handleProjectClick}
                className="pointer-events-auto flex items-center gap-2 md:gap-3 group"
            >
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent-blue transition-colors">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent-blue" />
                </div>
                <div className="text-left">
                    <div className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-white uppercase leading-none mb-0.5 md:mb-1">FWISH</div>
                    <div className="hidden sm:block text-[6px] md:text-[7px] font-mono text-white/30 tracking-[0.1em] uppercase leading-none">Aerospace</div>
                </div>
            </button>

            {/* Navigation */}
            <nav className="pointer-events-auto flex gap-3 md:gap-10 bg-black/60 backdrop-blur-xl px-4 md:px-6 py-2.5 md:py-3 rounded-full border border-white/10 shadow-2xl scale-90 md:scale-100">
                <button
                    onClick={handleProjectClick}
                    className={`font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all ${currentView === 'project' ? 'text-accent-blue' : 'text-white/40 hover:text-white'
                        }`}
                >
                    Project
                </button>
                <button
                    onClick={() => onViewChange('products')}
                    className={`font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all ${currentView === 'products' ? 'text-accent-blue' : 'text-white/40 hover:text-white'
                        }`}
                >
                    Products
                </button>
                <button
                    onClick={() => onViewChange('science')}
                    className={`font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all ${currentView === 'science' ? 'text-accent-blue' : 'text-white/40 hover:text-white'
                        }`}
                >
                    Science
                </button>
                <button
                    onClick={() => {
                        if (currentView !== 'project') {
                            onViewChange('project');
                            setTimeout(() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }, 150);
                        } else {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/40 hover:text-white transition-all"
                >
                    Contact
                </button>
            </nav>

            {/* Telemetry Indicator (Desktop Only) */}
            <div className="hidden lg:flex flex-col items-end pointer-events-none opacity-20">
                <div className="text-[8px] font-mono uppercase tracking-widest text-accent-blue font-bold">Domain Control</div>
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white">
                    {currentView === 'project' ? 'Project // HUB' : currentView === 'products' ? 'Systems // PROBES' : 'Aerodynamics // RES'}
                </div>
            </div>
        </header>
    );
};

export default Header;
