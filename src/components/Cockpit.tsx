
import { type FC } from 'react';

interface TelemetryProps {
    speed: number;
    altitude: number;
    efficiency: number;
    regime?: string;
    windConditions?: {
        speed: number;
        direction: number;
        gusts: number;
    };
}

const Cockpit: FC<TelemetryProps> = ({
    speed,
    altitude,
    efficiency,
    regime
}) => {
    // Efficiency color based on value (now represents % gain)
    const getEfficiencyColor = () => {
        if (efficiency < 5) return 'text-white/50';
        if (efficiency < 15) return 'text-accent-blue';
        if (efficiency < 25) return 'text-accent-green';
        return 'text-accent-green animate-pulse';
    };

    return (
        <div className="fixed bottom-4 left-0 w-full px-4 md:bottom-10 md:left-10 md:translate-x-0 z-[100] pointer-events-none font-mono">
            {/* Main telemetry container */}
            <div className="flex flex-row md:flex-col gap-4 md:gap-6 bg-black/60 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none px-5 py-3 md:p-0 rounded-full md:rounded-none border border-white/10 md:border-none">

                {/* Regime Label (desktop only) */}
                {regime && (
                    <div className="hidden md:block space-y-1 mb-2">
                        <div className="text-[7px] text-white/30 uppercase tracking-[0.2em]">Regime</div>
                        <div className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${regime === 'OPTIMUM GROUND EFFECT'
                            ? 'text-accent-green animate-pulse'
                            : 'text-accent-blue'
                            }`}>
                            {regime}
                        </div>
                    </div>
                )}

                {/* Speed Telemetry */}
                <div className="space-y-0 md:space-y-1">
                    <div className="text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em]">Speed</div>
                    <div className="flex items-baseline gap-1 md:gap-2">
                        <span className="text-lg md:text-2xl font-black text-white leading-none">{Math.round(speed)}</span>
                        <span className="text-[8px] md:text-[10px] text-accent-blue uppercase font-bold tracking-widest">KM/H</span>
                    </div>
                </div>

                {/* Altitude Telemetry */}
                <div className="space-y-0 md:space-y-1">
                    <div className="text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em]">Altitude</div>
                    <div className="flex items-baseline gap-1 md:gap-2">
                        <span className="text-lg md:text-2xl font-black text-white leading-none">{altitude.toFixed(2)}</span>
                        <span className="text-[8px] md:text-[10px] text-accent-blue uppercase font-bold tracking-widest">M</span>
                    </div>
                </div>

                {/* Efficiency Telemetry with Enhanced Visualization */}
                <div className="space-y-0 md:space-y-1">
                    <div className="text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em]">Efficiency Gain</div>
                    <div className="flex items-baseline gap-1 md:gap-2">
                        <span className={`text-lg md:text-2xl font-black leading-none transition-colors duration-300 ${getEfficiencyColor()}`}>
                            {efficiency > 0 ? '+' : ''}{efficiency.toFixed(1)}
                        </span>
                        <span className="text-[8px] md:text-[10px] text-accent-blue uppercase font-bold tracking-widest">%</span>
                    </div>
                    {/* Efficiency zones indicator */}
                    <div className="flex gap-[2px] mt-1">
                        <div className={`h-[2px] w-4 md:w-5 transition-colors duration-300 ${efficiency >= 5 ? 'bg-accent-blue' : 'bg-white/10'}`} />
                        <div className={`h-[2px] w-4 md:w-5 transition-colors duration-300 ${efficiency >= 15 ? 'bg-accent-green' : 'bg-white/10'}`} />
                        <div className={`h-[2px] w-4 md:w-5 transition-colors duration-300 ${efficiency >= 25 ? 'bg-accent-green' : 'bg-white/10'}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cockpit;
