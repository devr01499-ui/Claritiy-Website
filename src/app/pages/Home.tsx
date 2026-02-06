import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  BarChart,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { useRef } from 'react';

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Automation',
      description:
        'Deploy AI agents that work 24/7 to automate repetitive tasks and boost productivity by 10x.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description:
        'Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Infrastructure',
      description:
        'From startup to enterprise, our platform scales seamlessly with your growth.',
    },
    {
      icon: Users,
      title: 'Collaborative Workflows',
      description:
        'Enable your entire team to work together with AI-powered collaboration tools.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description:
        'Get real-time insights and predictive analytics to make data-driven decisions.',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Intelligence',
      description:
        'Leverage cutting-edge machine learning models trained on billions of data points.',
    },
  ];

  const stats = [
    { value: '10M+', label: 'Tasks Automated' },
    { value: '50K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      content:
        'Claritiy transformed our operations. We reduced manual work by 80% and increased efficiency dramatically.',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Founder of StartupX',
      content:
        'The AI agents are incredibly powerful. We automated our entire customer support workflow in days.',
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      content:
        'Best investment we made this year. The ROI was visible within the first month of implementation.',
      avatar: 'ER',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 mb-8"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-700">
                Trusted by 50,000+ businesses worldwide
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your Business
              <br />
              With AI Automation
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Unlock unprecedented productivity with our AI-powered automation platform.
              Deploy intelligent agents, streamline workflows, and scale your operations
              effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/demos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-orange-200 hover:border-orange-300 transition-colors"
                >
                  Watch Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-10 h-10 text-orange-500" />
                  </div>
                  <p className="text-gray-600">AI Automation Platform Demo</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Video showcasing AI agents in action
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to automate, optimize, and scale your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-orange-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about Claritiy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 border border-orange-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join thousands of companies already automating their workflows with Claritiy
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
                  Schedule a Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
