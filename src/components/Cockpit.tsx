
import { type FC } from 'react';

interface TelemetryProps {
    speed: number;
    altitude: number;
    efficiency: number;
}

const Cockpit: FC<TelemetryProps> = ({ speed, altitude, efficiency }) => {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-10 md:left-10 z-[100] flex flex-row md:flex-col gap-6 md:gap-6 pointer-events-none font-mono bg-black/40 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none px-6 py-3 md:p-0 rounded-full md:rounded-none border border-white/5 md:border-none">
            {/* Speed Telemetry */}
            <div className="space-y-0 md:space-y-1">
                <div className="text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em]">Velocity</div>
                <div className="flex items-baseline gap-1 md:gap-2">
                    <span className="text-lg md:text-2xl font-black text-white leading-none">{Math.round(speed)}</span>
                    <span className="text-[8px] md:text-[10px] text-accent-blue uppercase font-bold tracking-widest">KPH</span>
                </div>
            </div>

            {/* Altitude Telemetry */}
            <div className="space-y-0 md:space-y-1">
                <div className="text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em]">Altitude</div>
                <div className="flex items-baseline gap-1 md:gap-2">
                    <span className="text-lg md:text-2xl font-black text-white leading-none">{altitude.toFixed(1)}</span>
                    <span className="text-[8px] md:text-[10px] text-accent-blue uppercase font-bold tracking-widest">M</span>
                </div>
            </div>

            {/* Efficiency Telemetry */}
            <div className="space-y-0 md:space-y-1">
                <div className="text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em]">Efficiency</div>
                <div className="flex items-baseline gap-1 md:gap-2">
                    <span className="text-lg md:text-2xl font-black text-white leading-none">{efficiency.toFixed(1)}</span>
                    <span className="text-[8px] md:text-[10px] text-accent-blue uppercase font-bold tracking-widest">L/D</span>
                </div>
            </div>
        </div>
    );
};

export default Cockpit;
