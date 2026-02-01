import { type FC } from 'react';
import logo from '../assets/Logo_nobackground.png';

interface HeaderProps {
    currentView: 'project' | 'science' | 'products' | 'contact';
    onViewChange: (view: 'project' | 'science' | 'products' | 'contact') => void;
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
        <header className="fixed top-0 left-0 w-full z-[100] px-4 pt-4 pb-2 md:px-12 md:py-8 flex flex-col md:flex-row items-center md:justify-between pointer-events-none gap-3 md:gap-0 transition-all duration-300">
            {/* Branding - Order 2 on Mobile (Below Nav) */}
            <div className="order-2 md:order-none flex-1 flex justify-center md:justify-start pointer-events-auto w-full md:w-auto">
                <button
                    onClick={handleProjectClick}
                    className="flex items-center gap-2 md:gap-4 group"
                >
                    <img
                        src={logo}
                        alt="FWISH Logo"
                        className="
                            w-8 h-8
                            md:w-14 md:h-14
                            object-contain
                            opacity-85
                            group-hover:opacity-100
                            transition-opacity
                        "
                    />
                    <div className="text-left hidden sm:block md:block">
                        <div className="text-[10px] md:text-[11px] font-black tracking-[0.25em] text-white uppercase leading-none mb-1">
                            FWISH
                        </div>
                        <div className="text-[7px] md:text-[8px] font-mono text-white/35 tracking-[0.15em] uppercase leading-none">
                            Aerospace
                        </div>
                    </div>
                    {/* Mobile Only Text (Simpler) */}
                    <div className="text-left block sm:hidden md:hidden">
                        <div className="text-[9px] font-black tracking-[0.2em] text-white uppercase leading-none">
                            FWISH
                        </div>
                    </div>
                </button>
            </div>

            {/* Navigation - Order 1 on Mobile (Top) */}
            <div className="order-1 md:order-none relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-auto w-auto max-w-fit z-20">
                <nav className="flex gap-4 md:gap-8 bg-black/60 backdrop-blur-xl px-5 py-2 md:px-8 md:py-3 rounded-full border border-white/10 shadow-2xl">
                    {(['project', 'products', 'science', 'contact'] as const).map((view) => (
                        <button
                            key={view}
                            onClick={() => view === 'project' ? handleProjectClick() : onViewChange(view)}
                            className={`font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.3em] transition-all px-0.5 ${currentView === view
                                    ? 'text-accent-blue'
                                    : 'text-white/40 hover:text-white'
                                }`}
                        >
                            {view}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Telemetry Indicator - Right Anchor */}
            <div className="flex-1 hidden lg:flex flex-col items-end pointer-events-none opacity-20">
                <div className="text-[8px] font-mono uppercase tracking-widest text-accent-blue font-bold">
                    Domain Control
                </div>
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white">
                    {currentView === 'project'
                        ? 'Project // HUB'
                        : currentView === 'products'
                            ? 'Systems // PROBES'
                            : currentView === 'science'
                                ? 'Aerodynamics // RES'
                                : 'Corporate // INFRA'}
                </div>
            </div>
        </header>
    );
};

export default Header;
