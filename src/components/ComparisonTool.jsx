import { motion } from 'framer-motion';
import { BarChart3, Users, Clock, TrendingUp, CheckCircle, XCircle, Minus } from 'lucide-react';

const comparisonData = [
    {
        feature: 'Average Handle Time',
        voiceAI: '2.5 min',
        traditional: '8+ min',
        improvement: '70% faster',
        winner: 'voiceai',
    },
    {
        feature: 'Cost Per Call',
        voiceAI: '$0.35',
        traditional: '$12-15',
        improvement: '97% lower',
        winner: 'voiceai',
    },
    {
        feature: '24/7 Availability',
        voiceAI: true,
        traditional: false,
        improvement: 'Always on',
        winner: 'voiceai',
    },
    {
        feature: 'Multi-Language Support',
        voiceAI: '40+ languages',
        traditional: 'Limited',
        improvement: 'Global reach',
        winner: 'voiceai',
    },
    {
        feature: 'Accuracy Rate',
        voiceAI: '99.9%',
        traditional: '85-90%',
        improvement: '+10% accuracy',
        winner: 'voiceai',
    },
    {
        feature: 'Scalability',
        voiceAI: 'Instant',
        traditional: 'Weeks to hire',
        improvement: 'Infinite scale',
        winner: 'voiceai',
    },
    {
        feature: 'Compliance',
        voiceAI: true,
        traditional: true,
        improvement: 'Both compliant',
        winner: 'tie',
    },
    {
        feature: 'Complex Problem Solving',
        voiceAI: 'AI + Human Handoff',
        traditional: true,
        improvement: 'Best of both',
        winner: 'tie',
    },
];

const ComparisonTool = () => {
    return (
        <section className="section-padding bg-gray-900">
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
                        Head-to-Head Comparison
                    </div>
                    <h2 className="heading-1 text-white mb-4">
                        VoiceAI vs Traditional Call Centers
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how AI-powered voice automation compares to traditional human-only call center operations
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
                            <div className="p-4 font-display font-semibold text-gray-600">Feature</div>
                            <div className="p-4 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-primary to-purple-accent text-white font-display font-bold">
                                    <BarChart3 className="w-4 h-4" />
                                    VoiceAI
                                </div>
                            </div>
                            <div className="p-4 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-600 font-display font-medium">
                                    <Users className="w-4 h-4" />
                                    Traditional
                                </div>
                            </div>
                            <div className="p-4 text-center font-display font-semibold text-gray-600">Impact</div>
                        </div>

                        {/* Table Body */}
                        {comparisonData.map((row, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`grid grid-cols-4 items-center border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                    }`}
                            >
                                <div className="p-4 font-medium text-gray-900">{row.feature}</div>
                                <div className="p-4 text-center">
                                    {typeof row.voiceAI === 'boolean' ? (
                                        row.voiceAI ? (
                                            <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                                        ) : (
                                            <XCircle className="w-6 h-6 text-red-400 mx-auto" />
                                        )
                                    ) : (
                                        <span className="font-semibold text-teal-primary">{row.voiceAI}</span>
                                    )}
                                </div>
                                <div className="p-4 text-center">
                                    {typeof row.traditional === 'boolean' ? (
                                        row.traditional ? (
                                            <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                                        ) : (
                                            <XCircle className="w-6 h-6 text-red-400 mx-auto" />
                                        )
                                    ) : (
                                        <span className="text-gray-600">{row.traditional}</span>
                                    )}
                                </div>
                                <div className="p-4 text-center">
                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${row.winner === 'voiceai'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-600'
                                        }`}>
                                        {row.winner === 'voiceai' && <TrendingUp className="w-3 h-3" />}
                                        {row.improvement}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Note */}
                    <div className="mt-8 text-center text-gray-400 text-sm">
                        * Metrics based on average customer results. Individual results may vary.
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ComparisonTool;
