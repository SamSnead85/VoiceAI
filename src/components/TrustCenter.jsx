import { motion } from 'framer-motion';
import { Shield, Lock, Globe, CreditCard, FileCheck, Download, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
    {
        id: 'hipaa',
        name: 'HIPAA',
        fullName: 'Health Insurance Portability and Accountability Act',
        icon: Shield,
        color: 'teal',
        description: 'Full compliance with healthcare data protection requirements including PHI handling, BAAs, and audit logging.',
        documents: ['BAA Template', 'HIPAA Attestation', 'Security Whitepaper'],
        features: [
            'End-to-end encryption for PHI',
            'Comprehensive audit logging',
            'Business Associate Agreements',
            'Role-based access controls',
        ],
    },
    {
        id: 'soc2',
        name: 'SOC 2 Type II',
        fullName: 'Service Organization Control 2',
        icon: Lock,
        color: 'purple',
        description: 'Independently audited security controls covering availability, security, processing integrity, and confidentiality.',
        documents: ['SOC 2 Report', 'Audit Summary', 'Controls Matrix'],
        features: [
            'Annual third-party audits',
            'Continuous monitoring',
            'Incident response procedures',
            'Change management controls',
        ],
    },
    {
        id: 'gdpr',
        name: 'GDPR',
        fullName: 'General Data Protection Regulation',
        icon: Globe,
        color: 'blue',
        description: 'European data protection compliance with data residency options and privacy-by-design architecture.',
        documents: ['DPA Template', 'Privacy Policy', 'Data Flow Diagram'],
        features: [
            'EU data residency options',
            'Right to erasure support',
            'Consent management',
            'Data portability',
        ],
    },
    {
        id: 'pci',
        name: 'PCI-DSS',
        fullName: 'Payment Card Industry Data Security Standard',
        icon: CreditCard,
        color: 'green',
        description: 'Level 1 PCI-DSS compliance for secure payment processing with tokenization and encryption.',
        documents: ['AOC Certificate', 'PCI Attestation', 'Security Controls'],
        features: [
            'Tokenized card data',
            'Encrypted transmissions',
            'Secure key management',
            'Regular vulnerability scans',
        ],
    },
];

const TrustCenter = () => {
    const colorClasses = {
        teal: 'bg-teal-primary/10 text-teal-primary border-teal-primary/20',
        purple: 'bg-purple-accent/10 text-purple-accent border-purple-accent/20',
        blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
        green: 'bg-green-500/10 text-green-500 border-green-500/20',
    };

    const iconColorClasses = {
        teal: 'bg-teal-primary text-white',
        purple: 'bg-purple-accent text-white',
        blue: 'bg-blue-500 text-white',
        green: 'bg-green-500 text-white',
    };

    return (
        <section className="section-padding bg-white">
            <div className="section-container px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="badge mb-6 mx-auto">Trust Center</div>
                    <h2 className="heading-1 text-gray-900 mb-4">
                        Security & Compliance Portal
                    </h2>
                    <p className="body-large max-w-2xl mx-auto">
                        Access our compliance documentation, security certifications, and request BAAs or security questionnaires.
                    </p>
                </motion.div>

                {/* Certification Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {certifications.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconColorClasses[cert.color]}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-gray-900">{cert.name}</h3>
                                        <p className="text-sm text-gray-500">{cert.fullName}</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {cert.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle className={`w-4 h-4 ${cert.color === 'teal' ? 'text-teal-primary' : cert.color === 'purple' ? 'text-purple-accent' : cert.color === 'blue' ? 'text-blue-500' : 'text-green-500'}`} />
                                            <span className="line-clamp-1">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Documents */}
                                <div className="flex flex-wrap gap-2">
                                    {cert.documents.map((doc, i) => (
                                        <button
                                            key={i}
                                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${colorClasses[cert.color]} hover:shadow-sm transition-shadow`}
                                        >
                                            <FileCheck className="w-3 h-3" />
                                            {doc}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Request Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-3xl p-8 lg:p-12"
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="heading-2 text-white mb-4">
                                Need More Documentation?
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Request BAAs, security questionnaire responses, or schedule a security review with our compliance team.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <button className="btn-primary">
                                    <FileCheck className="w-5 h-5" />
                                    Request BAA
                                </button>
                                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors font-medium">
                                    <Download className="w-5 h-5" />
                                    Security Questionnaire
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-display font-bold text-white mb-1">24hr</div>
                                <div className="text-sm text-gray-400">BAA Turnaround</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-display font-bold text-white mb-1">100%</div>
                                <div className="text-sm text-gray-400">Audit Pass Rate</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-display font-bold text-white mb-1">500+</div>
                                <div className="text-sm text-gray-400">Enterprise Customers</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-display font-bold text-white mb-1">0</div>
                                <div className="text-sm text-gray-400">Security Incidents</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustCenter;
