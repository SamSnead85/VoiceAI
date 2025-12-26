import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoWidget from '../components/demo/DemoWidget';

const DemoPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Header */}
            <header className="sticky top-0 z-50 glass border-b border-gray-200">
                <div className="section-container px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-gray-600 hover:text-teal-primary transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Home</span>
                        </Link>

                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-teal-primary transition-colors text-sm font-medium">
                                <Calendar className="w-4 h-4" />
                                Schedule Live Demo
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-primary text-white hover:bg-teal-dark transition-colors text-sm font-medium">
                                <Phone className="w-4 h-4" />
                                Talk to Sales
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="section-container px-4 lg:px-8 py-12">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="badge mb-4 mx-auto">Interactive Demo</div>
                    <h1 className="heading-1 text-gray-900 mb-4">
                        Experience Voice AI in Action
                    </h1>
                    <p className="body-large max-w-2xl mx-auto">
                        Watch real-time demos of our AI handling healthcare and financial service calls.
                        See the accuracy, speed, and natural conversation flow for yourself.
                    </p>
                </motion.div>

                {/* Demo Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <DemoWidget />
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center bg-gray-900 rounded-3xl p-12"
                >
                    <h2 className="heading-2 text-white mb-4">
                        Ready to See Your Custom Demo?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                        Schedule a personalized demo with your actual call flows and use cases.
                        See how VoiceAI handles your specific scenarios.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="btn-primary">
                            <Calendar className="w-5 h-5" />
                            Book Personalized Demo
                        </button>
                        <Link
                            to="/calculator"
                            className="btn-secondary bg-white hover:bg-gray-100 border-0"
                        >
                            <MessageSquare className="w-5 h-5" />
                            Calculate Your ROI
                        </Link>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default DemoPage;
