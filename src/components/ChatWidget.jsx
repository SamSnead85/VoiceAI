import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

const initialMessages = [
    {
        role: 'bot',
        content: "Hi! I'm VoiceAI Assistant. How can I help you today?",
        options: [
            'Tell me about pricing',
            'How does voice AI work?',
            'Request a demo',
            'Talk to sales',
        ],
    },
];

const responses = {
    'Tell me about pricing': {
        content: 'We offer three plans: Starter ($2,499/mo), Professional ($7,499/mo), and Enterprise (custom). Each includes different minute limits and features. Would you like me to help you choose?',
        options: ['Compare plans', 'Calculate my costs', 'Talk to sales'],
    },
    'How does voice AI work?': {
        content: 'VoiceAI uses advanced speech recognition and natural language processing to understand and respond to callers in real-time. Our AI can handle complex conversations, detect sentiment, and seamlessly integrate with your systems.',
        options: ['See a demo', 'Technical documentation', 'Healthcare use cases'],
    },
    'Request a demo': {
        content: 'Great choice! You can explore our interactive demo right now, or schedule a personalized walkthrough with our team.',
        options: ['Try interactive demo', 'Schedule with sales', 'See case studies'],
    },
    'Talk to sales': {
        content: "I'll connect you with our sales team. You can reach them at 1-800-VOICE-AI or fill out a quick form. What works best for you?",
        options: ['Call now', 'Fill out form', 'Schedule a call'],
    },
    'Compare plans': {
        content: 'Here\'s a quick comparison:\n• Starter: Up to 10K minutes, 2 agents, email support\n• Professional: Up to 100K minutes, 10 agents, HIPAA compliant\n• Enterprise: Unlimited, custom integrations, dedicated support',
        options: ['View full pricing', 'Calculate ROI', 'Start free trial'],
    },
    'Calculate my costs': {
        content: 'Our ROI calculator can help you estimate costs and savings based on your call volume. Most customers see 60-85% cost reduction!',
        options: ['Open calculator', 'See customer results', 'Talk to sales'],
    },
    'See a demo': {
        content: 'Check out our interactive demo to experience voice AI in action. You can test different scenarios like appointment scheduling and claims processing.',
        options: ['Try demo now', 'Schedule live demo', 'Read case studies'],
    },
    'Try interactive demo': {
        content: "Perfect! Click below to launch our interactive demo. You'll be able to test real voice AI scenarios.",
        options: ['Launch demo', 'Back to start'],
    },
    default: {
        content: "I can help you learn more about VoiceAI! What would you like to know?",
        options: ['Pricing info', 'See demo', 'Talk to human'],
    },
};

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleOptionClick = (option) => {
        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: option }]);
        setIsTyping(true);

        // Simulate bot response delay
        setTimeout(() => {
            const response = responses[option] || responses.default;
            setMessages(prev => [...prev, { role: 'bot', content: response.content, options: response.options }]);
            setIsTyping(false);
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setMessages(prev => [...prev, { role: 'user', content: inputValue }]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'bot',
                content: "Thanks for your question! For detailed inquiries, I'd recommend speaking with our team directly. Would you like me to connect you?",
                options: ['Talk to sales', 'See demo', 'View docs'],
            }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg flex items-center justify-center"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">VoiceAI Assistant</h3>
                                    <p className="text-xs text-white/80">Typically replies instantly</p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] ${message.role === 'user' ? 'order-2' : ''}`}>
                                        <div className={`rounded-2xl px-4 py-2 ${message.role === 'user'
                                                ? 'bg-teal-500 text-white rounded-br-none'
                                                : 'bg-white text-gray-900 shadow-sm rounded-bl-none'
                                            }`}>
                                            {message.content}
                                        </div>
                                        {message.options && (
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {message.options.map((option, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => handleOptionClick(option)}
                                                        className="px-3 py-1 bg-white text-teal-600 text-sm rounded-full border border-teal-200 hover:bg-teal-50 transition-colors"
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-center gap-2 text-gray-500">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <button
                                    type="submit"
                                    className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
