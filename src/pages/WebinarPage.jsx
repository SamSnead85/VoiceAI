import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Calendar, Users, Video, Clock, CheckCircle,
    ChevronLeft, ChevronRight
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
];

const WebinarPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        role: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Generate next 14 days
    const dates = Array(14).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i + 1);
        return date;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navigation />
                <section className="pt-32 pb-20">
                    <div className="section-container px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-lg mx-auto text-center bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
                                You're Registered!
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Check your email for confirmation and calendar invite. We'll send a reminder
                                24 hours before your session.
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4 mb-6">
                                <p className="text-sm text-gray-500 mb-1">Your session</p>
                                <p className="font-semibold text-gray-900">
                                    {selectedDate?.toLocaleDateString('en-US', {
                                        weekday: 'long', month: 'long', day: 'numeric'
                                    })} at {selectedTime}
                                </p>
                            </div>
                            <a href="/" className="btn-primary inline-block">
                                Return to Homepage
                            </a>
                        </motion.div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

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
                            Live Demo Session
                        </span>
                        <h1 className="heading-1 text-white mb-4">
                            See VoiceAI in Action
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto">
                            Join a 30-minute live demo with our product team. See real use cases, ask questions,
                            and learn how voice AI can transform your operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Booking Section */}
            <section className="py-16">
                <div className="section-container px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* What to Expect */}
                        <div>
                            <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                                What You'll Learn
                            </h2>
                            <div className="space-y-4 mb-8">
                                {[
                                    { icon: Video, text: 'Live demonstration of voice AI handling real calls' },
                                    { icon: Users, text: 'Industry-specific use cases for your business' },
                                    { icon: Clock, text: 'Implementation timeline and integration process' },
                                    { icon: CheckCircle, text: 'Q&A session with our product experts' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <p className="text-gray-700 pt-2">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">Session Details</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Duration</span>
                                        <span className="font-medium">30 minutes</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Format</span>
                                        <span className="font-medium">Video call (Zoom)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Attendees</span>
                                        <span className="font-medium">1-on-1 with product specialist</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h3 className="font-display font-bold text-xl text-gray-900 mb-6">
                                Book Your Session
                            </h3>

                            {/* Date Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Select a Date
                                </label>
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {dates.slice(0, 7).map((date, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedDate(date)}
                                            className={`flex-shrink-0 px-4 py-3 rounded-xl text-center transition-all ${selectedDate?.toDateString() === date.toDateString()
                                                    ? 'bg-purple-500 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            <div className="text-xs">
                                                {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                            </div>
                                            <div className="font-bold text-lg">
                                                {date.getDate()}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Time Selection */}
                            {selectedDate && (
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Select a Time (EST)
                                    </label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${selectedTime === time
                                                        ? 'bg-purple-500 text-white'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Contact Form */}
                            {selectedTime && (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Work Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow"
                                    >
                                        Confirm Booking
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WebinarPage;
