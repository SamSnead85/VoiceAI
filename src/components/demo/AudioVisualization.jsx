import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AudioVisualization = ({ isPlaying, color = '#0D7C7C' }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const barsRef = useRef([]);

    // Initialize bars
    useEffect(() => {
        barsRef.current = Array(32).fill(0).map(() => Math.random() * 0.3);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const barCount = 32;
        const barWidth = canvas.width / barCount - 2;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < barCount; i++) {
                if (isPlaying) {
                    // Animate bars when playing
                    const targetHeight = Math.random() * 0.8 + 0.2;
                    barsRef.current[i] += (targetHeight - barsRef.current[i]) * 0.2;
                } else {
                    // Slowly decrease when not playing
                    barsRef.current[i] *= 0.95;
                }

                const barHeight = barsRef.current[i] * canvas.height;
                const x = i * (barWidth + 2);
                const y = (canvas.height - barHeight) / 2;

                // Create gradient for each bar
                const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
                gradient.addColorStop(0, color);
                gradient.addColorStop(1, '#8B5CF6');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.roundRect(x, y, barWidth, barHeight, 2);
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isPlaying, color]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full"
        >
            <canvas
                ref={canvasRef}
                width={400}
                height={80}
                className="w-full h-20 rounded-xl bg-gray-900/50"
            />
            {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-3 h-3 rounded-full bg-coral-accent shadow-lg shadow-coral-accent/50"
                    />
                </div>
            )}
        </motion.div>
    );
};

export default AudioVisualization;
