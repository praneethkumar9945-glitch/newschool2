import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  notIncluded: string[];
  popular: boolean;
  isYearly: boolean;
  index: number;
}

export default function PricingCard({
  name,
  description,
  monthlyPrice,
  yearlyPrice,
  features,
  notIncluded,
  popular,
  isYearly,
  index,
}: PricingCardProps) {
  const price = isYearly ? yearlyPrice : monthlyPrice;
  const period = isYearly ? '/year' : '/month';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl p-8 transition-all duration-300 ${
        popular
          ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white shadow-2xl shadow-primary-500/25 scale-[1.02] lg:scale-105'
          : 'bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-amber-400 text-slate-900 text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-1 ${popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
          {name}
        </h3>
        <p className={`text-sm ${popular ? 'text-white/70' : 'text-slate-500 dark:text-slate-400'}`}>
          {description}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-bold ${popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
            ${price}
          </span>
          <span className={`text-sm ${popular ? 'text-white/60' : 'text-slate-400'}`}>{period}</span>
        </div>
        {isYearly && (
          <p className={`text-xs mt-1 ${popular ? 'text-white/60' : 'text-slate-400'}`}>
            Save ${monthlyPrice * 12 - yearlyPrice}/year
          </p>
        )}
      </div>

      <Link
        to="/contact"
        className={`block w-full text-center py-3 px-6 rounded-xl font-medium text-sm transition-all duration-200 mb-8 ${
          popular
            ? 'bg-white text-primary-600 hover:bg-slate-50 shadow-lg'
            : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg hover:shadow-primary-500/25'
        }`}
      >
        {popular ? 'Start Free Trial' : 'Get Started'}
      </Link>

      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${popular ? 'text-white/80' : 'text-emerald-500'}`} />
            <span className={`text-sm ${popular ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}`}>
              {feature}
            </span>
          </div>
        ))}
        {notIncluded.map((feature) => (
          <div key={feature} className="flex items-start gap-3 opacity-50">
            <X className={`w-4 h-4 mt-0.5 flex-shrink-0 ${popular ? 'text-white/40' : 'text-slate-300'}`} />
            <span className={`text-sm ${popular ? 'text-white/40' : 'text-slate-400'}`}>{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
