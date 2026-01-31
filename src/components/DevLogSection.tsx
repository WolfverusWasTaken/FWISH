import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Box, Printer, Cpu, Code } from 'lucide-react';

const events = [
    {
        date: '2023.08.12',
        title: 'Initial Concept',
        desc: 'WIG-01 feasibility study and aerodynamic modeling completed.',
        icon: Code,
        status: 'COMPLETED'
    },
    {
        date: '2024.01.05',
        title: '3D Printing Sub-systems',
        desc: 'Wing rib structure manufactured using carbon fiber reinforced PLA.',
        icon: Printer,
        status: 'COMPLETED'
    },
    {
        date: '2024.06.20',
        title: 'SLAM Integration',
        desc: 'Stereo-vision SLAM-4 system calibrated for ultra-low altitude sensing.',
        icon: Cpu,
        status: 'ACTIVE'
    },
    {
        date: '2025.02.15',
        title: 'Flight Trials',
        desc: 'Full-scale prototype undergoing taxi tests and ground effect lift verification.',
        icon: Box,
        status: 'PENDING'
    }
];

const DevLogSection: FC = () => {
    return (
        <section id="dev-log" className="min-h-screen py-32 flex flex-col items-center justify-center relative px-8">
            <div className="max-w-6xl w-full">
                <div className="flex items-center gap-4 mb-16">
                    <Terminal className="text-accent-blue" />
                    <h2 className="text-3xl font-mono uppercase tracking-widest font-black">Development_Log</h2>
                    <div className="h-px flex-grow bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-6 rounded-sm border-t-2 border-white/5 hover:border-accent-blue/50 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                                    <event.icon className="w-5 h-5 text-accent-blue" />
                                </div>
                                <div className={`text-[8px] font-mono px-2 py-0.5 rounded-full ${event.status === 'COMPLETED' ? 'bg-accent-green/10 text-accent-green' :
                                    event.status === 'ACTIVE' ? 'bg-accent-blue/10 text-accent-blue' : 'bg-white/5 text-white/40'
                                    }`}>
                                    {event.status}
                                </div>
                            </div>

                            <div className="text-[10px] font-mono text-white/40 mb-1">{event.date}</div>
                            <h3 className="text-lg font-bold mb-3 uppercase tabular-nums">{event.title}</h3>
                            <p className="text-xs text-white/60 leading-relaxed font-mono">
                                {"> "} {event.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 glass border border-white/5 rounded-xl font-mono text-[10px] text-white/20 whitespace-pre overflow-hidden">
                    {`[SYSTEM ARCHIVE]
$ fetch --logs --tag "manufacturing"
> Block #492: Wing Spar Composite Layup Done
> Block #513: Motor Controller PID Tuning Complete
> Block #588: Collision Avoidance Layer 1 Passed
[END OF STREAM]
_`}
                </div>
            </div>
        </section>
    );
};

export default DevLogSection;
