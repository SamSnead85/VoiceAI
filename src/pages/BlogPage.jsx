import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, User, Tag, ArrowRight, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const categories = [
    { name: 'All', slug: 'all' },
    { name: 'Industry Insights', slug: 'industry' },
    { name: 'Product Updates', slug: 'product' },
    { name: 'Case Studies', slug: 'case-studies' },
    { name: 'Best Practices', slug: 'best-practices' },
    { name: 'AI & Technology', slug: 'technology' },
];

const featuredPost = {
    id: 1,
    title: 'The Future of Voice AI in Healthcare: 2025 Predictions',
    excerpt: 'Explore how voice AI is revolutionizing patient care, from automated appointment scheduling to clinical documentation and beyond.',
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    author: 'Dr. Sarah Chen',
    authorRole: 'Head of Healthcare Solutions',
    date: 'Dec 20, 2024',
    readTime: '8 min read',
};

const posts = [
    {
        id: 2,
        title: 'How Cigna Reduced Call Center Costs by 65% with Voice AI',
        excerpt: 'A deep dive into Cigna\'s successful implementation of conversational AI for member services.',
        category: 'Case Studies',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600',
        author: 'Michael Torres',
        date: 'Dec 18, 2024',
        readTime: '6 min read',
    },
    {
        id: 3,
        title: 'Best Practices for Training Voice AI in Financial Services',
        excerpt: 'Learn how to optimize your voice agent for complex financial conversations and compliance.',
        category: 'Best Practices',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600',
        author: 'Jennifer Wu',
        date: 'Dec 15, 2024',
        readTime: '5 min read',
    },
    {
        id: 4,
        title: 'Announcing VoiceAI 3.0: Multi-Language Support & More',
        excerpt: 'Our biggest release yet brings support for 40+ languages and real-time emotion detection.',
        category: 'Product Updates',
        image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600',
        author: 'Alex Kim',
        date: 'Dec 12, 2024',
        readTime: '4 min read',
    },
    {
        id: 5,
        title: 'Understanding Conversational AI: A Technical Deep Dive',
        excerpt: 'Explore the architecture behind modern voice AI systems and how they process natural language.',
        category: 'AI & Technology',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
        author: 'Dr. James Lee',
        date: 'Dec 10, 2024',
        readTime: '10 min read',
    },
    {
        id: 6,
        title: '5 Metrics Every Voice AI Manager Should Track',
        excerpt: 'Key performance indicators to measure the success of your voice AI implementation.',
        category: 'Best Practices',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
        author: 'Rachel Green',
        date: 'Dec 8, 2024',
        readTime: '5 min read',
    },
];

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = posts.filter(post => {
        const matchesCategory = activeCategory === 'all' ||
            post.category.toLowerCase().replace(/\s+/g, '-') === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="section-container px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                            VoiceAI Blog
                        </span>
                        <h1 className="heading-1 text-white mb-4">
                            Insights & Resources
                        </h1>
                        <p className="body-large text-gray-400 max-w-2xl mx-auto">
                            Expert perspectives on voice AI, customer experience, and enterprise innovation
                        </p>
                    </motion.div>

                    {/* Search */}
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-30">
                <div className="section-container px-4 lg:px-8">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {categories.map((category) => (
                            <button
                                key={category.slug}
                                onClick={() => setActiveCategory(category.slug)}
                                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${activeCategory === category.slug
                                        ? 'bg-teal-500 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16">
                <div className="section-container px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg"
                    >
                        <div className="grid lg:grid-cols-2">
                            <div className="aspect-video lg:aspect-auto bg-gray-200">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4 w-fit">
                                    {featuredPost.category}
                                </span>
                                <h2 className="font-display font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                                        {featuredPost.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{featuredPost.author}</p>
                                        <p className="text-sm text-gray-500">{featuredPost.authorRole}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                    <span>{featuredPost.date}</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {featuredPost.readTime}
                                    </span>
                                </div>
                                <Link
                                    to={`/blog/${featuredPost.id}`}
                                    className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                                >
                                    Read Article
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16 bg-gray-50">
                <div className="section-container px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium mb-3">
                                        {post.category}
                                    </span>
                                    <h3 className="font-display font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-sm text-gray-500">{post.author}</span>
                                        <span className="text-sm text-gray-500 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="btn-secondary">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
                <div className="section-container px-4 lg:px-8 text-center">
                    <BookOpen className="w-12 h-12 text-white/80 mx-auto mb-6" />
                    <h2 className="heading-2 text-white mb-4">
                        Stay Updated
                    </h2>
                    <p className="body-large text-white/80 mb-8 max-w-2xl mx-auto">
                        Get the latest voice AI insights and industry news delivered to your inbox weekly.
                    </p>
                    <form className="max-w-md mx-auto flex gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-xl focus:ring-2 focus:ring-white"
                        />
                        <button type="submit" className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;
