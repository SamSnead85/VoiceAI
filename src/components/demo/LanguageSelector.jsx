import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { languages } from '../../data/demoData';

const LanguageSelector = ({ selectedLanguage, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selected = languages.find(l => l.code === selectedLanguage) || languages[0];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-colors"
            >
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="text-lg">{selected.flag}</span>
                <span className="text-sm font-medium text-gray-700">{selected.name}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute right-0 mt-2 w-64 max-h-80 overflow-auto bg-white rounded-xl shadow-xl border border-gray-200 z-20"
                        >
                            <div className="p-2">
                                <div className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">
                                    40+ Languages Supported
                                </div>
                                <div className="grid grid-cols-2 gap-1">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                onSelect(lang.code);
                                                setIsOpen(false);
                                            }}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors ${lang.code === selectedLanguage
                                                    ? 'bg-teal-primary/10 text-teal-primary'
                                                    : 'hover:bg-gray-100'
                                                }`}
                                        >
                                            <span className="text-lg">{lang.flag}</span>
                                            <span className="text-sm font-medium">{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSelector;
