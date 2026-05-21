import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import { features } from '../data/content';

const highlights = [
  {
    title: 'Admission CRM Pipeline',
    description: 'Track every inquiry from first contact to enrollment. Automated follow-ups, lead scoring, and conversion analytics help you boost enrollment rates by up to 40%.',
    points: ['Lead capture from web, social, walk-ins', 'Automated email & SMS follow-ups', 'Pipeline visualization & analytics', 'Application document management'],
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Predict student performance, identify at-risk students, and make data-driven decisions with machine learning models trained on educational data.',
    points: ['Dropout risk prediction', 'Performance trend analysis', 'Attendance pattern detection', 'Custom report builder'],
  },
  {
    title: 'Unified Communication Hub',
    description: 'Reach parents, students, and staff through their preferred channel. Automated triggers ensure no one misses important updates.',
    points: ['Multi-channel: SMS, email, push, in-app', 'Automated attendance & fee alerts', 'Circular and event broadcasting', 'Two-way parent-teacher messaging'],
  },
];

export default function FeaturesPage() {
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
            Features
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            12+ Powerful Modules,{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              One Platform
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Every feature is designed to reduce manual work, improve communication, and give you real-time visibility into your school operations.
          </motion.p>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {highlights.map((highlight, i) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {highlight.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {highlight.description}
                </p>
                <div className="space-y-3 mb-8">
                  {highlight.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/modules"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={`rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 p-8 border border-slate-200/50 dark:border-slate-700/50 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-4">
                  {highlight.points.map((point, j) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 }}
                      className="bg-white dark:bg-slate-700/50 rounded-xl p-4 border border-slate-100 dark:border-slate-600/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xs font-bold">
                          {j + 1}
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{point}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
