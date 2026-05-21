import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, Cpu, Lock } from 'lucide-react';
import CTASection from '../components/CTASection';
import { timeline, team } from '../data/content';

const values = [
  { icon: Users, title: 'Student-First', description: 'Every feature we build starts with the question: does this help students succeed?' },
  { icon: Shield, title: 'Trust & Security', description: 'We treat school data with the same rigor as financial institutions treat money.' },
  { icon: Globe, title: 'Global Accessibility', description: 'Education is universal. Our platform works in 40+ countries, 20+ languages.' },
  { icon: Cpu, title: 'Innovation', description: 'We invest heavily in AI and automation to keep schools ahead of the curve.' },
];

const techStack = [
  'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS',
  'Docker', 'Kubernetes', 'GraphQL', 'TensorFlow', 'Kafka', 'Terraform',
];

const trustBadges = [
  { icon: Shield, label: 'FERPA Compliant' },
  { icon: Lock, label: 'SOC 2 Type II' },
  { icon: Award, label: 'ISO 27001' },
  { icon: Globe, label: 'GDPR Ready' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-primary-50/30 to-secondary-50/20 dark:from-slate-950 dark:via-primary-950/20 dark:to-secondary-950/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-primary-400/15 to-secondary-400/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-3"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Empowering Education with{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Technology
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
          >
            We believe every school deserves world-class technology. Our mission is to make school management effortless so educators can focus on what matters most: teaching.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/10 rounded-2xl p-8 lg:p-10 border border-primary-200/50 dark:border-primary-800/50"
            >
              <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-4">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To democratize school management technology by providing an affordable, powerful, and easy-to-use platform that replaces fragmented tools with one unified system. We help schools save time, reduce costs, and improve educational outcomes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-secondary-50 to-secondary-100/50 dark:from-secondary-900/20 dark:to-secondary-800/10 rounded-2xl p-8 lg:p-10 border border-secondary-200/50 dark:border-secondary-800/50"
            >
              <h2 className="text-2xl font-bold text-secondary-700 dark:text-secondary-400 mb-4">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A world where every school, regardless of size or budget, has access to enterprise-grade management tools. We envision AI-powered education systems that predict, prevent, and personalize learning at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white"
            >
              Our Core Values
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50 hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white"
            >
              Our Journey
            </motion.h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-700/50 inline-block">
                      <span className="text-xs font-bold text-primary-600 dark:text-primary-400">{item.year}</span>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white mt-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 border-4 border-white dark:border-slate-950 shadow-md mt-6" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white"
            >
              Leadership Team
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50 text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">{member.role}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 dark:text-white mb-8"
          >
            Built with Modern Tech
          </motion.h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                <badge.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
