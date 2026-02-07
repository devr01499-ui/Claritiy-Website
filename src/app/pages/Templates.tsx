import { motion } from 'motion/react';
import {
    FileJson,
    Download,
    Lock,
    ExternalLink,
    CheckCircle,
    Zap,
    ArrowRight,
    BookOpen,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

import { supabase } from '../../lib/supabase';

const templates = [
    // This will now be dynamic, but we keep the static list as a fallback
    {
        id: 1,
        name: 'Customer Support Bot Workflow',
        description: 'Complete automation for handling customer queries via WhatsApp and Telegram.',
        type: 'free',
        category: 'Chatbots',
        jsonFile: 'support_bot.json',
        features: ['WhatsApp Integration', 'Lead Management', 'Auto-reply logic'],
        guideUrl: '/docs/support-bot-guide',
    },
    {
        id: 2,
        name: 'E-commerce Inventory Sync',
        description: 'Sync inventory between Shopify and Google Sheets automatically.',
        type: 'premium',
        price: '$29',
        category: 'Automation',
        jsonFile: 'inventory_sync.json',
        features: ['Real-time sync', 'Multi-store support', 'Error reporting'],
        guideUrl: '/docs/inventory-sync-guide',
    },
    {
        id: 3,
        name: 'AI Lead Researcher',
        description: 'Automatically research leads from LinkedIn and enrich data using AI.',
        type: 'premium',
        price: '$49',
        category: 'Lead Gen',
        jsonFile: 'lead_researcher.json',
        features: ['LinkedIn Scraper', 'AI Analysis', 'CRM Integration'],
        guideUrl: '/docs/lead-research-guide',
    },
    {
        id: 4,
        name: 'Social Media Content Generator',
        description: 'Generate and schedule 30 days of social media content in minutes.',
        type: 'free',
        category: 'Content',
        jsonFile: 'content_gen.json',
        features: ['Multi-platform', 'AI Video/Image prompts', 'Scheduling'],
        guideUrl: '/docs/content-gen-guide',
    },
];

export function Templates() {
    const [filter, setFilter] = useState('all');
    const [templateList, setTemplateList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const { data, error } = await supabase
                    .from('templates')
                    .select('*');

                if (error) throw error;
                if (data && data.length > 0) {
                    setTemplateList(data);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching templates:', error);
                setLoading(false);
            }
        };
        fetchTemplates();
    }, []);

    const filteredTemplates = (templateList.length > 0 ? templateList : templates).filter(t => {
        if (filter === 'all') return true;
        return t.type === filter;
    });

    const handlePayment = async (templateId: string, price: string) => {
        try {
            const response = await fetch('http://localhost:5000/api/payments/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    templateId,
                    userId: 'guest_user', // Will be replaced by actual user ID when auth is integrated
                }),
            });

            const session = await response.json();
            const stripe = await stripePromise;

            if (stripe && session.id) {
                await (stripe as any).redirectToCheckout({
                    sessionId: session.id,
                });
            }
        } catch (error) {
            console.error('Payment Error:', error);
            alert('Payment failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                        AI Automation Templates
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready-to-use workflows for your business. Download the JSON, import into your favorite tool, and start automating in minutes.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12">
                    {['all', 'free', 'premium'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${filter === type
                                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {type} Templates
                        </button>
                    ))}
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-orange-100 rounded-xl">
                                        <FileJson className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${template.type === 'free'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-purple-100 text-purple-700'
                                        }`}>
                                        {template.type === 'free' ? 'Free' : `Premium - ${template.price}`}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">{template.description}</p>

                                <div className="space-y-3 mb-8">
                                    {template.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-3">
                                    {template.type === 'free' ? (
                                        <button
                                            onClick={() => {
                                                const link = document.createElement('a');
                                                link.href = `/templates/${template.jsonFile}`;
                                                link.download = template.jsonFile;
                                                link.click();
                                            }}
                                            className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                                        >
                                            <Download className="w-4 h-4" />
                                            Download JSON
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handlePayment(template._id || template.id.toString(), template.price || '0')}
                                            className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
                                        >
                                            <Lock className="w-4 h-4" />
                                            Unlock for {template.price}
                                        </button>
                                    )}

                                    <Link
                                        to={template.guideUrl}
                                        className="flex items-center justify-center gap-2 w-full py-3 text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        Read Guide
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-12 bg-gray-900 rounded-3xl text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Zap className="w-64 h-64 text-orange-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 relative z-10">Need a custom automation?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                        Contact our team to build bespoke AI agents and workflows specifically for your company's unique requirements.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold shadow-lg relative z-10"
                        >
                            Get a Custom Workflow
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
