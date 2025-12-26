import { motion } from 'framer-motion';
import { Zap, BookOpen, Video, FileText, Mail, Calendar, MessageCircle, Gift, ArrowRight } from 'lucide-react';

const resources = [
    {
        type: 'Guide',
        icon: BookOpen,
        title: 'Enterprise Voice AI Buyer\'s Guide',
        description: 'Complete evaluation framework for selecting voice AI solutions',
        cta: 'Download Free',
        color: 'teal',
    },
    {
        type: 'Webinar',
        icon: Video,
        title: 'AI in Healthcare Call Centers: 2025 Trends',
        description: 'Live webinar with industry experts discussing emerging AI trends',
        cta: 'Register Now',
        color: 'purple',
    },
    {
        type: 'Whitepaper',
        icon: FileText,
        title: 'ROI of Voice AI: A CFO\'s Perspective',
        description: 'Financial analysis and cost-benefit framework for voice AI',
        cta: 'Download Free',
        color: 'coral',
    },
];

const LeadCapture = () => {
    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
            <div className="section-container px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Side - Resources */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="badge mb-6">Resources</div>
                        <h2 className="heading-2 text-gray-900 mb-4">
                            Learn from Industry Leaders
                        </h2>
                        <p className="body-text mb-8">
                            Access our library of guides, webinars, and whitepapers to help you make informed decisions.
                        </p>

                        <div className="space-y-4">
                            {resources.map((resource, index) => {
                                const Icon = resource.icon;
                                const colorClasses = {
                                    teal: 'bg-teal-primary/10 text-teal-primary',
                                    purple: 'bg-purple-accent/10 text-purple-accent',
                                    coral: 'bg-coral-accent/10 text-coral-accent',
                                };

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-shadow group cursor-pointer"
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClasses[resource.color]}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-medium text-gray-500 uppercase mb-1">{resource.type}</div>
                                            <h3 className="font-display font-semibold text-gray-900 mb-1 group-hover:text-teal-primary transition-colors">
                                                {resource.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">{resource.description}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm font-medium text-teal-primary group-hover:underline">{resource.cta}</span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Side - Newsletter Signup */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-teal-primary to-purple-accent rounded-3xl p-8 lg:p-10 text-white">
                            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <Gift className="w-7 h-7" />
                            </div>

                            <h3 className="font-display font-bold text-2xl mb-3">
                                Get Your Free Assessment
                            </h3>
                            <p className="text-white/80 mb-6">
                                Sign up for a free call center assessment and receive our exclusive Voice AI Implementation Playbook.
                            </p>

                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Work Email"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                                    />
                                </div>
                                <div>
                                    <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50">
                                        <option value="" className="text-gray-900">Monthly Call Volume</option>
                                        <option value="10000" className="text-gray-900">Less than 10,000</option>
                                        <option value="50000" className="text-gray-900">10,000 - 50,000</option>
                                        <option value="100000" className="text-gray-900">50,000 - 100,000</option>
                                        <option value="500000" className="text-gray-900">100,000 - 500,000</option>
                                        <option value="1000000" className="text-gray-900">500,000+</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                                >
                                    Get Free Assessment
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>

                            <p className="text-xs text-white/60 mt-4 text-center">
                                By signing up, you agree to our Privacy Policy and Terms of Service.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeadCapture;
