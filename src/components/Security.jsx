import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock, Globe, CreditCard } from 'lucide-react';

const Security = () => {
    const certifications = [
        {
            icon: Shield,
            title: 'HIPAA Compliant',
            description: 'End-to-end encryption for all PHI with comprehensive BAAs and audit logging',
        },
        {
            icon: Lock,
            title: 'SOC 2 Type II',
            description: 'Independently verified security controls and data protection practices',
        },
        {
            icon: Globe,
            title: 'GDPR Ready',
            description: 'Data residency options, right to erasure, and consent management',
        },
        {
            icon: CreditCard,
            title: 'PCI-DSS',
            description: 'Secure payment processing with tokenization and encryption',
        },
    ];

    return (
        <section id="security" className="section-padding bg-white">
            <div className="section-container px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="badge mb-6">Security First</div>
                        <h2 className="heading-1 text-gray-900 mb-4">
                            Security & Compliance Built In
                        </h2>
                        <p className="body-large mb-10">
                            Not bolted on. Enterprise-grade security and compliance from the ground up.
                        </p>

                        {/* Certifications List */}
                        <div className="space-y-6">
                            {certifications.map((cert, index) => {
                                const Icon = cert.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-teal-primary" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <CheckCircle className="w-5 h-5 text-teal-primary" />
                                                <span className="font-display font-semibold text-gray-900">
                                                    {cert.title}
                                                </span>
                                            </div>
                                            <p className="text-gray-600">{cert.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Side - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square max-w-lg mx-auto relative">
                            {/* Central Shield */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-40 h-40 rounded-3xl gradient-hero flex items-center justify-center shadow-2xl"
                                >
                                    <Shield className="w-20 h-20 text-white" />
                                </motion.div>
                            </div>

                            {/* Orbiting Elements */}
                            <svg className="w-full h-full" viewBox="0 0 400 400">
                                {/* Orbit Circles */}
                                <circle cx="200" cy="200" r="140" fill="none" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="8 8" />
                                <circle cx="200" cy="200" r="180" fill="none" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="8 8" />

                                {/* Connection Lines */}
                                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                                    const x = 200 + 140 * Math.cos((angle * Math.PI) / 180);
                                    const y = 200 + 140 * Math.sin((angle * Math.PI) / 180);
                                    return (
                                        <line
                                            key={i}
                                            x1="200"
                                            y1="200"
                                            x2={x}
                                            y2={y}
                                            stroke="url(#lineGrad)"
                                            strokeWidth="2"
                                            opacity="0.3"
                                        />
                                    );
                                })}

                                {/* Gradient Definition */}
                                <defs>
                                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0D7C7C" />
                                        <stop offset="100%" stopColor="#8B5CF6" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating Badges */}
                            {[
                                { label: 'HIPAA', angle: 0 },
                                { label: 'SOC 2', angle: 90 },
                                { label: 'GDPR', angle: 180 },
                                { label: 'PCI', angle: 270 },
                            ].map((badge, index) => {
                                const radius = 140;
                                const x = 50 + (radius / 200) * 50 * Math.cos((badge.angle * Math.PI) / 180);
                                const y = 50 + (radius / 200) * 50 * Math.sin((badge.angle * Math.PI) / 180);
                                return (
                                    <motion.div
                                        key={index}
                                        className="absolute px-4 py-2 rounded-lg bg-white shadow-lg border border-gray-200 font-semibold text-sm text-gray-900"
                                        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                    >
                                        {badge.label}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Security;
