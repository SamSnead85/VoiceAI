import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Phone, Heart, Shield, Clock, Activity, Pill, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthcareHub = () => {
    const useCases = [
        {
            icon: Clock,
            title: 'Appointment Scheduling',
            description: '24/7 automated scheduling, rescheduling, and cancellations with EHR integration',
            metrics: '40% reduction in no-shows',
        },
        {
            icon: Shield,
            title: 'Insurance Verification',
            description: 'Real-time eligibility checks and benefits verification with payer integrations',
            metrics: '90% faster verification',
        },
        {
            icon: Activity,
            title: 'Nurse Triage Lines',
            description: 'AI-powered symptom assessment with evidence-based protocols',
            metrics: '35% appropriate ED diversion',
        },
        {
            icon: Pill,
            title: 'Pharmacy & Refills',
            description: 'Automated prescription refills with drug interaction alerts',
            metrics: '95% first-call resolution',
        },
    ];

    const integrations = ['Epic', 'Cerner', 'Allscripts', 'athenahealth', 'eClinicalWorks', 'Meditech'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-gray-50">
            {/* Header */}
            <header className="sticky top-0 z-50 glass border-b border-gray-200">
                <div className="section-container px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-teal-primary transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Home</span>
                        </Link>
                        <div className="flex items-center gap-3">
                            <Link to="/demo" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-primary text-white hover:bg-teal-dark transition-colors text-sm font-medium">
                                <Phone className="w-4 h-4" />
                                See Healthcare Demo
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary font-medium text-sm mb-6">
                            <Heart className="w-4 h-4" />
                            Healthcare Solutions
                        </div>
                        <h1 className="heading-hero text-gray-900 mb-6">
                            Voice AI Built for <span className="text-teal-primary">Healthcare</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                            HIPAA-compliant voice AI handling sensitive patient interactions with the accuracy,
                            empathy, and compliance your healthcare organization demands.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/demo" className="btn-primary">
                                <Calendar className="w-5 h-5" />
                                Schedule Healthcare Demo
                            </Link>
                            <Link to="/calculator" className="btn-secondary">
                                Calculate Your ROI
                            </Link>
                        </div>
                    </motion.div>
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
                        <h2 className="heading-1 text-gray-900 mb-4">Healthcare Use Cases</h2>
                        <p className="body-large max-w-2xl mx-auto">
                            Purpose-built for healthcare workflows with deep EHR integrations
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
                                    className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-teal-primary flex items-center justify-center mb-4">
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
                    <h2 className="heading-2 text-gray-900 mb-8">EHR Integrations</h2>
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
                    <div className="bg-teal-primary rounded-3xl p-12 text-center text-white">
                        <h2 className="heading-2 mb-4">Ready to Transform Patient Experience?</h2>
                        <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
                            Join Cigna, Molina, and leading healthcare organizations using VoiceAI
                        </p>
                        <Link to="/demo" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-primary font-semibold hover:bg-gray-100 transition-colors">
                            Schedule Demo
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HealthcareHub;
