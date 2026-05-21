import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', path: '/features' },
    { name: 'Modules', path: '/modules' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Integrations', path: '/features' },
    { name: 'Changelog', path: '/' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/about' },
    { name: 'Blog', path: '/' },
    { name: 'Press Kit', path: '/about' },
    { name: 'Partners', path: '/about' },
  ],
  Resources: [
    { name: 'Documentation', path: '/' },
    { name: 'Help Center', path: '/' },
    { name: 'API Reference', path: '/' },
    { name: 'Community', path: '/' },
    { name: 'Status Page', path: '/' },
  ],
  Legal: [
    { name: 'Privacy Policy', path: '/' },
    { name: 'Terms of Service', path: '/' },
    { name: 'Cookie Policy', path: '/' },
    { name: 'GDPR', path: '/' },
    { name: 'Security', path: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">EduFlow</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              Complete School Management & Admission CRM Platform. Empowering 2,500+ schools across 40+ countries.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4" />
                <span>hello@eduflow.io</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} EduFlow ERP CRM. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
