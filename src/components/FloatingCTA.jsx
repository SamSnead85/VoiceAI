import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

const FloatingCTA = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    if (isMinimized) {
        return (
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setIsMinimized(false)}
                className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-coral-500 to-orange-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
                <Play className="w-5 h-5 ml-0.5" />
            </motion.button>
        );
    }

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-24 right-6 z-40"
        >
            <div className="relative">
                {/* Close button */}
                <button
                    onClick={() => setIsMinimized(true)}
                    className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <X className="w-3 h-3" />
                </button>

                {/* Main CTA */}
                <a
                    href="/demo"
                    className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-coral-500 to-orange-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all"
                >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Try Live Demo</p>
                        <p className="text-xs text-white/80">No signup required</p>
                    </div>
                </a>

                {/* Pulse animation */}
                <div className="absolute inset-0 rounded-full bg-coral-500 animate-ping opacity-20 -z-10" />
            </div>
        </motion.div>
    );
};

export default FloatingCTA;
