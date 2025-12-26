import { motion } from 'framer-motion';
import { Play, Clock, TrendingUp, Users, Building2, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
    {
        id: 1,
        client: 'Cigna Healthcare',
        industry: 'healthcare',
        logo: 'C',
        title: 'Transforming Member Experience with AI',
        description: 'How Cigna reduced call wait times by 85% while improving member satisfaction scores.',
        thumbnail: null,
        duration: '4:32',
        metrics: [
            { label: 'Cost Reduction', value: '62%' },
            { label: 'Wait Time Reduction', value: '85%' },
            { label: 'CSAT Improvement', value: '+1.2pts' },
        ],
        quote: 'VoiceAI has transformed how we serve our members.',
        quotee: 'VP of Digital Experience',
    },
    {
        id: 2,
        client: 'Molina Healthcare',
        industry: 'healthcare',
        logo: 'M',
        title: 'Scaling Support for 5M+ Members',
        description: 'Molina achieved 24/7 coverage and 40% cost savings serving their growing member base.',
        thumbnail: null,
        duration: '5:15',
        metrics: [
            { label: 'Members Served', value: '5M+' },
            { label: 'Annual Savings', value: '$4.2M' },
            { label: 'FCR Rate', value: '94%' },
        ],
        quote: 'Our members can\'t tell the difference between AI and human agents.',
        quotee: 'SVP of Member Services',
    },
    {
        id: 3,
        client: 'Fortune 500 Bank',
        industry: 'financial',
        logo: 'F',
        title: 'Secure Banking with Voice AI',
        description: 'A leading bank achieved PCI-DSS compliance while automating 70% of routine inquiries.',
        thumbnail: null,
        duration: '3:48',
        metrics: [
            { label: 'Automation Rate', value: '70%' },
            { label: 'Fraud Detection', value: '99.9%' },
            { label: 'Compliance Score', value: '100%' },
        ],
        quote: 'Security was our top concern, and VoiceAI exceeded expectations.',
        quotee: 'Chief Security Officer',
    },
];

const CaseStudies = () => {
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
                    <div className="badge mb-6 mx-auto">Case Studies</div>
                    <h2 className="heading-1 text-gray-900 mb-4">
                        Customer Success Stories
                    </h2>
                    <p className="body-large max-w-2xl mx-auto">
                        See how leading enterprises are transforming their call centers with VoiceAI
                    </p>
                </motion.div>

                {/* Case Study Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                        >
                            {/* Video Thumbnail */}
                            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white ${study.industry === 'healthcare' ? 'bg-teal-primary' : 'bg-purple-accent'
                                        }`}>
                                        {study.logo}
                                    </div>
                                </div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl"
                                    >
                                        <Play className="w-6 h-6 text-gray-900 ml-1" />
                                    </motion.button>
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {study.duration}
                                </div>

                                {/* Industry Badge */}
                                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-medium ${study.industry === 'healthcare' ? 'bg-teal-primary' : 'bg-purple-accent'
                                    }`}>
                                    {study.industry === 'healthcare' ? (
                                        <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> Healthcare</span>
                                    ) : (
                                        <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> Financial</span>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                                    {study.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {study.description}
                                </p>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {study.metrics.map((metric, i) => (
                                        <div key={i} className="text-center p-2 rounded-lg bg-gray-50">
                                            <div className={`font-display font-bold text-lg ${study.industry === 'healthcare' ? 'text-teal-primary' : 'text-purple-accent'
                                                }`}>
                                                {metric.value}
                                            </div>
                                            <div className="text-xs text-gray-500">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <div className="border-l-2 border-gray-200 pl-3 text-sm italic text-gray-600">
                                    "{study.quote}"
                                    <div className="text-xs text-gray-400 mt-1 not-italic">— {study.quotee}, {study.client}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <button className="btn-secondary">
                        View All Case Studies
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudies;
