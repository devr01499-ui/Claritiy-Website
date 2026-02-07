import { motion } from 'motion/react';
import {
  Bot,
  Workflow,
  Brain,
  Database,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Products() {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      icon: Bot,
      name: 'AI Agents',
      category: 'automation',
      tagline: 'Intelligent virtual workforce',
      description:
        'Deploy autonomous AI agents that work 24/7 to handle customer inquiries, process data, and execute complex workflows without human intervention.',
      features: [
        'Natural language understanding',
        'Multi-channel support',
        'Self-learning capabilities',
        'Seamless integration',
      ],
      pricing: 'Starting at $99/month',
    },
    {
      icon: Zap,
      name: 'AI Automation Workflows',
      category: 'automation',
      tagline: 'Streamline your operations',
      description:
        'Build and deploy sophisticated AI automation workflows. Use our ready-to-run templates to automate repetitive tasks across your entire enterprise.',
      features: [
        'Ready-to-use JSON templates',
        'One-click deployment',
        'Custom workflow builder',
        'Real-time monitoring',
      ],
      pricing: 'Starting at $149/month',
    },
    {
      icon: Bot,
      name: 'AI Chatbots',
      category: 'automation',
      tagline: 'Omnichannel Engagement',
      description:
        'Intelligent AI chatbots for any platform. Integrate seamlessly with WhatsApp, Telegram, Website, and more to provide instant support.',
      features: [
        'WhatsApp Integration',
        'Multi-platform support',
        '24/7 Instant response',
        'Lead qualification',
      ],
      pricing: 'Starting at $79/month',
    },
    {
      icon: Brain,
      name: 'Custom AI Models',
      category: 'ai-models',
      tagline: 'Train AI on your data',
      description:
        'We create and train bespoke AI models tailored to your company requirements. From predictive analytics to specialized LLMs.',
      features: [
        'Bespoke model training',
        'Custom data ingestion',
        'Company-specific logic',
        'High accuracy tuning',
      ],
      pricing: 'Custom Quote',
    },
    {
      icon: Database,
      name: 'Data Intelligence',
      category: 'ai-models',
      tagline: 'Turn data into insights',
      description:
        'Advanced analytics platform that uses AI to discover patterns, predict trends, and generate actionable insights from your business data.',
      features: [
        'Automated reporting',
        'Predictive analytics',
        'Visual dashboards',
        'Data warehousing',
      ],
      pricing: 'Starting at $199/month',
    },
    {
      icon: Shield,
      name: 'Security Suite',
      category: 'enterprise',
      tagline: 'Enterprise-grade protection',
      description:
        'Comprehensive security solution with AI-powered threat detection, compliance monitoring, and automated incident response.',
      features: [
        'Real-time threat detection',
        'SOC 2 compliance',
        'Automated backups',
        'Role-based access',
      ],
      pricing: 'Custom pricing',
    },
    {
      icon: Zap,
      name: 'API Platform',
      category: 'enterprise',
      tagline: 'Build with our APIs',
      description:
        'Robust API infrastructure to integrate AI capabilities directly into your applications. Scalable, secure, and developer-friendly.',
      features: [
        'RESTful & GraphQL APIs',
        '99.99% uptime SLA',
        'Comprehensive docs',
        'SDKs for all languages',
      ],
      pricing: 'Starting at $499/month',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'automation', label: 'Automation' },
    { id: 'ai-models', label: 'AI Models' },
    { id: 'enterprise', label: 'Enterprise' },
  ];

  const filteredProducts =
    activeTab === 'all'
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Powerful AI Solutions
              <br />
              for Every Business Need
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intelligent automation to custom AI models, discover the complete suite
              of tools to transform your business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-orange-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-orange-600 font-medium">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{product.description}</p>

                  {/* Video Placeholder */}
                  <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100">
                    <div className="aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <product.icon className="w-12 h-12 mx-auto mb-2 text-orange-500" />
                        <p className="text-sm text-gray-600">Product demo video</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Pricing</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {product.pricing}
                      </div>
                    </div>
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Claritiy?
            </h2>
            <p className="text-xl text-gray-600">
              See how we compare to traditional automation solutions
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-orange-50 to-pink-50">
                  <th className="p-4 text-left font-semibold text-gray-900">Feature</th>
                  <th className="p-4 text-center font-semibold text-orange-600">
                    AI Nexus
                  </th>
                  <th className="p-4 text-center font-semibold text-gray-600">
                    Traditional Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Setup Time', 'Minutes', 'Weeks'],
                  ['AI-Powered', 'Yes', 'No'],
                  ['Learning Curve', 'Easy', 'Complex'],
                  ['Integration', '500+ Apps', 'Limited'],
                  ['Support', '24/7', 'Business Hours'],
                  ['Pricing', 'Flexible', 'Expensive'],
                ].map(([feature, us, them], index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-200"
                  >
                    <td className="p-4 text-gray-900">{feature}</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-2 text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5" />
                        {us}
                      </span>
                    </td>
                    <td className="p-4 text-center text-gray-500">{them}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Choose the perfect product for your needs and start your free trial today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Start Free Trial
                </motion.button>
              </Link>
              <Link to="/demos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-colors"
                >
                  Watch Product Demos
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
