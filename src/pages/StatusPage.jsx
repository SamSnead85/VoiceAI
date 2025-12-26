import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Clock, Server, Database, Shield, Globe } from 'lucide-react';

const systemStatus = [
    { name: 'Voice Processing API', status: 'operational', uptime: '99.99%' },
    { name: 'Conversation Engine', status: 'operational', uptime: '99.97%' },
    { name: 'Analytics Dashboard', status: 'operational', uptime: '99.95%' },
    { name: 'Integration Gateway', status: 'operational', uptime: '99.99%' },
    { name: 'CDN & Edge Nodes', status: 'operational', uptime: '100%' },
];

const recentIncidents = [
    { date: 'Dec 15, 2024', title: 'Scheduled Maintenance', duration: '15 min', resolved: true },
    { date: 'Nov 28, 2024', title: 'Minor API Latency', duration: '8 min', resolved: true },
];

const StatusPage = () => {
    const allOperational = systemStatus.every(s => s.status === 'operational');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="section-container px-4 lg:px-8 py-8 text-center">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${allOperational ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                        {allOperational ? (
                            <>
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-semibold">All Systems Operational</span>
                            </>
                        ) : (
                            <>
                                <AlertCircle className="w-5 h-5" />
                                <span className="font-semibold">Partial System Outage</span>
                            </>
                        )}
                    </div>
                    <h1 className="heading-1 text-gray-900 mb-2">VoiceAI System Status</h1>
                    <p className="text-gray-600">Real-time system health and uptime metrics</p>
                </div>
            </header>

            <main className="section-container px-4 lg:px-8 py-12">
                {/* Current Status */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h2 className="font-display font-semibold text-xl text-gray-900 mb-6">Current Status</h2>
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        {systemStatus.map((system, index) => {
                            const icons = {
                                'Voice Processing API': Server,
                                'Conversation Engine': Database,
                                'Analytics Dashboard': Shield,
                                'Integration Gateway': Globe,
                                'CDN & Edge Nodes': Globe,
                            };
                            const Icon = icons[system.name] || Server;

                            return (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between p-4 ${index !== systemStatus.length - 1 ? 'border-b border-gray-100' : ''
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="w-5 h-5 text-gray-400" />
                                        <span className="font-medium text-gray-900">{system.name}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm text-gray-500">Uptime: {system.uptime}</span>
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${system.status === 'operational'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            <span className={`w-2 h-2 rounded-full ${system.status === 'operational' ? 'bg-green-500' : 'bg-yellow-500'
                                                }`} />
                                            {system.status === 'operational' ? 'Operational' : 'Degraded'}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Uptime Graph Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <h2 className="font-display font-semibold text-xl text-gray-900 mb-6">30-Day Uptime</h2>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6">
                        <div className="flex gap-1">
                            {Array(30).fill(0).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-1 h-10 rounded bg-green-500"
                                    title={`Day ${i + 1}: 100% uptime`}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-sm text-gray-500">
                            <span>30 days ago</span>
                            <span>Today</span>
                        </div>
                    </div>
                </motion.div>

                {/* Recent Incidents */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="font-display font-semibold text-xl text-gray-900 mb-6">Recent Incidents</h2>
                    <div className="space-y-4">
                        {recentIncidents.map((incident, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 p-4"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-medium text-gray-900">{incident.title}</span>
                                            {incident.resolved && (
                                                <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Resolved</span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span>{incident.date}</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {incident.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default StatusPage;
