import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Phone, PhoneOff, Mic, Target, TrendingUp } from 'lucide-react';
import AudioVisualization from './AudioVisualization';
import TranscriptPanel from './TranscriptPanel';
import ScenarioSelector from './ScenarioSelector';
import LanguageSelector from './LanguageSelector';
import { demoScenarios } from '../../data/demoData';

const DemoWidget = () => {
    const [industry, setIndustry] = useState('healthcare');
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [language, setLanguage] = useState('en');
    const [callDuration, setCallDuration] = useState(0);

    const scenarios = demoScenarios[industry];

    // Auto-select first scenario
    useEffect(() => {
        if (scenarios.length > 0 && !selectedScenario) {
            setSelectedScenario(scenarios[0]);
        }
    }, [scenarios, selectedScenario]);

    // Handle scenario change
    useEffect(() => {
        setIsPlaying(false);
        setCurrentIndex(-1);
        setCallDuration(0);
    }, [selectedScenario]);

    // Auto-advance transcript
    useEffect(() => {
        if (!isPlaying || !selectedScenario) return;

        const transcript = selectedScenario.transcript;
        if (currentIndex >= transcript.length - 1) {
            setIsPlaying(false);
            return;
        }

        const currentTime = currentIndex >= 0 ? parseTimeToSeconds(transcript[currentIndex].time) : 0;
        const nextTime = parseTimeToSeconds(transcript[currentIndex + 1].time);
        const delay = (nextTime - currentTime) * 1000 || 2000;

        const timer = setTimeout(() => {
            setCurrentIndex(prev => prev + 1);
        }, currentIndex === -1 ? 500 : delay);

        return () => clearTimeout(timer);
    }, [isPlaying, currentIndex, selectedScenario]);

    // Update call duration
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCallDuration(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isPlaying]);

    const parseTimeToSeconds = (time) => {
        const [min, sec] = time.split(':').map(Number);
        return min * 60 + sec;
    };

    const formatDuration = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec.toString().padStart(2, '0')}`;
    };

    const handlePlayPause = () => {
        if (currentIndex >= (selectedScenario?.transcript.length || 0) - 1) {
            // Restart
            setCurrentIndex(-1);
            setCallDuration(0);
        }
        setIsPlaying(!isPlaying);
    };

    const handleReset = () => {
        setIsPlaying(false);
        setCurrentIndex(-1);
        setCallDuration(0);
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Industry Tabs */}
            <div className="flex border-b border-gray-200">
                {['healthcare', 'financial'].map((ind) => (
                    <button
                        key={ind}
                        onClick={() => {
                            setIndustry(ind);
                            setSelectedScenario(null);
                        }}
                        className={`flex-1 py-4 px-6 font-display font-semibold text-sm uppercase tracking-wider transition-colors ${industry === ind
                                ? ind === 'healthcare'
                                    ? 'bg-teal-primary text-white'
                                    : 'bg-purple-accent text-white'
                                : 'text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        {ind === 'healthcare' ? '🏥 Healthcare' : '🏦 Financial Services'}
                    </button>
                ))}
            </div>

            <div className="p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Side - Controls */}
                    <div className="space-y-6">
                        {/* Language Selector */}
                        <div className="flex items-center justify-between">
                            <h2 className="font-display font-bold text-xl text-gray-900">
                                Interactive Voice Demo
                            </h2>
                            <LanguageSelector
                                selectedLanguage={language}
                                onSelect={setLanguage}
                            />
                        </div>

                        {/* Scenario Selector */}
                        <ScenarioSelector
                            scenarios={scenarios}
                            selectedScenario={selectedScenario}
                            onSelect={setSelectedScenario}
                            industry={industry}
                        />

                        {/* Audio Visualization */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPlaying
                                            ? 'bg-coral-accent animate-pulse'
                                            : 'bg-gray-200'
                                        }`}>
                                        {isPlaying ? (
                                            <Phone className="w-5 h-5 text-white" />
                                        ) : (
                                            <PhoneOff className="w-5 h-5 text-gray-500" />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            {isPlaying ? 'Call in Progress' : 'Ready to Demo'}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Duration: {formatDuration(callDuration)}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleReset}
                                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
                                    >
                                        <RotateCcw className="w-5 h-5" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handlePlayPause}
                                        className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 ${industry === 'healthcare'
                                                ? 'bg-teal-primary hover:bg-teal-dark text-white'
                                                : 'bg-purple-accent hover:bg-purple-dark text-white'
                                            }`}
                                    >
                                        {isPlaying ? (
                                            <>
                                                <Pause className="w-5 h-5" />
                                                Pause
                                            </>
                                        ) : (
                                            <>
                                                <Play className="w-5 h-5" />
                                                {currentIndex >= 0 ? 'Resume' : 'Start Demo'}
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </div>

                            <AudioVisualization
                                isPlaying={isPlaying}
                                color={industry === 'healthcare' ? '#0D7C7C' : '#8B5CF6'}
                            />
                        </div>

                        {/* Metrics */}
                        {selectedScenario && currentIndex >= 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-3 gap-4"
                            >
                                <div className="p-4 rounded-xl bg-gray-50 text-center">
                                    <div className="flex items-center justify-center gap-1 text-teal-primary mb-1">
                                        <Target className="w-4 h-4" />
                                        <span className="font-bold text-lg">{selectedScenario.metrics.accuracy}%</span>
                                    </div>
                                    <div className="text-xs text-gray-500">Accuracy</div>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 text-center">
                                    <div className="flex items-center justify-center gap-1 text-coral-accent mb-1">
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="font-bold text-lg">{selectedScenario.metrics.sentiment}%</span>
                                    </div>
                                    <div className="text-xs text-gray-500">Sentiment</div>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 text-center">
                                    <div className="flex items-center justify-center gap-1 text-purple-accent mb-1">
                                        <Mic className="w-4 h-4" />
                                        <span className="font-bold text-lg">{selectedScenario.duration}s</span>
                                    </div>
                                    <div className="text-xs text-gray-500">Avg Handle</div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Side - Transcript */}
                    <TranscriptPanel
                        transcript={selectedScenario?.transcript || []}
                        currentIndex={currentIndex}
                        isPlaying={isPlaying}
                    />
                </div>
            </div>
        </div>
    );
};

export default DemoWidget;
