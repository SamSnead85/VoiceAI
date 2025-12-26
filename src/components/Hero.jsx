import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Abstract 3D Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

                {/* Floating abstract shapes */}
                <motion.div
                    className="absolute top-20 right-[10%] w-[500px] h-[500px]"
                    animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg viewBox="0 0 500 500" className="w-full h-full">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0D7C7C" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="#FF6B4A" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        <ellipse cx="250" cy="250" rx="200" ry="180" fill="url(#grad1)" />
                    </svg>
                </motion.div>

                <motion.div
                    className="absolute top-40 right-[25%] w-[300px] h-[300px]"
                    animate={{ y: [10, -10, 10], rotate: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <svg viewBox="0 0 300 300" className="w-full h-full">
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF6B4A" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M150,20 C220,20 280,80 280,150 C280,220 220,280 150,280 C80,280 20,220 20,150 C20,80 80,20 150,20"
                            fill="url(#grad2)"
                            transform="rotate(45 150 150)"
                        />
                    </svg>
                </motion.div>

                <motion.div
                    className="absolute bottom-20 right-[5%] w-[200px] h-[200px]"
                    animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <defs>
                            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#0D7C7C" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        <circle cx="100" cy="100" r="80" fill="url(#grad3)" />
                    </svg>
                </motion.div>

                {/* Additional decorative shapes */}
                <motion.div
                    className="absolute top-[60%] left-[5%] w-[150px] h-[150px]"
                    animate={{ y: [5, -5, 5], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg viewBox="0 0 150 150" className="w-full h-full">
                        <defs>
                            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                        <rect x="25" y="25" width="100" height="100" rx="20" fill="url(#grad4)" transform="rotate(15 75 75)" />
                    </svg>
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 section-container px-4 lg:px-8 pt-32 pb-20">
                <div className="max-w-4xl">
                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="badge">
                            <Shield className="w-4 h-4" />
                            <span>Trusted by Cigna, Molina & Fortune 500 Leaders</span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="heading-hero text-gray-900 mb-6"
                    >
                        Voice AI That{' '}
                        <span className="gradient-text">Sounds Human</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 font-medium mb-4 max-w-2xl"
                    >
                        Enterprise-grade conversational AI for healthcare and financial services call centers
                    </motion.p>

                    {/* Value Proposition */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="body-large mb-10 max-w-xl"
                    >
                        Handle millions of calls with 99.9% accuracy, HIPAA compliance, and 60% cost reduction
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4 mb-12"
                    >
                        <button className="btn-primary">
                            See It In Action
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="btn-secondary">
                            Talk to Sales
                        </button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap gap-6 text-sm text-gray-600"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-teal-primary" />
                            <span>HIPAA Compliant</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-teal-primary" />
                            <span>SOC 2 Type II</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-teal-primary" />
                            <span>50M+ Calls Handled</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
