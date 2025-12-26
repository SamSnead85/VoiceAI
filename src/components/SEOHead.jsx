// Simple SEO component using document.title for React 19 compatibility
import { useEffect } from 'react';

const SEOHead = ({
    title = 'VoiceAI - Enterprise Voice AI Platform',
    description = 'Transform your call center with AI-powered voice agents.',
}) => {
    useEffect(() => {
        // Update document title
        const fullTitle = title.includes('VoiceAI') ? title : `${title} | VoiceAI`;
        document.title = fullTitle;

        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = description;
    }, [title, description]);

    return null;
};

export default SEOHead;
