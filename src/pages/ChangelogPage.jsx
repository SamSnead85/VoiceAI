import { motion } from 'framer-motion';
import { History, Tag, ArrowRight, ChevronDown, Zap, Bug, Shield, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const releases = [
    {
        version: '3.2.0',
        date: 'December 20, 2024',
        title: 'Holiday Release',
        type: 'minor',
        highlights: [
            { type: 'feature', text: 'Added support for 15 new languages including Hindi and Thai' },
            { type: 'feature', text: 'Real-time emotion detection in call transcripts' },
            { type: 'improvement', text: 'Reduced API latency by 40% across all endpoints' },
            { type: 'fix', text: 'Fixed timezone handling in analytics dashboard' },
        ],
    },
    {
        version: '3.1.0',
        date: 'November 15, 2024',
        title: 'Analytics Overhaul',
        type: 'minor',
        highlights: [
            { type: 'feature', text: 'New custom report builder with drag-and-drop interface' },
            { type: 'feature', text: 'Advanced sentiment analysis with emotion breakdown' },
            { type: 'improvement', text: 'Dashboard loading speed improved by 60%' },
            { type: 'security', text: 'Enhanced encryption for call recordings' },
        ],
    },
    {
        version: '3.0.0',
        date: 'October 1, 2024',
        title: 'VoiceAI 3.0 - Major Release',
        type: 'major',
        highlights: [
            { type: 'feature', text: 'Multi-turn conversation memory for context persistence' },
            { type: 'feature', text: 'Voice cloning for custom brand voices' },
            { type: 'feature', text: 'Integration marketplace with 50+ pre-built connectors' },
            { type: 'improvement', text: 'Complete UI redesign with dark mode' },
            { type: 'security', text: 'SOC 2 Type II certification achieved' },
        ],
    },
    {
        version: '2.9.0',
        date: 'August 20, 2024',
        title: 'Healthcare Compliance Update',
        type: 'minor',
        highlights: [
            { type: 'feature', text: 'HIPAA-compliant call recording with automatic PHI redaction' },
            { type: 'feature', text: 'Epic and Cerner EHR integrations' },
            { type: 'fix', text: 'Resolved audio quality issues on mobile networks' },
        ],
    },
];

const getTypeIcon = (type) => {
    switch (type) {
        case 'feature': return <Sparkles className="w-4 h-4 text-purple-500" />;
        case 'improvement': return <Zap className="w-4 h-4 text-blue-500" />;
        case 'fix': return <Bug className="w-4 h-4 text-orange-500" />;
        case 'security': return <Shield className="w-4 h-4 text-green-500" />;
        default: return null;
    }
};

const getTypeLabel = (type) => {
    switch (type) {
        case 'feature': return 'New Feature';
        case 'improvement': return 'Improvement';
        case 'fix': return 'Bug Fix';
        case 'security': return 'Security';
        default: return type;
    }
};

const ChangelogPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="section-container px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                            <History className="w-8 h-8 text-purple-400" />
                        </div>
                        <h1 className="heading-1 text-white mb-4">
                            Changelog
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto">
                            See what's new in VoiceAI. We ship improvements weekly.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-30">
                <div className="section-container px-4 lg:px-8">
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Filter:</span>
                        <div className="flex gap-2">
                            {['All', 'Features', 'Improvements', 'Fixes', 'Security'].map((filter) => (
                                <button
                                    key={filter}
                                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filter === 'All'
                                            ? 'bg-purple-500 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Releases */}
            <section className="py-16">
                <div className="section-container px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto space-y-8">
                        {releases.map((release, index) => (
                            <motion.div
                                key={release.version}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${release.type === 'major'
                                                    ? 'bg-purple-100 text-purple-700'
                                                    : 'bg-gray-100 text-gray-700'
                                                }`}>
                                                v{release.version}
                                            </span>
                                            <span className="text-sm text-gray-500">{release.date}</span>
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-gray-900">
                                            {release.title}
                                        </h3>
                                    </div>
                                    {release.type === 'major' && (
                                        <Tag className="w-5 h-5 text-purple-500" />
                                    )}
                                </div>
                                <ul className="space-y-3">
                                    {release.highlights.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            {getTypeIcon(item.type)}
                                            <div className="flex-1">
                                                <span className="text-xs font-medium text-gray-500 uppercase">
                                                    {getTypeLabel(item.type)}
                                                </span>
                                                <p className="text-gray-700">{item.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700">
                            Load older releases
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="py-16 bg-purple-50">
                <div className="section-container px-4 lg:px-8 text-center">
                    <h2 className="font-display font-bold text-xl text-gray-900 mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Get notified about new releases and product updates.
                    </p>
                    <form className="max-w-md mx-auto flex gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500"
                        />
                        <button type="submit" className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ChangelogPage;
