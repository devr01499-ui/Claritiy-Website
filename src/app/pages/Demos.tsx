import { motion } from 'motion/react';
import { Play, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Demos() {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);

  const demos = [
    {
      title: 'AI Agent Customer Support',
      description:
        'Watch how our AI agents handle customer inquiries with natural language understanding and real-time problem solving.',
      duration: '8:45',
      views: '25K',
      category: 'AI Agents',
      thumbnail: 'agent-support',
    },
    {
      title: 'Workflow Automation in Action',
      description:
        'See how to build complex automation workflows without writing a single line of code using our visual builder.',
      duration: '12:30',
      views: '18K',
      category: 'Automation',
      thumbnail: 'workflow',
    },
    {
      title: 'Custom AI Model Training',
      description:
        'Learn how to train custom machine learning models on your business data in just a few clicks.',
      duration: '15:20',
      views: '22K',
      category: 'AI Models',
      thumbnail: 'ml-training',
    },
    {
      title: 'Data Intelligence Dashboard',
      description:
        'Explore our AI-powered analytics platform that turns raw data into actionable insights automatically.',
      duration: '10:15',
      views: '16K',
      category: 'Analytics',
      thumbnail: 'analytics',
    },
    {
      title: 'Multi-Channel Automation',
      description:
        'Automate tasks across email, Slack, CRM, and 500+ other apps with seamless integration.',
      duration: '9:30',
      views: '20K',
      category: 'Automation',
      thumbnail: 'multi-channel',
    },
    {
      title: 'Enterprise Security Features',
      description:
        'Deep dive into our security suite with AI-powered threat detection and compliance monitoring.',
      duration: '11:45',
      views: '14K',
      category: 'Security',
      thumbnail: 'security',
    },
  ];

  const useCases = [
    {
      industry: 'E-Commerce',
      title: 'Automated Order Processing',
      description: 'How a leading retailer automated 95% of their order fulfillment process',
      results: ['10x faster processing', '95% cost reduction', '99.9% accuracy'],
    },
    {
      industry: 'Healthcare',
      title: 'Patient Data Management',
      description: 'HIPAA-compliant automation for patient record processing and scheduling',
      results: ['80% time saved', 'Zero compliance issues', '50K+ patients managed'],
    },
    {
      industry: 'Finance',
      title: 'Financial Report Automation',
      description: 'Automated financial reporting and compliance checks for a Fortune 500 bank',
      results: ['90% faster reports', 'Real-time insights', '$2M annual savings'],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl"
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
              See Claritiy in Action
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Watch comprehensive demos and real-world use cases showcasing how AI
              automation transforms business operations.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2"
              >
                Schedule Live Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Featured Demo
            </h2>
            <p className="text-xl text-gray-600">
              Complete platform walkthrough - Everything you need to know
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-100"
          >
            <div className="aspect-video bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 flex items-center justify-center relative group cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl"
              >
                <Play className="w-12 h-12 text-orange-500 ml-1" />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Complete Platform Overview
                </h3>
                <div className="flex items-center gap-4 text-white/90 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    25:30
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    45K views
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    4.9/5
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Library */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Product Demos
            </h2>
            <p className="text-xl text-gray-600">
              Detailed walkthroughs for each feature and use case
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-orange-100 overflow-hidden cursor-pointer"
                onClick={() => setSelectedDemo(index)}
              >
                <div className="relative aspect-video bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Play className="w-8 h-8 text-orange-500 ml-1" />
                  </motion.div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                      {demo.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {demo.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{demo.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {demo.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {demo.views} views
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how companies across industries achieve remarkable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 border border-orange-100"
              >
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-medium mb-4">
                  {useCase.industry}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>

                {/* Video Placeholder */}
                <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100">
                  <div className="aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-10 h-10 mx-auto mb-2 text-orange-500" />
                      <p className="text-sm text-gray-600">Case study video</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                  {useCase.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
                      {result}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Try Our Interactive Demo
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Get hands-on experience with Claritiy. No installation required, start
                    automating in minutes.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Pre-built workflows to explore',
                      'Real-time AI agent interactions',
                      'Full access to all features',
                      'No credit card required',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Play className="w-3 h-3 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2"
                    >
                      Launch Interactive Demo
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center p-12"
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-3xl flex items-center justify-center shadow-xl">
                    <Play className="w-16 h-16 text-orange-500" />
                  </div>
                  <p className="text-gray-600 text-lg">Interactive platform demo</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Experience the full power of AI automation
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Schedule a personalized demo with our team and discover how Claritiy can
              transform your business
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Schedule Personal Demo
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
