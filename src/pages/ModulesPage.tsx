import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { modules } from '../data/content';

export default function ModulesPage() {
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const selected = modules.find((m) => m.id === activeModule)!;

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
            ERP Modules
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Integrated Modules for{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Every Need
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Each module works standalone and integrates seamlessly with others. Pick what you need, add more as you grow.
          </motion.p>
        </div>
      </section>

      {/* Interactive Module Browser */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar */}
            <div className="space-y-2">
              {modules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                    activeModule === mod.id
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <mod.icon className="w-5 h-5 flex-shrink-0" />
                  {mod.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 lg:p-10 border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center shadow-lg`}>
                    <selected.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{selected.title}</h2>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                  {selected.description}
                </p>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
                  Key Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {selected.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 bg-white dark:bg-slate-700/50 rounded-xl px-4 py-3 border border-slate-100 dark:border-slate-600/50"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Module Cards Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              All Modules at a Glance
            </motion.h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Click any module to explore its capabilities in detail above.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, i) => (
              <motion.button
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => {
                  setActiveModule(mod.id);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  activeModule === mod.id
                    ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 shadow-lg'
                    : 'bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50 hover:border-primary-200 dark:hover:border-primary-800'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <mod.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">{mod.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{mod.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
