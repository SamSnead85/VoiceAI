import { motion } from 'framer-motion';
import { Building2, Heart, Shield, Globe } from 'lucide-react';

const SocialProof = () => {
    const clients = [
        { name: 'Cigna', icon: Heart, description: 'Healthcare' },
        { name: 'Molina Healthcare', icon: Heart, description: 'Healthcare' },
        { name: 'Fortune 500 Financial', icon: Building2, description: 'Financial Services' },
        { name: 'Global Insurance Leader', icon: Shield, description: 'Insurance' },
    ];

    const metrics = [
        { value: '50M+', label: 'Calls/Year' },
        { value: '99.9%', label: 'Accuracy' },
        { value: '60%', label: 'Cost Savings' },
        { value: '40+', label: 'Languages' },
    ];

    return (
        <section className="bg-gray-50 border-y border-gray-200">
            <div className="section-container px-4 lg:px-8 py-16 lg:py-20">
                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-sm font-semibold text-gray-500 tracking-wider uppercase mb-12"
                >
                    Powering the World's Largest Call Centers
                </motion.p>

                {/* Client Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                >
                    {clients.map((client, index) => {
                        const Icon = client.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-gray-200 card-hover"
                            >
                                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <span className="font-display font-semibold text-gray-900 text-center">
                                    {client.name}
                                </span>
                                <span className="text-sm text-gray-500 mt-1">{client.description}</span>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                            <div className="metric-number gradient-text mb-2">{metric.value}</div>
                            <div className="text-gray-600 font-medium">{metric.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
