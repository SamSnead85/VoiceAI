import { motion } from 'framer-motion';
import {
    Shield, Lock, Server, Eye, Key, AlertTriangle,
    CheckCircle, FileText, Users, Globe, Database, Cloud
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const securityFeatures = [
    {
        icon: Lock,
        title: 'Encryption at Rest',
        description: 'All data is encrypted using AES-256 encryption standards',
    },
    {
        icon: Shield,
        title: 'Encryption in Transit',
        description: 'TLS 1.3 encryption for all data transmission',
    },
    {
        icon: Key,
        title: 'Access Controls',
        description: 'Role-based access control with MFA support',
    },
    {
        icon: Server,
        title: 'SOC 2 Type II',
        description: 'Certified data centers with 24/7 monitoring',
    },
    {
        icon: Eye,
        title: 'Audit Logging',
        description: 'Comprehensive audit trails for all actions',
    },
    {
        icon: AlertTriangle,
        title: 'Incident Response',
        description: '24-hour incident response and notification',
    },
];

const certifications = [
    { name: 'SOC 2 Type II', description: 'Security, availability, and confidentiality controls' },
    { name: 'HIPAA', description: 'Healthcare data protection compliance' },
    { name: 'GDPR', description: 'EU data protection regulation compliance' },
    { name: 'PCI DSS', description: 'Payment card industry data security' },
    { name: 'ISO 27001', description: 'Information security management' },
    { name: 'CCPA', description: 'California consumer privacy compliance' },
];

const SecurityPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
                <div className="section-container px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-blue-400" />
                        </div>
                        <h1 className="heading-1 text-white mb-4">
                            Enterprise-Grade Security
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto">
                            Your data security is our top priority. We implement industry-leading security measures
                            to protect your voice AI operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Security Features */}
            <section className="py-20">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Security Features</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive security controls to protect your data at every layer
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {securityFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 bg-gray-50">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Compliance & Certifications</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We maintain the highest standards of compliance across industries
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 flex items-start gap-4"
                            >
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                                    <p className="text-sm text-gray-600">{cert.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure */}
            <section className="py-20">
                <div className="section-container px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="heading-2 text-gray-900 mb-6">Secure Infrastructure</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Cloud className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Cloud Security</h3>
                                        <p className="text-gray-600">
                                            Hosted on SOC 2 certified cloud infrastructure with redundant systems
                                            and automatic failover across multiple regions.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Database className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Data Isolation</h3>
                                        <p className="text-gray-600">
                                            Customer data is logically isolated with dedicated encryption keys
                                            and strict access controls.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Globe className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Data Residency</h3>
                                        <p className="text-gray-600">
                                            Choose where your data is stored with regional deployment options
                                            for US, EU, and APAC.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Users className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Vendor Management</h3>
                                        <p className="text-gray-600">
                                            All subprocessors undergo rigorous security assessment and are
                                            listed in our transparency report.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-8">
                            <h3 className="font-display font-bold text-xl text-white mb-6">
                                Security Practices
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Regular penetration testing by third parties',
                                    'Continuous vulnerability scanning',
                                    'Security awareness training for all employees',
                                    'Background checks for all personnel',
                                    'Secure development lifecycle (SDL)',
                                    'Bug bounty program for security researchers',
                                    'Disaster recovery and business continuity plans',
                                    '24/7 security operations center',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="section-container px-4 lg:px-8 text-center">
                    <FileText className="w-12 h-12 text-white/80 mx-auto mb-6" />
                    <h2 className="heading-2 text-white mb-4">
                        Request Security Documentation
                    </h2>
                    <p className="body-large text-white/80 max-w-2xl mx-auto mb-8">
                        Need our SOC 2 report, penetration test results, or security questionnaire?
                        Our team is ready to help with your security review.
                    </p>
                    <a href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                        Request Documentation
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SecurityPage;
