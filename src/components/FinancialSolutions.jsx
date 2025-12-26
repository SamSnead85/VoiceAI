import { motion } from 'framer-motion';
import { CreditCard, ShieldAlert, Building2, DollarSign } from 'lucide-react';

const FinancialSolutions = () => {
    const useCases = [
        {
            icon: CreditCard,
            title: 'Account Inquiries',
            description: 'Secure voice biometric authentication for instant balance checks and transaction history',
        },
        {
            icon: ShieldAlert,
            title: 'Fraud Detection',
            description: 'Real-time transaction monitoring with proactive fraud alerts and customer protection',
        },
        {
            icon: Building2,
            title: 'Loan Applications',
            description: 'Streamlined application process with voice-to-form automation and instant pre-qualification',
        },
        {
            icon: DollarSign,
            title: 'Payment Processing',
            description: 'Automated payment scheduling and collections with improved recovery rates',
        },
    ];

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-cyan-50 to-teal-50" />

            <div className="relative section-container px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="badge mb-6 mx-auto" style={{ background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)', color: '#8B5CF6' }}>
                        Financial Services
                    </div>
                    <h2 className="heading-1 text-gray-900 mb-4">
                        Secure Financial Interactions
                    </h2>
                    <p className="body-large max-w-2xl mx-auto">
                        PCI-DSS compliant voice AI for banking, insurance, and financial services
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="bento-grid">
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 lg:p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg card-hover"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-accent to-cyan-bright flex items-center justify-center mb-6">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="heading-3 text-gray-900 mb-3">{useCase.title}</h3>
                                <p className="body-text">{useCase.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FinancialSolutions;
