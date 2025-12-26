import { motion } from 'framer-motion';
import { TrendingDown, Target, Clock } from 'lucide-react';

const Results = () => {
    const results = [
        {
            icon: TrendingDown,
            value: '60%',
            label: 'Cost Reduction',
            description: 'Lower operational costs while improving service quality',
            detail: 'Average savings of $2.4M annually for 500-seat centers',
        },
        {
            icon: Target,
            value: '99.9%',
            label: 'Service Accuracy',
            description: 'Every call handled with precision',
            detail: 'Handles complex multi-step processes flawlessly',
        },
        {
            icon: Clock,
            value: '24/7',
            label: 'Always Available',
            description: 'Round-the-clock service with no breaks',
            detail: 'Scales instantly to handle 10x call volume spikes',
        },
    ];

    return (
        <section className="section-padding bg-gray-50">
            <div className="section-container px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="badge mb-6 mx-auto">Proven Results</div>
                    <h2 className="heading-1 text-gray-900">
                        Results That Transform Operations
                    </h2>
                </motion.div>

                {/* Metric Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {results.map((result, index) => {
                        const Icon = result.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 lg:p-10 rounded-3xl bg-white border border-gray-200 text-center card-hover"
                            >
                                <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="metric-number gradient-text mb-2">{result.value}</div>
                                <div className="text-lg font-semibold text-gray-900 mb-3">{result.label}</div>
                                <p className="text-gray-600 mb-4">{result.description}</p>
                                <p className="text-sm text-gray-500">{result.detail}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Results;
