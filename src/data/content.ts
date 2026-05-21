import {
  GraduationCap,
  UserPlus,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  Wallet,
  FileText,
  Building2,
  BookOpen,
  Bus,
  BarChart3,
  Smartphone,
} from 'lucide-react';

export const features = [
  {
    icon: GraduationCap,
    title: 'Student Management',
    description: 'Complete student lifecycle management from enrollment to graduation with digital records, profiles, and academic history tracking.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: UserPlus,
    title: 'Admission CRM',
    description: 'Streamline admissions with lead tracking, automated follow-ups, application management, and conversion analytics.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: CalendarCheck,
    title: 'Attendance Tracking',
    description: 'Real-time attendance with biometric integration, parent notifications, and comprehensive reporting dashboards.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: CreditCard,
    title: 'Fee Management',
    description: 'Automate fee collection, generate invoices, track payments, send reminders, and manage scholarships effortlessly.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: MessageSquare,
    title: 'Parent Communication',
    description: 'Multi-channel communication via SMS, email, push notifications, and in-app messaging to keep parents informed.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Wallet,
    title: 'Staff Payroll',
    description: 'Automated salary processing, tax calculations, leave management, and compliance-ready payroll generation.',
    color: 'from-rose-500 to-rose-600',
  },
  {
    icon: FileText,
    title: 'Exam Management',
    description: 'Create exam schedules, manage grades, generate report cards, and analyze performance trends across cohorts.',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Building2,
    title: 'Hostel Management',
    description: 'Room allocation, mess management, visitor logs, and maintenance tracking for residential facilities.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: BookOpen,
    title: 'Library Management',
    description: 'Catalog books, track issuances, manage digital resources, and automate fine calculations with barcode support.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Bus,
    title: 'Transport Tracking',
    description: 'GPS-enabled bus tracking, route optimization, fee management, and real-time parent notifications for safety.',
    color: 'from-sky-500 to-sky-600',
  },
  {
    icon: BarChart3,
    title: 'AI Analytics',
    description: 'Predictive analytics for student performance, dropout risk assessment, and AI-powered insights for decision making.',
    color: 'from-fuchsia-500 to-fuchsia-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Integration',
    description: 'Native mobile apps for parents, teachers, and administrators with offline support and real-time sync.',
    color: 'from-lime-500 to-lime-600',
  },
];

export const modules = [
  {
    id: 'academic',
    title: 'Academic ERP',
    description: 'Comprehensive academic management covering curriculum planning, class scheduling, teacher allocation, and academic calendar management. Track student progress across terms with detailed analytics.',
    features: ['Curriculum Planning', 'Class Scheduling', 'Teacher Allocation', 'Academic Calendar', 'Progress Tracking', 'Report Generation'],
    icon: GraduationCap,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'crm',
    title: 'CRM for Admissions',
    description: 'End-to-end admission pipeline from inquiry to enrollment. Manage leads, automate follow-ups, track conversions, and analyze funnel performance with powerful CRM tools.',
    features: ['Lead Management', 'Automated Follow-ups', 'Application Tracking', 'Conversion Analytics', 'Document Management', 'Communication Templates'],
    icon: UserPlus,
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 'hr',
    title: 'HR & Payroll',
    description: 'Complete human resource management with employee records, attendance tracking, leave management, payroll processing, and statutory compliance.',
    features: ['Employee Records', 'Leave Management', 'Payroll Processing', 'Tax Compliance', 'Performance Reviews', 'Document Vault'],
    icon: Wallet,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    id: 'finance',
    title: 'Finance & Accounting',
    description: 'Robust financial management with double-entry accounting, budget tracking, expense management, and comprehensive financial reporting.',
    features: ['General Ledger', 'Budget Management', 'Expense Tracking', 'Financial Reports', 'Audit Trail', 'Multi-currency Support'],
    icon: CreditCard,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 'examination',
    title: 'Examination',
    description: 'Complete examination management from schedule creation to result publication. Support for multiple exam patterns, grading systems, and comprehensive analytics.',
    features: ['Exam Scheduling', 'Hall Ticket Generation', 'Online Exams', 'Grading Systems', 'Result Publication', 'Performance Analytics'],
    icon: FileText,
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 'hostel',
    title: 'Hostel',
    description: 'Full hostel management with room allocation, mess management, visitor tracking, and maintenance requests. Ensure student safety and comfort.',
    features: ['Room Allocation', 'Mess Management', 'Visitor Logs', 'Maintenance Requests', 'Fee Collection', 'Safety Alerts'],
    icon: Building2,
    color: 'from-rose-500 to-rose-600',
  },
  {
    id: 'transport',
    title: 'Transport',
    description: 'GPS-enabled transport management with route planning, real-time tracking, fee management, and parent notifications for student safety.',
    features: ['Route Planning', 'GPS Tracking', 'Fee Management', 'Parent Notifications', 'Driver Management', 'Vehicle Maintenance'],
    icon: Bus,
    color: 'from-teal-500 to-teal-600',
  },
  {
    id: 'communication',
    title: 'Communication System',
    description: 'Unified communication platform with SMS, email, push notifications, and in-app messaging. Automate alerts and keep all stakeholders connected.',
    features: ['Multi-channel Messaging', 'Automated Alerts', 'Circular Management', 'Event Notifications', 'Feedback System', 'Broadcast Messages'],
    icon: MessageSquare,
    color: 'from-violet-500 to-violet-600',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small schools getting started with digital management.',
    monthlyPrice: 49,
    yearlyPrice: 470,
    features: [
      'Up to 500 students',
      'Student Management',
      'Attendance Tracking',
      'Fee Management',
      'Basic Reports',
      'Email Support',
      'Mobile App',
    ],
    notIncluded: [
      'Admission CRM',
      'AI Analytics',
      'Custom Integrations',
      'Dedicated Account Manager',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing schools that need comprehensive management tools.',
    monthlyPrice: 99,
    yearlyPrice: 950,
    features: [
      'Up to 2,000 students',
      'All Starter features',
      'Admission CRM',
      'Exam Management',
      'Parent Communication',
      'Staff Payroll',
      'AI Analytics',
      'Priority Support',
      'Custom Branding',
    ],
    notIncluded: [
      'Custom Integrations',
      'Dedicated Account Manager',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large institutions requiring full-scale ERP with premium support.',
    monthlyPrice: 199,
    yearlyPrice: 1900,
    features: [
      'Unlimited students',
      'All Professional features',
      'Hostel Management',
      'Transport Tracking',
      'Library Management',
      'Custom Integrations',
      'Dedicated Account Manager',
      'On-premise Deployment',
      'SLA Guarantee',
      'Training & Onboarding',
    ],
    notIncluded: [],
    popular: false,
  },
];

export const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Principal, Greenfield Academy',
    content: 'EduFlow transformed our school operations. We reduced administrative workload by 60% and improved parent engagement significantly. The admission CRM alone was worth the investment.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Director, Delhi Public Schools',
    content: 'Managing 5,000+ students across 3 campuses was a nightmare before EduFlow. Now everything from fees to exams runs seamlessly. The AI analytics help us make better decisions.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Admin Head, Pacific International',
    content: 'The parent communication module is exceptional. Attendance alerts, fee reminders, and exam updates reach parents instantly. Our complaint volume dropped by 80%.',
    rating: 5,
  },
  {
    name: 'Michael Torres',
    role: 'IT Manager, Sunrise Schools',
    content: 'Implementation was smooth and the support team is incredible. The mobile app keeps our teachers and parents connected 24/7. Best school ERP we have ever used.',
    rating: 5,
  },
];

