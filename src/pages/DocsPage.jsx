import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code, Book, Terminal, Key, Webhook, Package,
    AlertCircle, History, ChevronRight, Copy, Check,
    Play, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const endpoints = [
    {
        method: 'POST',
        path: '/v1/calls',
        description: 'Initiate a new voice call',
        category: 'Calls',
    },
    {
        method: 'GET',
        path: '/v1/calls/{call_id}',
        description: 'Retrieve call details and transcript',
        category: 'Calls',
    },
    {
        method: 'POST',
        path: '/v1/agents',
        description: 'Create a new voice agent',
        category: 'Agents',
    },
    {
        method: 'GET',
        path: '/v1/analytics/calls',
        description: 'Get call analytics and metrics',
        category: 'Analytics',
    },
    {
        method: 'POST',
        path: '/v1/webhooks',
        description: 'Register a webhook endpoint',
        category: 'Webhooks',
    },
];

const quickLinks = [
    { name: 'Getting Started', icon: Book, href: '#getting-started', color: 'bg-teal-100 text-teal-600' },
    { name: 'Authentication', icon: Key, href: '#authentication', color: 'bg-purple-100 text-purple-600' },
    { name: 'API Reference', icon: Code, href: '#reference', color: 'bg-blue-100 text-blue-600' },
    { name: 'Webhooks', icon: Webhook, href: '#webhooks', color: 'bg-orange-100 text-orange-600' },
    { name: 'SDKs', icon: Package, href: '#sdks', color: 'bg-green-100 text-green-600' },
    { name: 'Changelog', icon: History, href: '#changelog', color: 'bg-gray-100 text-gray-600' },
];

const sdks = [
    { name: 'Python', version: '2.4.1', icon: '🐍', color: 'bg-yellow-100' },
    { name: 'Node.js', version: '3.1.0', icon: '💚', color: 'bg-green-100' },
    { name: 'Java', version: '1.8.2', icon: '☕', color: 'bg-red-100' },
    { name: 'Go', version: '1.2.0', icon: '🐹', color: 'bg-cyan-100' },
    { name: 'Ruby', version: '2.0.1', icon: '💎', color: 'bg-pink-100' },
    { name: '.NET', version: '4.0.0', icon: '🔷', color: 'bg-purple-100' },
];

const codeExamples = {
    python: `import voiceai

client = voiceai.Client(api_key="your_api_key")

# Create a call
call = client.calls.create(
    to="+1234567890",
    agent_id="agent_xyz",
    context={
        "customer_name": "John Doe",
        "account_type": "premium"
    }
)

print(f"Call ID: {call.id}")`,
    javascript: `const VoiceAI = require('voiceai');

const client = new VoiceAI({ apiKey: 'your_api_key' });

// Create a call
const call = await client.calls.create({
    to: '+1234567890',
    agentId: 'agent_xyz',
    context: {
        customerName: 'John Doe',
        accountType: 'premium'
    }
});

console.log(\`Call ID: \${call.id}\`);`,
    curl: `curl -X POST https://api.voiceai.com/v1/calls \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+1234567890",
    "agent_id": "agent_xyz",
    "context": {
      "customer_name": "John Doe",
      "account_type": "premium"
    }
  }'`,
};

const DocsPage = () => {
    const [activeLanguage, setActiveLanguage] = useState('python');
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(codeExamples[activeLanguage]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="section-container px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            Developer Documentation
                        </span>
                        <h1 className="heading-1 text-white mb-4">
                            VoiceAI API Reference
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto mb-8">
                            Everything you need to integrate enterprise voice AI into your applications
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="#getting-started" className="btn-primary">
                                Get Started
                            </a>
                            <a href="#reference" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
                                API Reference
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-12 bg-white border-b border-gray-200">
                <div className="section-container px-4 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {quickLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                <div className={`w-12 h-12 rounded-xl ${link.color} flex items-center justify-center`}>
                                    <link.icon className="w-6 h-6" />
                                </div>
                                <span className="font-medium text-gray-900 text-sm">{link.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section id="getting-started" className="py-16">
                <div className="section-container px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="heading-2 text-gray-900 mb-4">Quick Start</h2>
                            <p className="text-gray-600 mb-6">
                                Get up and running with VoiceAI in minutes. Install our SDK, authenticate, and make your first API call.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Install the SDK</h3>
                                        <code className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded mt-1 inline-block">pip install voiceai</code>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Get your API key</h3>
                                        <p className="text-sm text-gray-600">Generate keys in your dashboard</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Make your first call</h3>
                                        <p className="text-sm text-gray-600">Use the code example on the right</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Code Example */}
                        <div className="bg-gray-900 rounded-2xl overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
                                <div className="flex gap-2">
                                    {['python', 'javascript', 'curl'].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => setActiveLanguage(lang)}
                                            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${activeLanguage === lang
                                                    ? 'bg-teal-500 text-white'
                                                    : 'text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            {lang === 'javascript' ? 'Node.js' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={copyCode}
                                    className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
                                >
                                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                            <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                                <code>{codeExamples[activeLanguage]}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Reference */}
            <section id="reference" className="py-16 bg-gray-50">
                <div className="section-container px-4 lg:px-8">
                    <h2 className="heading-2 text-gray-900 mb-8">API Endpoints</h2>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        {endpoints.map((endpoint, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${index !== endpoints.length - 1 ? 'border-b border-gray-100' : ''
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${endpoint.method === 'GET'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-blue-100 text-blue-700'
                                        }`}>
                                        {endpoint.method}
                                    </span>
                                    <code className="text-gray-900 font-mono">{endpoint.path}</code>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-600 text-sm hidden md:block">{endpoint.description}</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button className="btn-secondary">
                            View Full API Reference
                        </button>
                    </div>
                </div>
            </section>

            {/* SDKs */}
            <section id="sdks" className="py-16">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Official SDKs</h2>
                        <p className="text-gray-600">
                            Production-ready libraries for your favorite languages
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {sdks.map((sdk, index) => (
                            <motion.div
                                key={sdk.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`${sdk.color} rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-pointer`}
                            >
                                <span className="text-3xl mb-2 block">{sdk.icon}</span>
                                <h3 className="font-semibold text-gray-900">{sdk.name}</h3>
                                <span className="text-sm text-gray-600">v{sdk.version}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Error Codes */}
            <section className="py-16 bg-gray-50">
                <div className="section-container px-4 lg:px-8">
                    <h2 className="heading-2 text-gray-900 mb-8">Error Codes</h2>
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { code: '400', message: 'Bad Request', description: 'Invalid request parameters' },
                                { code: '401', message: 'Unauthorized', description: 'Invalid or missing API key' },
                                { code: '403', message: 'Forbidden', description: 'Insufficient permissions' },
                                { code: '404', message: 'Not Found', description: 'Resource does not exist' },
                                { code: '429', message: 'Rate Limited', description: 'Too many requests' },
                                { code: '500', message: 'Server Error', description: 'Internal server error' },
                            ].map((error) => (
                                <div key={error.code} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm font-mono font-bold">
                                        {error.code}
                                    </span>
                                    <div>
                                        <span className="font-medium text-gray-900">{error.message}</span>
                                        <p className="text-sm text-gray-600">{error.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="section-container px-4 lg:px-8 text-center">
                    <h2 className="heading-2 text-white mb-4">
                        Ready to Build?
                    </h2>
                    <p className="body-large text-white/80 mb-8">
                        Get your API keys and start integrating voice AI today.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/demo" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                            Get API Keys
                        </Link>
                        <a href="#" className="btn-secondary border-white text-white hover:bg-white/10">
                            Join Discord
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DocsPage;
