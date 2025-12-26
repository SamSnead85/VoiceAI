import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: 'Solutions',
            href: '#solutions',
            dropdown: [
                { name: 'Healthcare', href: '#solutions' },
                { name: 'Financial Services', href: '#solutions' },
            ]
        },
        { name: 'Features', href: '#features' },
        { name: 'Demo', href: '/demo', isRoute: true },
        { name: 'ROI Calculator', href: '/calculator', isRoute: true },
        { name: 'Security', href: '#security' },
    ];

    const handleLinkClick = (link) => {
        setIsMobileMenuOpen(false);
        if (!link.isRoute && location.pathname !== '/') {
            // If we're on a different page and clicking an anchor link, navigate to home first
            window.location.href = '/' + link.href;
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-20 px-4 lg:px-8">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                            <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-display font-bold text-xl text-gray-900">
                            VoiceAI <span className="text-teal-primary">Enterprise</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`nav-link ${location.pathname === link.href ? 'text-teal-primary' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="nav-link"
                                    onClick={() => handleLinkClick(link)}
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className="nav-link hover:text-teal-primary transition-colors">
                            Sign In
                        </button>
                        <Link to="/demo" className="btn-primary py-3 px-6 text-sm">
                            Request Demo
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden glass border-t border-gray-200">
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                link.isRoute ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="block nav-link py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block nav-link py-2"
                                        onClick={() => handleLinkClick(link)}
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                            <div className="pt-4 space-y-3">
                                <button className="block w-full text-left nav-link py-2">
                                    Sign In
                                </button>
                                <Link
                                    to="/demo"
                                    className="btn-primary w-full justify-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Request Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
