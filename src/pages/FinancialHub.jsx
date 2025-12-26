import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Phone, Building2, CreditCard, ShieldAlert, DollarSign, CheckCircle, ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialHub = () => {
    const useCases = [
        {
            icon: CreditCard,
            title: 'Account Services',
            description: 'Secure voice biometric authentication for balance inquiries and transaction history',
            metrics: '99.9% authentication accuracy',
        },
        {
            icon: ShieldAlert,
            title: 'Fraud Prevention',
            description: 'Real-time fraud alerts and instant card freezing with customer verification',
            metrics: '60% faster fraud response',
        },
        {
            icon: Building2,
            title: 'Loan & Mortgage',
            description: 'Automated pre-qualification and application status with voice-to-form capture',
            metrics: '50% faster processing',
        },
        {
            icon: DollarSign,
            title: 'Payments & Collections',
            description: 'PCI-compliant payment processing with smart collections workflows',
            metrics: '25% improved recovery rates',
        },
    ];

    const integrations = ['Salesforce', 'FIS', 'Fiserv', 'Jack Henry', 'Temenos', 'nCino'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-gray-50">
            {/* Header */}
            <header className="sticky top-0 z-50 glass border-b border-gray-200">
                <div className="section-container px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-purple-accent transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Home</span>
                        </Link>
                        <div className="flex items-center gap-3">
                            <Link to="/demo" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-accent text-white hover:bg-purple-dark transition-colors text-sm font-medium">
                                <Phone className="w-4 h-4" />
                                See Financial Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="section-padding">
                <div className="section-container px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-accent/10 text-purple-accent font-medium text-sm mb-6">
                            <Building2 className="w-4 h-4" />
                            Financial Services Solutions
                        </div>
                        <h1 className="heading-hero text-gray-900 mb-6">
                            Voice AI Built for <span className="text-purple-accent">Finance</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                            PCI-DSS compliant voice AI delivering secure, efficient customer interactions
                            for banking, insurance, and financial services.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/demo" className="bg-purple-accent hover:bg-purple-dark text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-colors">
                                <Calendar className="w-5 h-5" />
                                Schedule Financial Demo
                            </Link>
                            <Link to="/calculator" className="btn-secondary">
                                Calculate Your ROI
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Security Banner */}
            <section className="py-8 bg-gray-900">
                <div className="section-container px-4 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-white">
                        <div className="flex items-center gap-2">
                            <Lock className="w-5 h-5 text-purple-accent" />
                            <span>PCI-DSS Level 1</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5 text-purple-accent" />
                            <span>SOC 2 Type II</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-accent" />
                            <span>Voice Biometrics</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-purple-accent" />
                            <span>Tokenized Payments</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-white">
                <div className="section-container px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="heading-1 text-gray-900 mb-4">Financial Use Cases</h2>
                        <p className="body-large max-w-2xl mx-auto">
                            Secure voice AI for every financial customer touchpoint
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => {
                            const Icon = useCase.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-purple-accent flex items-center justify-center mb-4">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{useCase.title}</h3>
                                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4" />
                                        {useCase.metrics}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="section-padding bg-gray-50">
                <div className="section-container px-4 lg:px-8 text-center">
                    <h2 className="heading-2 text-gray-900 mb-8">Core Banking Integrations</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {integrations.map((integration, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-xl bg-white border border-gray-200 font-medium text-gray-700 shadow-sm"
                            >
                                {integration}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="section-container px-4 lg:px-8">
                    <div className="bg-purple-accent rounded-3xl p-12 text-center text-white">
                        <h2 className="heading-2 mb-4">Ready to Modernize Your Financial Services?</h2>
                        <p className="text-purple-200 text-lg mb-8 max-w-xl mx-auto">
                            Join leading banks and financial institutions using VoiceAI
                        </p>
                        <Link to="/demo" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-purple-accent font-semibold hover:bg-gray-100 transition-colors">
                            Schedule Demo
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FinancialHub;
