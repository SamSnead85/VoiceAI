import { motion } from 'framer-motion';

const Integrations = () => {
    const integrations = [
        'Epic', 'Cerner', 'Salesforce', 'Twilio',
        'Stripe', 'Zendesk', 'RingCentral', 'Tableau',
        'Microsoft Teams', 'Zoom', 'AWS', 'Azure'
    ];

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-purple-50" />

            <div className="relative section-container px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="badge mb-6 mx-auto">Integrations</div>
                    <h2 className="heading-1 text-gray-900 mb-4">
                        Works With Your Existing Systems
                    </h2>
                    <p className="body-large max-w-2xl mx-auto">
                        Deploy in days with pre-built integrations and enterprise-grade APIs
                    </p>
                </motion.div>

                {/* Hub and Spoke Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Center Hub */}
                    <div className="flex justify-center mb-16">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-32 h-32 rounded-3xl gradient-hero flex items-center justify-center shadow-2xl relative z-10"
                        >
                            <span className="text-white font-display font-bold text-lg text-center leading-tight">
                                Voice<br />AI
                            </span>
                        </motion.div>
                    </div>

                    {/* Integration Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {integrations.map((integration, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-teal-primary/30 transition-all text-center card-hover"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mx-auto mb-2">
                                    <span className="text-xs font-bold text-gray-500">
                                        {integration.substring(0, 2).toUpperCase()}
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">{integration}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Connection Lines SVG */}
                    <svg className="absolute top-16 left-1/2 -translate-x-1/2 w-full h-32 pointer-events-none" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0D7C7C" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        {[...Array(8)].map((_, i) => {
                            const startX = 50;
                            const endX = 10 + (i * 80 / 7);
                            return (
                                <line
                                    key={i}
                                    x1={`${startX}%`}
                                    y1="0"
                                    x2={`${endX}%`}
                                    y2="100%"
                                    stroke="url(#connGrad)"
                                    strokeWidth="2"
                                />
                            );
                        })}
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default Integrations;
