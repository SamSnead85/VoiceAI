import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, Building2, Rocket, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const plans = [
    {
        name: 'Starter',
        description: 'For small teams getting started with voice AI',
        price: 2499,
        period: '/month',
        icon: Zap,
        color: 'from-teal-500 to-cyan-500',
        features: [
            { name: 'Up to 10,000 minutes/month', included: true },
            { name: '2 custom voice agents', included: true },
            { name: 'Email support', included: true },
            { name: 'Basic analytics', included: true },
            { name: '99.5% uptime SLA', included: true },
            { name: 'HIPAA compliance', included: false },
            { name: 'Custom integrations', included: false },
            { name: 'Dedicated account manager', included: false },
        ],
        cta: 'Start Free Trial',
        popular: false,
    },
    {
        name: 'Professional',
        description: 'For growing enterprises with advanced needs',
        price: 7499,
        period: '/month',
        icon: Building2,
        color: 'from-purple-500 to-pink-500',
        features: [
            { name: 'Up to 100,000 minutes/month', included: true },
            { name: '10 custom voice agents', included: true },
            { name: 'Priority phone & chat support', included: true },
            { name: 'Advanced analytics & reporting', included: true },
            { name: '99.9% uptime SLA', included: true },
            { name: 'HIPAA & SOC 2 compliance', included: true },
            { name: 'Standard integrations', included: true },
            { name: 'Dedicated account manager', included: false },
        ],
        cta: 'Start Free Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        description: 'For large organizations requiring maximum scale',
        price: null,
        period: 'Custom',
        icon: Rocket,
        color: 'from-coral-500 to-orange-500',
        features: [
            { name: 'Unlimited minutes', included: true },
            { name: 'Unlimited voice agents', included: true },
            { name: '24/7 dedicated support', included: true },
            { name: 'Custom analytics & BI integration', included: true },
            { name: '99.99% uptime SLA', included: true },
            { name: 'Full compliance suite', included: true },
            { name: 'Custom integrations & API access', included: true },
            { name: 'Dedicated account manager', included: true },
        ],
        cta: 'Contact Sales',
        popular: false,
    },
];

const faqs = [
    {
        question: 'What counts as a minute?',
        answer: 'A minute is calculated from the moment a call connects to when it ends. Partial minutes are rounded up to the nearest second.',
    },
    {
        question: 'Can I switch plans anytime?',
        answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
    },
    {
        question: 'Is there a free trial?',
        answer: 'Yes, we offer a 14-day free trial on Starter and Professional plans with no credit card required.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, ACH bank transfers, and wire transfers for Enterprise customers.',
    },
    {
        question: 'Do you offer volume discounts?',
        answer: 'Yes! Enterprise customers receive custom pricing based on volume. Contact our sales team for a quote.',
    },
    {
        question: 'What happens if I exceed my plan limits?',
        answer: 'We\'ll notify you before you hit your limit. You can upgrade anytime or pay for additional usage at our overage rate.',
    },
];

const PricingPage = () => {
    const [billingPeriod, setBillingPeriod] = useState('monthly');
    const [openFaq, setOpenFaq] = useState(null);

    const getPrice = (price) => {
        if (!price) return 'Custom';
        const adjustedPrice = billingPeriod === 'annual' ? Math.round(price * 0.8) : price;
        return `$${adjustedPrice.toLocaleString()}`;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="section-container px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                            Simple, Transparent Pricing
                        </span>
                        <h1 className="heading-1 text-white mb-4">
                            Choose the Right Plan for Your Business
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto mb-8">
                            Start with a free trial, scale as you grow. No hidden fees, no surprises.
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center gap-4 p-2 rounded-full bg-gray-800">
                            <button
                                onClick={() => setBillingPeriod('monthly')}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${billingPeriod === 'monthly'
                                        ? 'bg-teal-500 text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingPeriod('annual')}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${billingPeriod === 'annual'
                                        ? 'bg-teal-500 text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                Annual
                                <span className="ml-2 text-xs text-green-400">Save 20%</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 -mt-8">
                <div className="section-container px-4 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center text-sm font-medium py-2">
                                        Most Popular
                                    </div>
                                )}

                                <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                                    {/* Plan Header */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                                        <plan.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-6">
                                        {plan.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <span className="font-display font-bold text-4xl text-gray-900">
                                            {getPrice(plan.price)}
                                        </span>
                                        <span className="text-gray-500">{plan.price ? plan.period : ''}</span>
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        to={plan.name === 'Enterprise' ? '/contact' : '/demo'}
                                        className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${plan.popular
                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
                                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                            }`}
                                    >
                                        {plan.cta}
                                    </Link>
                                </div>

                                {/* Features */}
                                <div className="border-t border-gray-100 p-8">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                {feature.included ? (
                                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                ) : (
                                                    <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                                                )}
                                                <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                                                    {feature.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Usage Calculator */}
            <section className="py-20 bg-white">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Estimate Your Costs</h2>
                        <p className="body-large text-gray-600">
                            Use our calculator to find the best plan for your needs
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8">
                        <Link
                            to="/calculator"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Open ROI Calculator
                            <Zap className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-gray-50">
                <div className="section-container px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="heading-2 text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="body-large text-gray-600">
                            Everything you need to know about our pricing
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                    <HelpCircle className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                        }`} />
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6 text-gray-600">
                                        {faq.answer}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enterprise CTA */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="section-container px-4 lg:px-8 text-center">
                    <h2 className="heading-2 text-white mb-4">
                        Need a Custom Solution?
                    </h2>
                    <p className="body-large text-gray-400 mb-8 max-w-2xl mx-auto">
                        Our enterprise team will work with you to build a custom package that fits your exact requirements.
                    </p>
                    <Link to="/contact" className="btn-primary">
                        Contact Enterprise Sales
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PricingPage;
