import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Building2, Mail, Phone, MessageSquare, Calendar, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
        employees: '',
        callVolume: '',
        industry: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
        alert('Thank you! Our team will contact you within 24 hours.');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
                <div className="section-container px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                            Let's Talk
                        </span>
                        <h1 className="heading-1 text-white mb-4">
                            Contact Our Enterprise Team
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto">
                            Get a personalized demo and custom pricing for your organization
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="section-container px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                                Request a Demo
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Work Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Company *
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            required
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Job Title
                                        </label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Size
                                        </label>
                                        <select
                                            name="employees"
                                            value={formData.employees}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        >
                                            <option value="">Select...</option>
                                            <option value="1-50">1-50 employees</option>
                                            <option value="51-200">51-200 employees</option>
                                            <option value="201-1000">201-1,000 employees</option>
                                            <option value="1001-5000">1,001-5,000 employees</option>
                                            <option value="5000+">5,000+ employees</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Monthly Call Volume
                                        </label>
                                        <select
                                            name="callVolume"
                                            value={formData.callVolume}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        >
                                            <option value="">Select...</option>
                                            <option value="<10k">Less than 10,000</option>
                                            <option value="10k-50k">10,000 - 50,000</option>
                                            <option value="50k-200k">50,000 - 200,000</option>
                                            <option value="200k-1m">200,000 - 1,000,000</option>
                                            <option value="1m+">1,000,000+</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Industry
                                    </label>
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    >
                                        <option value="">Select...</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="financial">Financial Services</option>
                                        <option value="insurance">Insurance</option>
                                        <option value="telecom">Telecommunications</option>
                                        <option value="retail">Retail</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        How can we help?
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                        placeholder="Tell us about your use case and goals..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Submit Request
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Our enterprise team is ready to help you transform your customer experience with voice AI.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Email Us</h3>
                                        <p className="text-gray-600">enterprise@voiceai.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Call Us</h3>
                                        <p className="text-gray-600">1-800-VOICE-AI (864-2324)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-coral-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Schedule a Call</h3>
                                        <p className="text-gray-600">Book a 30-minute consultation</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-cyan-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Headquarters</h3>
                                        <p className="text-gray-600">
                                            100 Tech Boulevard, Suite 500<br />
                                            San Francisco, CA 94105
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="bg-gray-100 rounded-2xl p-6 mt-8">
                                <h3 className="font-semibold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600">SOC 2 Type II</span>
                                    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600">HIPAA Compliant</span>
                                    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600">GDPR Ready</span>
                                    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600">PCI DSS</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
