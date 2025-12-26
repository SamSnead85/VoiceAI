import { motion } from 'framer-motion';
import { Brain, Globe, Lock } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Brain,
            title: 'Domain-Tuned Intelligence',
            description: 'Custom trained on healthcare and financial terminology for 40% better accuracy than generic AI',
            gradient: 'from-teal-primary to-coral-accent',
        },
        {
            icon: Globe,
            title: 'Globally Accessible',
            description: 'Fluent conversations in 40+ languages serving diverse patient and customer populations',
            gradient: 'from-coral-accent to-purple-accent',
        },
        {
            icon: Lock,
            title: 'Secure & Compliant',
            description: 'End-to-end encryption with SOC 2, HIPAA, GDPR, and PCI-DSS compliance built in',
            gradient: 'from-purple-accent to-cyan-bright',
        },
    ];

    return (
        <section id="features" className="section-padding bg-gray-900">
            <div className="section-container px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="badge mb-6 mx-auto" style={{ background: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
                        Why We're Different
                    </div>
                    <h2 className="heading-1 text-white mb-4">
                        Built for Accuracy You Can Trust
                    </h2>
                    <p className="body-large text-gray-400 max-w-2xl mx-auto">
                        Enterprise-grade AI trained specifically for healthcare and financial services
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity"
                                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--color-${feature.gradient.split(' ')[0].replace('from-', '')}), var(--color-${feature.gradient.split(' ')[1].replace('to-', '')}))` }} />
                                <div className="relative p-8 lg:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="heading-3 text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
