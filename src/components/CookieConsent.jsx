import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
        personalization: false,
    });

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show banner after a short delay
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
            personalization: true,
        };
        localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
        setShowBanner(false);
    };

    const handleRejectAll = () => {
        const onlyNecessary = {
            necessary: true,
            analytics: false,
            marketing: false,
            personalization: false,
        };
        localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
        setShowBanner(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookieConsent', JSON.stringify(preferences));
        setShowBanner(false);
        setShowPreferences(false);
    };

    const cookieTypes = [
        {
            id: 'necessary',
            name: 'Strictly Necessary',
            description: 'Essential for the website to function. Cannot be disabled.',
            required: true,
        },
        {
            id: 'analytics',
            name: 'Analytics',
            description: 'Help us understand how visitors interact with our website.',
            required: false,
        },
        {
            id: 'marketing',
            name: 'Marketing',
            description: 'Used to deliver relevant ads and track campaign performance.',
            required: false,
        },
        {
            id: 'personalization',
            name: 'Personalization',
            description: 'Allow us to remember your preferences and customize your experience.',
            required: false,
        },
    ];

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4"
                >
                    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {!showPreferences ? (
                            // Simple banner
                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                                        <Cookie className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                                            We value your privacy
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            We use cookies to enhance your browsing experience, serve personalized content,
                                            and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                                            Read our <Link to="/privacy" className="text-teal-600 hover:underline">Privacy Policy</Link> for more information.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={handleAcceptAll}
                                                className="px-6 py-2 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
                                            >
                                                Accept All
                                            </button>
                                            <button
                                                onClick={handleRejectAll}
                                                className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                                            >
                                                Reject All
                                            </button>
                                            <button
                                                onClick={() => setShowPreferences(true)}
                                                className="px-6 py-2 text-gray-600 font-medium hover:text-gray-900 transition-colors flex items-center gap-2"
                                            >
                                                <Settings className="w-4 h-4" />
                                                Customize
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setShowBanner(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // Preferences panel
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-display font-bold text-lg text-gray-900">
                                        Cookie Preferences
                                    </h3>
                                    <button
                                        onClick={() => setShowPreferences(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="space-y-4 mb-6">
                                    {cookieTypes.map((cookie) => (
                                        <div key={cookie.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={preferences[cookie.id]}
                                                    onChange={(e) => setPreferences({ ...preferences, [cookie.id]: e.target.checked })}
                                                    disabled={cookie.required}
                                                    className="sr-only peer"
                                                />
                                                <div className={`w-11 h-6 rounded-full peer peer-checked:bg-teal-500 transition-colors ${cookie.required ? 'bg-gray-300' : 'bg-gray-200'
                                                    }`}>
                                                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${preferences[cookie.id] ? 'translate-x-5' : ''
                                                        }`}>
                                                        {preferences[cookie.id] && (
                                                            <Check className="w-3 h-3 text-teal-500 absolute top-1 left-1" />
                                                        )}
                                                    </div>
                                                </div>
                                            </label>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-medium text-gray-900">{cookie.name}</h4>
                                                    {cookie.required && (
                                                        <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">Required</span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1">{cookie.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleSavePreferences}
                                        className="px-6 py-2 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
                                    >
                                        Save Preferences
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        Accept All
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
