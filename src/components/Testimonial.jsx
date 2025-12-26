import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonial = () => {
    return (
        <section id="customers" className="section-padding bg-white">
            <div className="section-container px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="p-10 lg:p-16 rounded-[32px] bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg relative">
                        {/* Quote Icon */}
                        <div className="absolute top-8 left-8 w-12 h-12 rounded-xl gradient-hero flex items-center justify-center opacity-20">
                            <Quote className="w-6 h-6 text-white" />
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-8">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className="w-6 h-6 fill-coral-accent text-coral-accent"
                                />
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-center mb-10">
                            <p className="text-2xl lg:text-3xl text-gray-900 font-medium leading-relaxed">
                                "The voice AI handles routine inquiries flawlessly, freeing our human agents to focus on complex cases requiring empathy and judgment.{' '}
                                <span className="gradient-text">Our members can't tell the difference.</span>"
                            </p>
                        </blockquote>

                        {/* Author */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-white">SJ</span>
                            </div>
                            <div className="text-center">
                                <div className="font-display font-semibold text-lg text-gray-900">
                                    Sarah Johnson
                                </div>
                                <div className="text-gray-500">
                                    VP of Member Services, Molina Healthcare
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonial;
