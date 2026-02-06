import { motion } from 'motion/react';
import { Target, Users, Lightbulb, Award, Globe, TrendingUp } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description:
        'Our mission is to democratize AI and make advanced automation accessible to businesses of all sizes.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description:
        'We constantly push the boundaries of what\'s possible with AI and machine learning technology.',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description:
        'Every decision we make is guided by our commitment to delivering exceptional value to our customers.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do, from product development to customer support.',
    },
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to transform business automation' },
    { year: '2021', title: '1,000 Customers', description: 'Reached our first major milestone in customer adoption' },
    { year: '2023', title: 'Series B Funding', description: 'Raised $50M to accelerate product development' },
    { year: '2024', title: '50K+ Users', description: 'Became the leading AI automation platform globally' },
    { year: '2026', title: 'AI Innovation Award', description: 'Recognized as the most innovative AI company' },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      bio: 'Former VP at Google AI, 15+ years in machine learning',
      initials: 'AT',
    },
    {
      name: 'Priya Patel',
      role: 'CTO',
      bio: 'Ex-Amazon, PhD in Computer Science from MIT',
      initials: 'PP',
    },
    {
      name: 'Marcus Johnson',
      role: 'VP of Product',
      bio: 'Previously led product at Microsoft Azure',
      initials: 'MJ',
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Head of AI Research',
      bio: 'Published 50+ papers, former Stanford professor',
      initials: 'SR',
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
              duration: 30,
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
              Building the Future of AI Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to empower every business with intelligent automation that
              works seamlessly, scales effortlessly, and delivers measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Claritiy was born from a simple observation: businesses were struggling to
                  keep up with the pace of technological change. Traditional automation
                  solutions were complex, expensive, and required extensive technical expertise.
                </p>
                <p>
                  Our founders, with decades of combined experience at leading tech companies,
                  envisioned a different approach. They believed AI automation should be
                  accessible, intuitive, and powerful enough to transform any business.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 businesses worldwide, helping them
                  automate millions of tasks and unlock unprecedented productivity gains. But
                  we're just getting started.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <Globe className="w-20 h-20 mx-auto mb-4 text-orange-500" />
                  <p className="text-gray-600">Team collaboration video</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Behind the scenes at AI Nexus
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-orange-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-200 to-pink-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                      <div className="text-2xl font-bold text-orange-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Experienced leaders driving innovation in AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-orange-100"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 text-center mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50K+', label: 'Global Customers' },
              { value: '150+', label: 'Team Members' },
              { value: '25+', label: 'Countries' },
              { value: '$50M', label: 'Funding Raised' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
