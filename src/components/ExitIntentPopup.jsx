import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight, Calendar } from 'lucide-react';

const ExitIntentPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Check if already shown this session
        if (sessionStorage.getItem('exitPopupShown')) {
            setHasShown(true);
            return;
        }

        const handleMouseLeave = (e) => {
            // Only trigger when mouse leaves through the top of the page
            if (e.clientY <= 0 && !hasShown) {
                setShowPopup(true);
                setHasShown(true);
                sessionStorage.setItem('exitPopupShown', 'true');
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasShown]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert(`Thank you! We'll send your free guide to ${email}`);
        setShowPopup(false);
    };

    return (
        <AnimatePresence>
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={() => setShowPopup(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
                    >
                        {/* Header Image/Gradient */}
                        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-8 text-center relative">
                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-4 right-4 text-white/80 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                                <Gift className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="font-display font-bold text-2xl text-white mb-2">
                                Wait! Don't Miss This
                            </h2>
                            <p className="text-white/80">
                                Get our free enterprise voice AI implementation guide
                            </p>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <h3 className="font-display font-bold text-lg text-gray-900 mb-4">
                                What You'll Learn:
                            </h3>
                            <ul className="space-y-3 mb-6">
                                {[
                                    'How to calculate ROI before implementation',
                                    'Common pitfalls and how to avoid them',
                                    'Best practices from Fortune 500 deployments',
                                    'Integration strategies for legacy systems',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <ArrowRight className="w-3 h-3 text-green-600" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter your work email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow"
                                >
                                    Get Free Guide
                                </button>
                            </form>

                            {/* Alternative CTA */}
                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-gray-500 text-sm mb-3">Or prefer to talk to someone?</p>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Schedule a free consultation
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentPopup;
