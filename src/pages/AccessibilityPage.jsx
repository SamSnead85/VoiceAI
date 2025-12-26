import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage = () => {
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
                        <h1 className="heading-1 text-gray-900 mb-4">Accessibility Statement</h1>
                        <p className="text-gray-600">Last updated: December 20, 2024</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="section-container px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto prose prose-lg">

                        <h2>Our Commitment</h2>
                        <p>
                            VoiceAI is committed to ensuring digital accessibility for people with disabilities.
                            We are continually improving the user experience for everyone and applying the relevant
                            accessibility standards.
                        </p>

                        <h2>Conformance Status</h2>
                        <p>
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and
                            developers to improve accessibility for people with disabilities. It defines three levels
                            of conformance: Level A, Level AA, and Level AAA. VoiceAI strives to conform to
                            WCAG 2.1 Level AA.
                        </p>

                        <h2>Accessibility Features</h2>
                        <p>We have implemented the following accessibility features:</p>

                        <h3>Keyboard Navigation</h3>
                        <ul>
                            <li>All interactive elements are accessible via keyboard</li>
                            <li>Visible focus indicators on all focusable elements</li>
                            <li>Skip links to bypass navigation</li>
                            <li>Logical tab order throughout all pages</li>
                        </ul>

                        <h3>Screen Reader Support</h3>
                        <ul>
                            <li>Semantic HTML structure with proper heading hierarchy</li>
                            <li>ARIA labels and roles where appropriate</li>
                            <li>Alt text for all informative images</li>
                            <li>Form labels associated with inputs</li>
                        </ul>

                        <h3>Visual Design</h3>
                        <ul>
                            <li>Color contrast ratios meet WCAG AA standards (4.5:1 for text)</li>
                            <li>No content relies solely on color to convey information</li>
                            <li>Text can be resized up to 200% without loss of content</li>
                            <li>Reduced motion option for users with vestibular disorders</li>
                        </ul>

                        <h3>Content Structure</h3>
                        <ul>
                            <li>Clear and consistent navigation across all pages</li>
                            <li>Descriptive link text that makes sense out of context</li>
                            <li>Tables with appropriate headers and captions</li>
                            <li>Content organized with proper landmarks</li>
                        </ul>

                        <h2>Assistive Technology Compatibility</h2>
                        <p>
                            Our website has been tested with the following assistive technologies:
                        </p>
                        <ul>
                            <li>NVDA (Windows screen reader)</li>
                            <li>VoiceOver (macOS and iOS screen reader)</li>
                            <li>JAWS (Windows screen reader)</li>
                            <li>Dragon NaturallySpeaking (voice recognition)</li>
                        </ul>

                        <h2>Known Limitations</h2>
                        <p>
                            While we strive for full accessibility, some content may have limitations:
                        </p>
                        <ul>
                            <li>Some third-party embedded content may not be fully accessible</li>
                            <li>Older PDF documents may not meet accessibility standards</li>
                            <li>Some interactive charts may require alternative text descriptions</li>
                        </ul>
                        <p>
                            We are actively working to address these limitations and improve accessibility
                            across all areas of our platform.
                        </p>

                        <h2>Feedback</h2>
                        <p>
                            We welcome your feedback on the accessibility of VoiceAI. Please let us know if
                            you encounter accessibility barriers:
                        </p>
                        <ul>
                            <li>Email: accessibility@voiceai.com</li>
                            <li>Phone: 1-800-VOICE-AI (TTY available)</li>
                            <li>Contact form: Use our accessible contact form</li>
                        </ul>
                        <p>
                            We try to respond to feedback within 3 business days.
                        </p>

                        <h2>Technical Specifications</h2>
                        <p>
                            Accessibility of VoiceAI relies on the following technologies to work with
                            your web browser and assistive technologies:
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>WAI-ARIA</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>

                        <h2>Assessment Approach</h2>
                        <p>VoiceAI assessed the accessibility of this website by the following approaches:</p>
                        <ul>
                            <li>Self-evaluation using automated testing tools</li>
                            <li>External expert evaluation</li>
                            <li>User testing with people who have disabilities</li>
                        </ul>

                        <h2>Formal Approval</h2>
                        <p>
                            This accessibility statement was approved by VoiceAI's Chief Technology Officer on
                            December 20, 2024.
                        </p>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AccessibilityPage;
