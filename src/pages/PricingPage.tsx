import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import CTASection from '../components/CTASection';
import { pricingPlans } from '../data/content';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

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
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10"
          >
            No hidden fees. No long-term contracts. Start free and upgrade when you are ready.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-4 bg-white dark:bg-slate-800/50 rounded-xl p-1.5 border border-slate-200 dark:border-slate-700/50"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                !isYearly
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              Yearly
              <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.name} {...plan} isYearly={isYearly} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 pr-4 text-slate-500 dark:text-slate-400 font-medium">Feature</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.name} className="text-center py-4 px-4 text-slate-900 dark:text-white font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Student Management', starter: true, pro: true, enterprise: true },
                  { name: 'Attendance Tracking', starter: true, pro: true, enterprise: true },
                  { name: 'Fee Management', starter: true, pro: true, enterprise: true },
                  { name: 'Mobile App', starter: true, pro: true, enterprise: true },
                  { name: 'Admission CRM', starter: false, pro: true, enterprise: true },
                  { name: 'Exam Management', starter: false, pro: true, enterprise: true },
                  { name: 'AI Analytics', starter: false, pro: true, enterprise: true },
                  { name: 'Staff Payroll', starter: false, pro: true, enterprise: true },
                  { name: 'Hostel Management', starter: false, pro: false, enterprise: true },
                  { name: 'Transport Tracking', starter: false, pro: false, enterprise: true },
                  { name: 'Library Management', starter: false, pro: false, enterprise: true },
                  { name: 'Custom Integrations', starter: false, pro: false, enterprise: true },
                  { name: 'Dedicated Account Manager', starter: false, pro: false, enterprise: true },
                  { name: 'On-premise Deployment', starter: false, pro: false, enterprise: true },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3.5 pr-4 text-slate-600 dark:text-slate-300">{row.name}</td>
                    {[row.starter, row.pro, row.enterprise].map((included, i) => (
                      <td key={i} className="text-center py-3.5 px-4">
                        {included ? (
                          <span className="inline-flex w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          </span>
                        ) : (
                          <span className="text-slate-300 dark:text-slate-600">&mdash;</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Free Trial Today"
        subtitle="Get full access to all features for 14 days. No credit card required."
        primaryCTA="Start Free Trial"
        secondaryCTA="Talk to Sales"
      />
    </>
  );
}
