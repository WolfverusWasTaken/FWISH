import { type FC } from 'react';
import PressureSection from './PressureSection';
import ScienceSection from './ScienceSection';

const SciencePage: FC = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col justify-between">
            <main className="pt-20 md:pt-24 flex-grow flex flex-col">
                <PressureSection />
                <ScienceSection />
            </main>

            {/* Science Footer */}
            <footer className="py-20 flex flex-col items-center border-t border-white/5 opacity-50">
                <div className="text-center space-y-4">
                    <div className="text-[10px] font-mono mb-2 uppercase tracking-[1em] text-white">FWISH SCIENCE</div>
                    <p className="text-[9px] text-white/30 max-w-sm mx-auto leading-relaxed">
                        Engineering concepts presented for domain exploration and system design.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default SciencePage;
