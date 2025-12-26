import { Phone } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        Product: ['Features', 'Integrations', 'Security', 'Pricing'],
        Solutions: ['Healthcare', 'Financial Services', 'Insurance', 'Retail'],
        Company: ['About', 'Careers', 'Contact', 'Blog'],
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="section-container px-4 lg:px-8 py-16 lg:py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <a href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                                <Phone className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-display font-bold text-xl">
                                VoiceAI <span className="text-teal-light">Enterprise</span>
                            </span>
                        </a>
                        <p className="text-gray-400 leading-relaxed">
                            Enterprise voice AI for healthcare and financial services call centers
                        </p>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-display font-semibold text-white mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2025 VoiceAI Enterprise. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#dpa" className="hover:text-white transition-colors">
                            DPA
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
