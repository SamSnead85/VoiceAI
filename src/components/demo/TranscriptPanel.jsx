import { motion } from 'framer-motion';
import { Bot, User, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const TranscriptPanel = ({ transcript, currentIndex, isPlaying }) => {
    const getSentimentIcon = (sentiment) => {
        switch (sentiment) {
            case 'positive':
            case 'relieved':
            case 'interested':
                return <TrendingUp className="w-4 h-4 text-green-500" />;
            case 'distressed':
            case 'concerned':
                return <TrendingDown className="w-4 h-4 text-red-500" />;
            default:
                return <Minus className="w-4 h-4 text-gray-400" />;
        }
    };

    const getSentimentColor = (sentiment) => {
        switch (sentiment) {
            case 'positive':
            case 'relieved':
            case 'interested':
            case 'empathetic':
            case 'caring':
            case 'reassuring':
                return 'border-l-green-500';
            case 'distressed':
            case 'concerned':
                return 'border-l-red-500';
            case 'alert':
                return 'border-l-yellow-500';
            default:
                return 'border-l-gray-300';
        }
    };

    return (
        <div className="bg-gray-50 rounded-2xl p-6 h-[400px] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-gray-900">Live Transcript</h3>
                {isPlaying && (
                    <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex items-center gap-2 text-sm text-coral-accent font-medium"
                    >
                        <span className="w-2 h-2 rounded-full bg-coral-accent" />
                        Recording
                    </motion.span>
                )}
            </div>

            <div className="space-y-4">
                {transcript.slice(0, currentIndex + 1).map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex gap-3 ${index === currentIndex && isPlaying ? 'opacity-100' : 'opacity-80'}`}
                    >
                        {/* Speaker Icon */}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${line.speaker === 'ai'
                                ? 'bg-gradient-to-br from-teal-primary to-purple-accent'
                                : 'bg-gray-200'
                            }`}>
                            {line.speaker === 'ai' ? (
                                <Bot className="w-4 h-4 text-white" />
                            ) : (
                                <User className="w-4 h-4 text-gray-600" />
                            )}
                        </div>

                        {/* Message */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-medium text-gray-500 uppercase">
                                    {line.speaker === 'ai' ? 'AI Agent' : 'Caller'}
                                </span>
                                <span className="text-xs text-gray-400">{line.time}</span>
                                {getSentimentIcon(line.sentiment)}
                            </div>
                            <div className={`p-3 rounded-xl border-l-4 ${getSentimentColor(line.sentiment)} ${line.speaker === 'ai'
                                    ? 'bg-white shadow-sm'
                                    : 'bg-gray-100'
                                }`}>
                                <p className="text-gray-700 text-sm leading-relaxed">{line.text}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Typing indicator when playing */}
                {isPlaying && currentIndex < transcript.length - 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-primary to-purple-accent flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex items-center gap-1 px-4 py-3 bg-white rounded-xl shadow-sm">
                            <motion.span
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                className="w-2 h-2 rounded-full bg-teal-primary"
                            />
                            <motion.span
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                className="w-2 h-2 rounded-full bg-coral-accent"
                            />
                            <motion.span
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                className="w-2 h-2 rounded-full bg-purple-accent"
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default TranscriptPanel;
