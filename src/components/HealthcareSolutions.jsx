import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Activity, Pill } from 'lucide-react';

const HealthcareSolutions = () => {
    const useCases = [
        {
            icon: Clock,
            title: 'Appointment Scheduling',
            description: '24/7 automated scheduling with calendar integration, reducing no-shows by 40%',
        },
        {
            icon: ShieldCheck,
            title: 'Insurance Verification',
            description: 'Instant eligibility checks and benefits verification with real-time data lookup',
        },
        {
            icon: Activity,
            title: 'Patient Triage',
            description: 'AI-powered symptom assessment prioritizing urgent cases for faster care',
        },
        {
            icon: Pill,
            title: 'Prescription Refills',
            description: 'Automated refill requests with pharmacy integration and drug interaction checks',
        },
    ];

    return (
        <section id="solutions" className="section-padding bg-white">
            <div className="section-container px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="badge mb-6 mx-auto">Healthcare Solutions</div>
                    <h2 className="heading-1 text-gray-900 mb-4">
                        Built for Healthcare Excellence
                    </h2>
                    <p className="body-large max-w-2xl mx-auto">
                        HIPAA-compliant voice AI handling sensitive patient interactions with precision and empathy
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
                                className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 card-hover"
                            >
                                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6">
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

export default HealthcareSolutions;
