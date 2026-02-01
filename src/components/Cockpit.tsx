
import { type FC } from 'react';

interface TelemetryProps {
    speed: number;
    altitude: number;
    efficiency: number;
}

const Cockpit: FC<TelemetryProps> = ({ speed, altitude, efficiency }) => {
    return (
        <div className="fixed bottom-10 left-10 z-[100] flex flex-col gap-6 pointer-events-none font-mono">
            {/* Speed Telemetry */}
            <div className="space-y-1">
                <div className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Velocity</div>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white leading-none">{Math.round(speed)}</span>
                    <span className="text-[10px] text-accent-blue uppercase font-bold tracking-widest">KPH</span>
                </div>
            </div>

            {/* Altitude Telemetry */}
            <div className="space-y-1">
                <div className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Altitude</div>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white leading-none">{altitude.toFixed(1)}</span>
                    <span className="text-[10px] text-accent-blue uppercase font-bold tracking-widest">M</span>
                </div>
            </div>

            {/* Efficiency Telemetry */}
            <div className="space-y-1">
                <div className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Efficiency</div>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white leading-none">{efficiency.toFixed(1)}</span>
                    <span className="text-[10px] text-accent-blue uppercase font-bold tracking-widest">L/D</span>
                </div>
            </div>
        </div>
    );
};

export default Cockpit;
