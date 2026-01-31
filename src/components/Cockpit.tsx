
import { type FC } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface TelemetryProps {
    speed: number;
    altitude: number;
    efficiency: number;
}

const sections = ['pre-flight', 'prototype-3d', 'science', 'pressure-viz', 'simulation', 'manufacturing'];

const Cockpit: FC<TelemetryProps> = () => {
    const scrollToSection = (direction: 'up' | 'down') => {
        const sectionElements = sections.map(id => document.getElementById(id));

        // Find the current section
        const currentIdx = sectionElements.findIndex(el => {
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top >= -100 && rect.top <= 100;
        });

        let targetIdx = currentIdx;
        if (direction === 'down') {
            targetIdx = Math.min(currentIdx + 1, sections.length - 1);
            // If none currently centered, find the next one below the viewport
            if (currentIdx === -1) {
                targetIdx = sectionElements.findIndex(el => el && el.getBoundingClientRect().top > 100);
            }
        } else {
            targetIdx = Math.max(currentIdx - 1, 0);
            // If none currently centered, find the first one above the viewport
            if (currentIdx === -1) {
                const reversedIdx = [...sectionElements].reverse().findIndex(el => el && el.getBoundingClientRect().top < -100);
                targetIdx = reversedIdx !== -1 ? (sections.length - 1 - reversedIdx) : 0;
            }
        }

        if (targetIdx !== -1 && sectionElements[targetIdx]) {
            sectionElements[targetIdx]?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed inset-y-0 right-8 z-[100] flex flex-col justify-center gap-4 pointer-events-none">
            <button
                onClick={() => scrollToSection('up')}
                className="glass p-4 rounded-full border border-white/10 hover:border-accent-blue hover:text-accent-blue transition-all pointer-events-auto group"
            >
                <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button
                onClick={() => scrollToSection('down')}
                className="glass p-4 rounded-full border border-white/10 hover:border-accent-blue hover:text-accent-blue transition-all pointer-events-auto group"
            >
                <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </button>
        </div>
    );
};

export default Cockpit;
