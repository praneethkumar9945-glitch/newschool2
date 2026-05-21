import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, BookOpen, BarChart3, Bell } from 'lucide-react';

export default function DashboardPreview() {
  const widgets = [
    { icon: Users, label: 'Total Students', value: '2,847', change: '+12%', color: 'from-blue-500 to-blue-600' },
    { icon: TrendingUp, label: 'Attendance Rate', value: '94.2%', change: '+3.1%', color: 'from-emerald-500 to-emerald-600' },
    { icon: DollarSign, label: 'Fee Collection', value: '$1.2M', change: '+18%', color: 'from-amber-500 to-amber-600' },
    { icon: BookOpen, label: 'Active Courses', value: '156', change: '+5', color: 'from-cyan-500 to-cyan-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl" />

      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs text-slate-400 font-medium">EduFlow Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-slate-400" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500" />
          </div>
        </div>

        {/* Sidebar + Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-56 border-r border-slate-100 dark:border-slate-700 p-4 gap-1">
            {['Dashboard', 'Students', 'Admissions', 'Attendance', 'Fees', 'Exams', 'Reports'].map((item, i) => (
              <div
                key={item}
                className={`px-3 py-2 rounded-lg text-xs font-medium ${
                  i === 0
                    ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {widgets.map((widget) => (
                <div
                  key={widget.label}
                  className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${widget.color} flex items-center justify-center mb-3`}>
                    <widget.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{widget.label}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">{widget.value}</span>
                    <span className="text-xs text-emerald-500 font-medium">{widget.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart placeholder */}
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Enrollment Trends</span>
                <BarChart3 className="w-4 h-4 text-slate-400" />
              </div>
              <div className="flex items-end gap-2 h-24">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-sm min-w-0"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((m) => (
                  <span key={m} className="text-[10px] text-slate-400">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
