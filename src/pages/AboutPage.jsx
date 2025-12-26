import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Rocket, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const values = [
    {
        icon: Target,
        title: 'Customer Obsession',
        description: 'Every decision starts with the customer. Their success is our success.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation First',
        description: 'We push the boundaries of what\'s possible with voice AI technology.',
    },
    {
        icon: Users,
        title: 'Team Over Ego',
        description: 'We win together. Collaboration and trust drive our best work.',
    },
    {
        icon: Award,
        title: 'Excellence Always',
        description: 'Good enough never is. We hold ourselves to the highest standards.',
    },
];

const timeline = [
    { year: '2019', event: 'VoiceAI founded in San Francisco' },
    { year: '2020', event: 'First enterprise customer deployment' },
    { year: '2021', event: '$25M Series A funding' },
    { year: '2022', event: 'HIPAA certification achieved' },
    { year: '2023', event: '$100M Series B, 100+ enterprise customers' },
    { year: '2024', event: 'Processing 50M+ calls annually' },
];

const leadership = [
    { name: 'Sarah Chen', role: 'CEO & Co-Founder', image: '👩‍💼' },
    { name: 'Michael Torres', role: 'CTO & Co-Founder', image: '👨‍💻' },
    { name: 'Jennifer Wu', role: 'VP of Engineering', image: '👩‍🔬' },
    { name: 'David Kim', role: 'VP of Sales', image: '👨‍💼' },
];

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
                <div className="section-container px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                            About VoiceAI
                        </span>
                        <h1 className="heading-1 text-white mb-6">
                            Making Every Conversation <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                                Feel Human
                            </span>
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto">
                            We're building the most advanced voice AI platform to transform how enterprises
                            connect with their customers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20">
                <div className="section-container px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="heading-2 text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Every day, millions of people spend hours on hold, navigating frustrating phone trees,
                                and repeating themselves to customer service representatives. We believe it doesn't
                                have to be this way.
                            </p>
                            <p className="text-lg text-gray-600">
                                VoiceAI combines breakthrough AI technology with deep industry expertise to create
                                voice agents that understand context, show empathy, and solve problems—just like
                                your best human agents, but available 24/7 at scale.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
                            <Rocket className="w-12 h-12 mb-6" />
                            <h3 className="font-display font-bold text-2xl mb-4">Our Vision</h3>
                            <p className="text-white/90">
                                A world where every customer interaction is effortless, personal, and leaves
                                people with more time for what matters most.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Our Values</h2>
                        <p className="text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 text-center"
                            >
                                <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-7 h-7 text-teal-600" />
                                </div>
                                <h3 className="font-display font-bold text-gray-900 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Our Journey</h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 mb-8 last:mb-0"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
                                        {item.year.slice(2)}
                                    </div>
                                    {index !== timeline.length - 1 && (
                                        <div className="w-0.5 h-full bg-teal-200 mt-2" />
                                    )}
                                </div>
                                <div className="pt-3">
                                    <span className="text-sm text-gray-500">{item.year}</span>
                                    <p className="font-medium text-gray-900">{item.event}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-gray-50">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Leadership Team</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {leadership.map((person, index) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 text-4xl">
                                    {person.image}
                                </div>
                                <h3 className="font-display font-bold text-gray-900">{person.name}</h3>
                                <p className="text-sm text-gray-600">{person.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
                <div className="section-container px-4 lg:px-8 text-center">
                    <Globe className="w-12 h-12 text-white/80 mx-auto mb-6" />
                    <h2 className="heading-2 text-white mb-4">
                        Join Us on Our Mission
                    </h2>
                    <p className="body-large text-white/80 max-w-2xl mx-auto mb-8">
                        Whether you're a potential customer, partner, or future team member—we'd love to hear from you.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="/contact" className="btn-primary bg-white text-teal-600 hover:bg-gray-100">
                            Get in Touch
                        </a>
                        <a href="/careers" className="btn-secondary border-white text-white hover:bg-white/10">
                            View Careers
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
