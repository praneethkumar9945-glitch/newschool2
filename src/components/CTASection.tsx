import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  primaryLink?: string;
  secondaryLink?: string;
}

export default function CTASection({
  title = 'Ready to Transform Your School?',
  subtitle = 'Join 2,500+ schools already using EduFlow to streamline operations, boost admissions, and engage parents.',
  primaryCTA = 'Start Free Trial',
  secondaryCTA = 'Book a Demo',
  primaryLink = '/pricing',
  secondaryLink = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              No credit card required
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={primaryLink}
                className="px-8 py-3.5 bg-white text-primary-600 rounded-xl font-semibold text-sm hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                {primaryCTA}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={secondaryLink}
                className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-sm hover:bg-white/20 border border-white/20 transition-all"
              >
                {secondaryCTA}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
