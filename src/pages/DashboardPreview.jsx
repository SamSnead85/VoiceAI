import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3, Phone, Users, TrendingUp, Clock,
    MessageSquare, Settings, CreditCard, HeadphonesIcon,
    FileText, Shield, Key, Activity
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const dashboardMetrics = [
    { label: 'Total Calls Today', value: '12,847', change: '+12%', icon: Phone },
    { label: 'Active Agents', value: '24', change: '+3', icon: Users },
    { label: 'Avg Handle Time', value: '2:34', change: '-18%', icon: Clock },
    { label: 'CSAT Score', value: '4.8', change: '+0.2', icon: TrendingUp },
];

const recentCalls = [
    { id: 'C-001234', time: '2 min ago', duration: '3:24', status: 'completed', sentiment: 'positive' },
    { id: 'C-001233', time: '5 min ago', duration: '1:56', status: 'completed', sentiment: 'positive' },
    { id: 'C-001232', time: '8 min ago', duration: '5:12', status: 'completed', sentiment: 'neutral' },
    { id: 'C-001231', time: '12 min ago', duration: '2:08', status: 'completed', sentiment: 'positive' },
    { id: 'C-001230', time: '15 min ago', duration: '4:45', status: 'escalated', sentiment: 'negative' },
];

const navItems = [
    { name: 'Dashboard', icon: BarChart3, active: true },
    { name: 'Calls', icon: Phone },
    { name: 'Agents', icon: Users },
    { name: 'Analytics', icon: TrendingUp },
    { name: 'Conversations', icon: MessageSquare },
    { name: 'Reports', icon: FileText },
    { name: 'Billing', icon: CreditCard },
    { name: 'API Keys', icon: Key },
    { name: 'Security', icon: Shield },
    { name: 'Support', icon: HeadphonesIcon },
    { name: 'Settings', icon: Settings },
];

const DashboardPreview = () => {
    const [activeNav, setActiveNav] = useState('Dashboard');

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="section-container px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                            Dashboard Preview
                        </span>
                        <h1 className="heading-1 text-white mb-4">
                            Your Command Center
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto">
                            Preview the powerful analytics and management tools available to VoiceAI customers
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="py-8">
                <div className="section-container px-4 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex">
                            {/* Sidebar */}
                            <div className="w-64 bg-gray-900 min-h-[600px] p-4 hidden lg:block">
                                <div className="flex items-center gap-3 mb-8 px-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                                        <Activity className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="font-display font-bold text-white">VoiceAI</span>
                                </div>
                                <nav className="space-y-1">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.name}
                                            onClick={() => setActiveNav(item.name)}
                                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${activeNav === item.name
                                                    ? 'bg-teal-500/20 text-teal-400'
                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                                }`}
                                        >
                                            <item.icon className="w-5 h-5" />
                                            <span className="text-sm font-medium">{item.name}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-6 bg-gray-50">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="font-display font-bold text-2xl text-gray-900">Dashboard</h2>
                                        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm">
                                            <option>Last 24 hours</option>
                                            <option>Last 7 days</option>
                                            <option>Last 30 days</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                    {dashboardMetrics.map((metric, index) => (
                                        <motion.div
                                            key={metric.label}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white rounded-xl p-4 shadow-sm"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <metric.icon className="w-5 h-5 text-gray-400" />
                                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${metric.change.startsWith('+') && metric.change !== '+3'
                                                        ? 'bg-green-100 text-green-700'
                                                        : metric.change.startsWith('-')
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {metric.change}
                                                </span>
                                            </div>
                                            <div className="font-display font-bold text-2xl text-gray-900 mb-1">
                                                {metric.value}
                                            </div>
                                            <div className="text-sm text-gray-600">{metric.label}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Charts Row */}
                                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                                    {/* Call Volume Chart */}
                                    <div className="bg-white rounded-xl p-4 shadow-sm">
                                        <h3 className="font-semibold text-gray-900 mb-4">Call Volume</h3>
                                        <div className="h-48 flex items-end gap-2">
                                            {[65, 80, 45, 90, 75, 85, 70, 95, 60, 88, 72, 82].map((height, i) => (
                                                <div key={i} className="flex-1 bg-gradient-to-t from-teal-500 to-cyan-400 rounded-t" style={{ height: `${height}%` }} />
                                            ))}
                                        </div>
                                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                                            <span>12 AM</span>
                                            <span>6 AM</span>
                                            <span>12 PM</span>
                                            <span>6 PM</span>
                                        </div>
                                    </div>

                                    {/* Sentiment Breakdown */}
                                    <div className="bg-white rounded-xl p-4 shadow-sm">
                                        <h3 className="font-semibold text-gray-900 mb-4">Sentiment Analysis</h3>
                                        <div className="space-y-4">
                                            {[
                                                { label: 'Positive', value: 72, color: 'bg-green-500' },
                                                { label: 'Neutral', value: 20, color: 'bg-gray-400' },
                                                { label: 'Negative', value: 8, color: 'bg-red-500' },
                                            ].map((item) => (
                                                <div key={item.label}>
                                                    <div className="flex justify-between text-sm mb-1">
                                                        <span className="text-gray-600">{item.label}</span>
                                                        <span className="font-medium">{item.value}%</span>
                                                    </div>
                                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Calls */}
                                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <h3 className="font-semibold text-gray-900">Recent Calls</h3>
                                    </div>
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Call ID</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Sentiment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentCalls.map((call) => (
                                                <tr key={call.id} className="border-b border-gray-50 hover:bg-gray-50">
                                                    <td className="px-4 py-3 font-mono text-sm text-teal-600">{call.id}</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">{call.time}</td>
                                                    <td className="px-4 py-3 text-sm text-gray-900">{call.duration}</td>
                                                    <td className="px-4 py-3">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${call.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                                            }`}>
                                                            {call.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <span className={`w-2 h-2 rounded-full inline-block ${call.sentiment === 'positive' ? 'bg-green-500' :
                                                                call.sentiment === 'neutral' ? 'bg-gray-400' : 'bg-red-500'
                                                            }`} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="section-container px-4 lg:px-8 text-center">
                    <h2 className="heading-2 text-gray-900 mb-4">
                        Want Access to the Full Dashboard?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Start your free trial and unlock powerful analytics, call management, and more.
                    </p>
                    <a href="/demo" className="btn-primary">
                        Start Free Trial
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DashboardPreview;
