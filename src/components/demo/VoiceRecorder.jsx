import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Play, Pause, RotateCcw, Volume2 } from 'lucide-react';

const VoiceRecorder = ({ onTranscript }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const [transcript, setTranscript] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [audioLevel, setAudioLevel] = useState(0);

    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const audioRef = useRef(null);
    const analyzerRef = useRef(null);
    const animationFrameRef = useRef(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            // Set up audio analyzer
            const audioContext = new AudioContext();
            const source = audioContext.createMediaStreamSource(stream);
            const analyzer = audioContext.createAnalyser();
            analyzer.fftSize = 256;
            source.connect(analyzer);
            analyzerRef.current = analyzer;

            // Animate audio level
            const updateLevel = () => {
                const dataArray = new Uint8Array(analyzer.frequencyBinCount);
                analyzer.getByteFrequencyData(dataArray);
                const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
                setAudioLevel(average / 255);
                animationFrameRef.current = requestAnimationFrame(updateLevel);
            };
            updateLevel();

            // Set up media recorder
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const url = URL.createObjectURL(audioBlob);
                setAudioUrl(url);
                cancelAnimationFrame(animationFrameRef.current);
                setAudioLevel(0);

                // Simulate transcription
                simulateTranscription();
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error accessing microphone:', error);
            alert('Unable to access microphone. Please check your permissions.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            setIsRecording(false);
        }
    };

    const simulateTranscription = () => {
        setIsAnalyzing(true);
        // Simulate AI processing
        setTimeout(() => {
            const mockTranscript = "Thank you for trying our voice demo. Our AI can understand natural speech, detect intent, and respond appropriately in real-time.";
            setTranscript(mockTranscript);
            setIsAnalyzing(false);
            onTranscript?.(mockTranscript);
        }, 2000);
    };

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const resetRecording = () => {
        setAudioUrl(null);
        setTranscript('');
        setIsPlaying(false);
    };

    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-display font-bold text-lg text-gray-900 mb-4">
                Voice Recording Demo
            </h3>
            <p className="text-gray-600 text-sm mb-6">
                Record your voice to see how our AI transcribes and analyzes speech in real-time.
            </p>

            {/* Recording Visualization */}
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <motion.button
                        onClick={isRecording ? stopRecording : startRecording}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-24 h-24 rounded-full flex items-center justify-center transition-colors ${isRecording
                                ? 'bg-red-500 text-white'
                                : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                            }`}
                    >
                        {isRecording ? (
                            <MicOff className="w-10 h-10" />
                        ) : (
                            <Mic className="w-10 h-10" />
                        )}
                    </motion.button>

                    {/* Audio level rings */}
                    {isRecording && (
                        <>
                            <motion.div
                                animate={{ scale: 1 + audioLevel * 0.3 }}
                                className="absolute inset-0 rounded-full bg-red-500/20 -z-10"
                            />
                            <motion.div
                                animate={{ scale: 1 + audioLevel * 0.5 }}
                                className="absolute inset-[-10px] rounded-full bg-red-500/10 -z-20"
                            />
                        </>
                    )}
                </div>
            </div>

            <p className="text-center text-sm text-gray-500 mb-6">
                {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
            </p>

            {/* Audio Player */}
            {audioUrl && (
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <audio
                        ref={audioRef}
                        src={audioUrl}
                        onEnded={() => setIsPlaying(false)}
                        className="hidden"
                    />
                    <div className="flex items-center gap-4">
                        <button
                            onClick={isPlaying ? pauseAudio : playAudio}
                            className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition-colors"
                        >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                        </button>
                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-1/3 bg-teal-500 rounded-full" />
                        </div>
                        <button
                            onClick={resetRecording}
                            className="p-2 text-gray-400 hover:text-gray-600"
                        >
                            <RotateCcw className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}

            {/* Transcription Result */}
            {(isAnalyzing || transcript) && (
                <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Volume2 className="w-4 h-4 text-teal-500" />
                        <span className="text-sm font-medium text-gray-900">Transcription</span>
                    </div>
                    {isAnalyzing ? (
                        <div className="flex items-center gap-2 text-gray-500">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                            <span className="text-sm">Analyzing speech...</span>
                        </div>
                    ) : (
                        <p className="text-gray-700">{transcript}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default VoiceRecorder;
