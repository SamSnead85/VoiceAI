import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, Heart, Coffee, Laptop, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const openings = [
    {
        title: 'Senior Machine Learning Engineer',
        department: 'Engineering',
        location: 'San Francisco, CA / Remote',
        type: 'Full-time',
        salary: '$180K - $250K',
    },
    {
        title: 'Enterprise Account Executive',
        department: 'Sales',
        location: 'New York, NY / Remote',
        type: 'Full-time',
        salary: '$120K - $180K + Commission',
    },
    {
        title: 'Product Designer',
        department: 'Design',
        location: 'San Francisco, CA',
        type: 'Full-time',
        salary: '$140K - $180K',
    },
    {
        title: 'NLP Research Scientist',
        department: 'Research',
        location: 'Remote',
        type: 'Full-time',
        salary: '$200K - $280K',
    },
    {
        title: 'Customer Success Manager',
        department: 'Customer Success',
        location: 'Chicago, IL / Remote',
        type: 'Full-time',
        salary: '$90K - $130K',
    },
];

const benefits = [
    { icon: Heart, title: 'Health & Wellness', description: 'Premium medical, dental, and vision coverage for you and dependents' },
    { icon: DollarSign, title: 'Competitive Equity', description: 'Meaningful ownership stake with regular refresh grants' },
    { icon: Laptop, title: 'Remote Friendly', description: 'Work from anywhere with stipend for home office setup' },
    { icon: Coffee, title: 'Unlimited PTO', description: 'Take the time you need to recharge and do your best work' },
    { icon: Globe, title: 'Learning Budget', description: '$5,000 annual budget for conferences, courses, and books' },
    { icon: Briefcase, title: 'Parental Leave', description: '16 weeks paid leave for all new parents' },
];

const CareersPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
                <div className="section-container px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                            We're Hiring
                        </span>
                        <h1 className="heading-1 text-white mb-4">
                            Build the Future of Voice AI
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto">
                            Join a world-class team transforming how enterprises communicate with their customers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 bg-white">
                <div className="section-container px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="heading-2 text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We're on a mission to make every customer interaction feel human, helpful, and effortless.
                            Our voice AI handles millions of calls daily for healthcare and financial services companies,
                            giving their teams more time to focus on what matters most.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Why VoiceAI</h2>
                        <p className="text-gray-600">
                            We take care of our team so they can take care of our customers
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                                    <benefit.icon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="font-display font-bold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-white">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Open Positions</h2>
                        <p className="text-gray-600">
                            Find your next opportunity
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {openings.map((job, index) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" />
                                                {job.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-gray-900">
                                            {job.salary}
                                        </span>
                                        <button className="px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 transition-colors">
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="section-container px-4 lg:px-8 text-center">
                    <h2 className="heading-2 text-white mb-4">
                        Don't See Your Role?
                    </h2>
                    <p className="body-large text-white/80 max-w-2xl mx-auto mb-8">
                        We're always looking for talented people. Send us your resume and we'll reach out when we have a match.
                    </p>
                    <a href="/contact" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
                        Get in Touch
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;
