import { motion } from 'framer-motion';
import { Handshake, Award, Globe, TrendingUp, Users, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const partnerTypes = [
    {
        name: 'Technology Partners',
        description: 'Integrate VoiceAI with your platform to offer voice AI capabilities to your customers.',
        icon: Zap,
        benefits: ['Co-marketing opportunities', 'Technical integration support', 'Revenue sharing program'],
    },
    {
        name: 'Solution Partners',
        description: 'Implement VoiceAI solutions for enterprise clients and grow your services business.',
        icon: Users,
        benefits: ['Partner certification', 'Lead referrals', 'Implementation support'],
    },
    {
        name: 'Referral Partners',
        description: 'Earn commissions by referring qualified enterprise leads to VoiceAI.',
        icon: TrendingUp,
        benefits: ['20% commission on first year', 'No minimum commitment', 'Portal access'],
    },
];

const currentPartners = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Salesforce', category: 'CRM' },
    { name: 'Epic Systems', category: 'Healthcare' },
    { name: 'Twilio', category: 'Communications' },
    { name: 'Zendesk', category: 'Support' },
    { name: 'ServiceNow', category: 'Enterprise' },
];

const PartnersPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
                <div className="section-container px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                            <Handshake className="w-8 h-8 text-green-400" />
                        </div>
                        <h1 className="heading-1 text-white mb-4">
                            Partner with VoiceAI
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto">
                            Join our partner ecosystem and help enterprises transform their customer experience with voice AI.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partner Types */}
            <section className="py-20">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Partnership Programs</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose the partnership model that best fits your business
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {partnerTypes.map((type, index) => (
                            <motion.div
                                key={type.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                                    <type.icon className="w-7 h-7 text-green-600" />
                                </div>
                                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                                    {type.name}
                                </h3>
                                <p className="text-gray-600 mb-6">{type.description}</p>
                                <ul className="space-y-2">
                                    {type.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Partners */}
            <section className="py-20 bg-white">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Our Partner Ecosystem</h2>
                        <p className="text-gray-600">
                            Join leading technology companies in our partner network
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {currentPartners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors"
                            >
                                <div className="font-display font-bold text-lg text-gray-900 mb-1">
                                    {partner.name}
                                </div>
                                <span className="text-xs text-gray-500">{partner.category}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
                <div className="section-container px-4 lg:px-8 text-center">
                    <Award className="w-12 h-12 text-white/80 mx-auto mb-6" />
                    <h2 className="heading-2 text-white mb-4">
                        Ready to Partner?
                    </h2>
                    <p className="body-large text-white/80 max-w-2xl mx-auto mb-8">
                        Fill out our partner application and our team will be in touch within 48 hours.
                    </p>
                    <a href="/contact" className="btn-primary bg-white text-green-600 hover:bg-gray-100">
                        Apply to Partner
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PartnersPage;
