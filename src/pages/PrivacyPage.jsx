import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage = () => {
    const lastUpdated = 'December 20, 2024';

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-16 bg-gray-50">
                <div className="section-container px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="heading-1 text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-600">Last updated: {lastUpdated}</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="section-container px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto prose prose-lg">

                        <h2>1. Introduction</h2>
                        <p>
                            VoiceAI, Inc. ("VoiceAI," "we," "us," or "our") is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                            when you use our voice AI platform and services.
                        </p>

                        <h2>2. Information We Collect</h2>
                        <h3>2.1 Information You Provide</h3>
                        <ul>
                            <li><strong>Account Information:</strong> Name, email address, company name, phone number</li>
                            <li><strong>Payment Information:</strong> Billing address, payment card details (processed by our payment provider)</li>
                            <li><strong>Communications:</strong> Support tickets, emails, and feedback you send us</li>
                        </ul>

                        <h3>2.2 Information We Collect Automatically</h3>
                        <ul>
                            <li><strong>Usage Data:</strong> API calls, feature usage, call volumes, and performance metrics</li>
                            <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                            <li><strong>Cookies:</strong> Session cookies, analytics cookies, preference cookies</li>
                        </ul>

                        <h3>2.3 Voice and Call Data</h3>
                        <p>
                            When you use our voice AI services, we process voice data and call recordings as directed
                            by you. This data is processed in accordance with our Data Processing Agreement and applicable
                            regulations including HIPAA for healthcare data.
                        </p>

                        <h2>3. How We Use Your Information</h2>
                        <ul>
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process transactions and send related information</li>
                            <li>Respond to your comments, questions, and requests</li>
                            <li>Send technical notices, updates, and security alerts</li>
                            <li>Monitor and analyze trends, usage, and activities</li>
                            <li>Detect, investigate, and prevent fraudulent transactions</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <h2>4. Data Sharing and Disclosure</h2>
                        <p>We may share your information with:</p>
                        <ul>
                            <li><strong>Service Providers:</strong> Third parties that perform services on our behalf</li>
                            <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of assets</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>With Your Consent:</strong> When you have given us permission to share</li>
                        </ul>

                        <h2>5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your data, including:
                        </p>
                        <ul>
                            <li>AES-256 encryption for data at rest</li>
                            <li>TLS 1.3 encryption for data in transit</li>
                            <li>SOC 2 Type II certified data centers</li>
                            <li>Regular security audits and penetration testing</li>
                            <li>Access controls and authentication requirements</li>
                        </ul>

                        <h2>6. Data Retention</h2>
                        <p>
                            We retain your personal information for as long as necessary to provide our services and
                            fulfill the purposes described in this policy. Call recordings and transcripts are retained
                            according to your account settings and applicable legal requirements.
                        </p>

                        <h2>7. Your Rights</h2>
                        <p>Depending on your location, you may have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Correct inaccurate data</li>
                            <li>Delete your personal information</li>
                            <li>Port your data to another service</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Withdraw consent where applicable</li>
                        </ul>

                        <h2>8. International Data Transfers</h2>
                        <p>
                            Your information may be transferred to and processed in countries other than your own.
                            We use Standard Contractual Clauses and other appropriate safeguards for international transfers.
                        </p>

                        <h2>9. Children's Privacy</h2>
                        <p>
                            Our services are not directed to individuals under 18. We do not knowingly collect
                            personal information from children.
                        </p>

                        <h2>10. Changes to This Policy</h2>
                        <p>
                            We may update this policy from time to time. We will notify you of material changes
                            by posting the new policy on this page and updating the "Last Updated" date.
                        </p>

                        <h2>11. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at:
                        </p>
                        <ul>
                            <li>Email: privacy@voiceai.com</li>
                            <li>Address: 100 Tech Boulevard, Suite 500, San Francisco, CA 94105</li>
                            <li>Data Protection Officer: dpo@voiceai.com</li>
                        </ul>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPage;
