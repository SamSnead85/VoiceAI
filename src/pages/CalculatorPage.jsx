import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, FileText, Mail, Building2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ROICalculator from '../components/calculator/ROICalculator';
import SavingsTimeline from '../components/calculator/SavingsTimeline';
import { calculatorDefaults, calculateROI } from '../data/calculatorData';

const CalculatorPage = () => {
    const [industry, setIndustry] = useState('healthcare');
    const [results, setResults] = useState(null);

    useEffect(() => {
        const calculated = calculateROI(calculatorDefaults[industry]);
        setResults(calculated);
    }, [industry]);

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
                                <Download className="w-4 h-4" />
                                Download Report
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-primary text-white hover:bg-teal-dark transition-colors text-sm font-medium">
                                <Mail className="w-4 h-4" />
                                Email Results
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
                    <div className="badge mb-4 mx-auto">ROI Calculator</div>
                    <h1 className="heading-1 text-gray-900 mb-4">
                        Calculate Your Cost Savings
                    </h1>
                    <p className="body-large max-w-2xl mx-auto">
                        See how much you could save with VoiceAI. Adjust the parameters to match
                        your call center operations and get instant ROI projections.
                    </p>
                </motion.div>

                {/* Industry Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex rounded-xl bg-gray-100 p-1">
                        <button
                            onClick={() => setIndustry('healthcare')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${industry === 'healthcare'
                                    ? 'bg-white shadow-sm text-teal-primary'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            <Heart className="w-5 h-5" />
                            Healthcare
                        </button>
                        <button
                            onClick={() => setIndustry('financial')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${industry === 'financial'
                                    ? 'bg-white shadow-sm text-purple-accent'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            <Building2 className="w-5 h-5" />
                            Financial Services
                        </button>
                    </div>
                </motion.div>

                {/* Calculator and Timeline */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <ROICalculator industry={industry} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {results && (
                            <SavingsTimeline annualSavings={results.savings.annual} />
                        )}
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-r from-teal-primary via-coral-accent to-purple-accent rounded-3xl p-[2px]"
                >
                    <div className="bg-white rounded-3xl p-12 text-center">
                        <h2 className="heading-2 text-gray-900 mb-4">
                            Ready to Realize These Savings?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                            Get a customized business case tailored to your specific operations and goals.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="btn-primary">
                                <FileText className="w-5 h-5" />
                                Generate Full Business Case
                            </button>
                            <Link to="/demo" className="btn-secondary">
                                See Live Demo
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default CalculatorPage;