export const stats = [
  { value: 2500, suffix: '+', label: 'Schools Trust Us' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 15, suffix: 'M+', label: 'Students Managed' },
  { value: 40, suffix: '+', label: 'Countries Served' },
];

export const faqs = [
  {
    question: 'How long does it take to implement EduFlow?',
    answer: 'Implementation typically takes 2-4 weeks depending on the size of your institution. Our dedicated onboarding team handles data migration, configuration, and training to ensure a smooth transition.',
  },
  {
    question: 'Can EduFlow integrate with our existing systems?',
    answer: 'Yes, EduFlow offers robust API integrations and supports connections with popular tools like Google Workspace, Microsoft 365, Tally, and custom systems through our REST API.',
  },
  {
    question: 'Is student data secure and compliant?',
    answer: 'Absolutely. We are FERPA compliant, GDPR ready, and use enterprise-grade encryption. Data is hosted on secure cloud servers with 99.9% uptime SLA and regular security audits.',
  },
  {
    question: 'Do you provide training for staff?',
    answer: 'Yes, we provide comprehensive training including live sessions, video tutorials, documentation, and ongoing support. Enterprise plans include dedicated training programs tailored to your institution.',
  },
  {
    question: 'Can parents access the platform?',
    answer: 'Yes, parents get a dedicated mobile app and web portal to track attendance, view grades, pay fees, communicate with teachers, and receive real-time notifications about their children.',
  },
  {
    question: 'What happens to our data if we decide to leave?',
    answer: 'Your data always belongs to you. We provide complete data export in standard formats at any time. We also offer a 30-day data retention period after account closure for a smooth transition.',
  },
];

export const timeline = [
  { year: '2018', title: 'Founded', description: 'EduFlow was founded with a mission to digitize school management.' },
  { year: '2019', title: 'First 100 Schools', description: 'Reached our first milestone of 100 partner schools across India.' },
  { year: '2020', title: 'Global Expansion', description: 'Expanded to 15 countries with multi-language and multi-currency support.' },
  { year: '2021', title: 'AI Analytics Launch', description: 'Launched AI-powered analytics for predictive student performance insights.' },
  { year: '2022', title: 'Series B Funding', description: 'Raised $25M Series B to accelerate product development and global reach.' },
  { year: '2023', title: '2,500+ Schools', description: 'Crossed 2,500 schools and 15 million students on the platform.' },
  { year: '2024', title: 'Mobile App 2.0', description: 'Launched next-gen mobile apps with offline support and real-time sync.' },
];

export const team = [
  { name: 'Arun Sharma', role: 'CEO & Co-Founder', description: 'Former VP at Salesforce with 15+ years in EdTech.' },
  { name: 'Priya Patel', role: 'CTO & Co-Founder', description: 'Ex-Google engineer, architect of scalable cloud systems.' },
  { name: 'David Kim', role: 'VP of Product', description: 'Product leader from HubSpot, passionate about UX.' },
  { name: 'Lisa Wang', role: 'VP of Engineering', description: 'Built distributed systems at Amazon for 10+ years.' },
];
