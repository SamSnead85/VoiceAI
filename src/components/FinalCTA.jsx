import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 gradient-hero-animated" />

            {/* Abstract Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-10 left-[10%] w-[200px] h-[200px] opacity-20"
                    animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="80" fill="white" />
                    </svg>
                </motion.div>
                <motion.div
                    className="absolute bottom-10 right-[15%] w-[150px] h-[150px] opacity-20"
                    animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <svg viewBox="0 0 150 150" className="w-full h-full">
                        <rect x="25" y="25" width="100" height="100" rx="20" fill="white" transform="rotate(15 75 75)" />
                    </svg>
                </motion.div>
            </div>

            <div className="relative section-container px-4 lg:px-8 py-24 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* Sparkle Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>

                    {/* Headline */}
                    <h2 className="heading-1 text-white mb-6">
                        Ready to Transform Your Call Center?
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Join Cigna, Molina, and industry leaders using voice AI to deliver better service at lower cost
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-xl">
                            Schedule a Demo
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="btn-ghost border-white/30 text-white hover:bg-white/10 flex items-center gap-2 px-8 py-4 text-lg">
                            <Download className="w-5 h-5" />
                            Download Case Studies
                        </button>
                    </div>

                    {/* Small Text */}
                    <p className="text-sm text-white/60">
                        Free 30-day trial • White-glove implementation included
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
