import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Loading skeleton component
export const PageSkeleton = () => (
    <div className="min-h-screen bg-gray-50 animate-pulse">
        {/* Nav skeleton */}
        <div className="h-20 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <div className="w-32 h-8 bg-gray-200 rounded" />
                <div className="flex gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-20 h-4 bg-gray-200 rounded" />
                    ))}
                </div>
            </div>
        </div>

        {/* Hero skeleton */}
        <div className="pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <div className="w-24 h-6 bg-gray-200 rounded-full mx-auto mb-6" />
                <div className="w-3/4 h-12 bg-gray-200 rounded mx-auto mb-4" />
                <div className="w-1/2 h-6 bg-gray-200 rounded mx-auto mb-8" />
                <div className="flex justify-center gap-4">
                    <div className="w-32 h-12 bg-gray-200 rounded-xl" />
                    <div className="w-32 h-12 bg-gray-200 rounded-xl" />
                </div>
            </div>
        </div>
    </div>
);

// Section skeleton
export const SectionSkeleton = ({ height = 400 }) => (
    <div className="animate-pulse" style={{ height }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="w-48 h-8 bg-gray-200 rounded mx-auto mb-8" />
            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-200 rounded-2xl h-64" />
                ))}
            </div>
        </div>
    </div>
);

// Card skeleton
export const CardSkeleton = () => (
    <div className="bg-white rounded-2xl p-6 animate-pulse">
        <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4" />
        <div className="w-3/4 h-6 bg-gray-200 rounded mb-2" />
        <div className="w-full h-4 bg-gray-200 rounded mb-2" />
        <div className="w-2/3 h-4 bg-gray-200 rounded" />
    </div>
);

// Table skeleton
export const TableSkeleton = ({ rows = 5 }) => (
    <div className="bg-white rounded-2xl overflow-hidden animate-pulse">
        <div className="h-12 bg-gray-100 border-b border-gray-200" />
        {Array(rows).fill(0).map((_, i) => (
            <div key={i} className="h-16 border-b border-gray-100 flex items-center px-4 gap-4">
                <div className="w-20 h-4 bg-gray-200 rounded" />
                <div className="w-32 h-4 bg-gray-200 rounded" />
                <div className="flex-1" />
                <div className="w-24 h-6 bg-gray-200 rounded-full" />
            </div>
        ))}
    </div>
);

// Image skeleton with shimmer effect
export const ImageSkeleton = ({ className = '' }) => (
    <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
);

// Lazy load wrapper with fallback
export const LazySection = ({ children, fallback = <SectionSkeleton /> }) => (
    <Suspense fallback={fallback}>
        {children}
    </Suspense>
);

// Intersection observer based lazy loading
export const useInView = (ref, { threshold = 0.1, rootMargin = '100px' } = {}) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [ref, threshold, rootMargin]);

    return isInView;
};

import { useState, useEffect } from 'react';

// Prefetch component for link hover
export const PrefetchLink = ({ to, children, className }) => {
    const handleMouseEnter = () => {
        // Prefetch the route
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = to;
        document.head.appendChild(link);
    };

    return (
        <a
            href={to}
            className={className}
            onMouseEnter={handleMouseEnter}
        >
            {children}
        </a>
    );
};
