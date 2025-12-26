import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage = () => {
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
                        <h1 className="heading-1 text-gray-900 mb-4">Terms of Service</h1>
                        <p className="text-gray-600">Last updated: {lastUpdated}</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="section-container px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto prose prose-lg">

                        <h2>1. Agreement to Terms</h2>
                        <p>
                            By accessing or using VoiceAI's services, you agree to be bound by these Terms of Service
                            and all applicable laws and regulations. If you do not agree with any of these terms,
                            you are prohibited from using our services.
                        </p>

                        <h2>2. Description of Services</h2>
                        <p>
                            VoiceAI provides enterprise voice AI solutions including but not limited to:
                        </p>
                        <ul>
                            <li>Conversational AI voice agents</li>
                            <li>Call analytics and transcription services</li>
                            <li>API access for voice AI integration</li>
                            <li>Dashboard and management tools</li>
                        </ul>

                        <h2>3. Account Registration</h2>
                        <p>
                            To use our services, you must create an account. You agree to:
                        </p>
                        <ul>
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Promptly notify us of any unauthorized access</li>
                            <li>Accept responsibility for all activities under your account</li>
                        </ul>

                        <h2>4. Acceptable Use</h2>
                        <p>You agree not to use our services to:</p>
                        <ul>
                            <li>Violate any applicable laws or regulations</li>
                            <li>Infringe on intellectual property rights</li>
                            <li>Transmit malware or harmful code</li>
                            <li>Engage in fraudulent activities</li>
                            <li>Harass, abuse, or harm others</li>
                            <li>Interfere with the operation of our services</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                        </ul>

                        <h2>5. Payment Terms</h2>
                        <ul>
                            <li>Fees are charged according to your selected plan</li>
                            <li>All fees are non-refundable unless otherwise stated</li>
                            <li>We may change pricing with 30 days notice</li>
                            <li>Overdue payments may result in service suspension</li>
                        </ul>

                        <h2>6. Service Level Agreement</h2>
                        <p>
                            Enterprise customers may be eligible for our Service Level Agreement (SLA) which provides:
                        </p>
                        <ul>
                            <li>99.9% uptime guarantee</li>
                            <li>Service credits for downtime</li>
                            <li>Priority support response times</li>
                        </ul>

                        <h2>7. Intellectual Property</h2>
                        <p>
                            VoiceAI retains all rights to our platform, technology, and branding. You retain
                            ownership of your data and content. By using our services, you grant us a limited
                            license to process your data as necessary to provide the services.
                        </p>

                        <h2>8. Data Processing</h2>
                        <p>
                            For customers processing personal data through our services, our Data Processing
                            Agreement (DPA) governs data processing activities. Healthcare customers are
                            eligible for a Business Associate Agreement (BAA).
                        </p>

                        <h2>9. Confidentiality</h2>
                        <p>
                            Both parties agree to maintain the confidentiality of sensitive business information
                            disclosed during the course of our relationship.
                        </p>

                        <h2>10. Warranties and Disclaimers</h2>
                        <p>
                            We provide our services "as is" without warranties of any kind, express or implied.
                            We do not warrant that our services will be uninterrupted, secure, or error-free.
                        </p>

                        <h2>11. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, VoiceAI shall not be liable for any indirect,
                            incidental, special, consequential, or punitive damages resulting from your use of
                            our services.
                        </p>

                        <h2>12. Indemnification</h2>
                        <p>
                            You agree to indemnify and hold harmless VoiceAI from any claims, damages, or expenses
                            arising from your use of our services or violation of these terms.
                        </p>

                        <h2>13. Termination</h2>
                        <p>
                            Either party may terminate this agreement with 30 days written notice. We may
                            suspend or terminate your access immediately for violations of these terms.
                        </p>

                        <h2>14. Governing Law</h2>
                        <p>
                            These terms shall be governed by the laws of the State of California. Any disputes
                            shall be resolved in the courts of San Francisco County, California.
                        </p>

                        <h2>15. Changes to Terms</h2>
                        <p>
                            We may modify these terms at any time. Continued use of our services after changes
                            constitutes acceptance of the modified terms.
                        </p>

                        <h2>16. Contact</h2>
                        <p>
                            For questions about these Terms of Service, contact us at legal@voiceai.com.
                        </p>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TermsPage;
