const services = [
  {
    id: 1,
    title: 'Custom Web Development',
    icon: '💻',
    description:
      'Bespoke web applications built with modern technologies for optimal performance and scalability.',
    category: 'Development',
    features: [
      'React/Next.js',
      'Node.js/Express',
      'API Integration',
      'Database Design',
    ],
    price: 'Starting from ₹2,00,000',
    duration: '4-8 weeks',
    popular: true,
    deliverables: [
      'Responsive web application',
      'Source code',
      'Technical documentation',
      '3 months support',
    ],
  },
  {
    id: 2,
    title: 'UI/UX Design',
    icon: '🎨',
    description:
      'User-centered design solutions that enhance engagement and drive conversions.',
    category: 'Design',
    features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
    price: 'Starting from ₹1,20,000',
    duration: '2-4 weeks',
    popular: false,
    deliverables: [
      'Complete design system',
      'Interactive prototypes',
      'User flow diagrams',
      'Design assets',
    ],
  },
  {
    id: 3,
    title: 'E-commerce Solutions',
    icon: '🛒',
    description:
      'Scalable online stores with secure payment integration and inventory management.',
    category: 'Development',
    features: [
      'Shopify/WordPress',
      'Payment Gateways',
      'Inventory System',
      'Analytics',
    ],
    price: 'Starting from ₹2,50,000',
    duration: '6-10 weeks',
    popular: true,
    deliverables: [
      'Fully functional store',
      'Admin dashboard',
      'Payment integration',
      'SEO optimization',
    ],
  },
  {
    id: 4,
    title: 'Mobile App Development',
    icon: '📱',
    description:
      'Cross-platform mobile applications for iOS and Android using React Native.',
    category: 'Development',
    features: [
      'React Native',
      'iOS & Android',
      'Push Notifications',
      'App Store Deployment',
    ],
    price: 'Starting from ₹3,50,000',
    duration: '8-12 weeks',
    popular: false,
    deliverables: [
      'Native mobile apps',
      'App store submission',
      'Source code',
      '6 months support',
    ],
  },
  {
    id: 5,
    title: 'DevOps & Deployment',
    icon: '⚙️',
    description:
      'Streamlined deployment pipelines and infrastructure management for reliable applications.',
    category: 'Infrastructure',
    features: [
      'CI/CD Pipeline',
      'Docker Containers',
      'AWS/Azure',
      'Monitoring',
    ],
    price: 'Starting from ₹1,50,000',
    duration: '2-3 weeks',
    popular: false,
    deliverables: [
      'Deployment pipeline',
      'Infrastructure setup',
      'Monitoring dashboard',
      'Documentation',
    ],
  },
  {
    id: 6,
    title: 'Technical Consultation',
    icon: '🔍',
    description:
      'Expert guidance on technology stack, architecture, and digital strategy.',
    category: 'Consulting',
    features: [
      'Tech Stack Review',
      'Architecture Design',
      'Performance Audit',
      'Scalability',
    ],
    price: '₹3,000 / hour',
    duration: 'Flexible',
    popular: false,
    deliverables: [
      'Detailed report',
      'Architecture diagrams',
      'Implementation plan',
      'Follow-up sessions',
    ],
  },
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: 'Discovery Call',
    description: 'We discuss your requirements, goals, and vision.',
    duration: '30-60 mins',
  },
  {
    step: 2,
    title: 'Proposal & Planning',
    description: 'Detailed project scope, timeline, and cost estimation.',
    duration: '2-3 days',
  },
  {
    step: 3,
    title: 'Development Phase',
    description: 'Agile development with regular updates and demos.',
    duration: 'Project dependent',
  },
  {
    step: 4,
    title: 'Launch & Support',
    description: 'Deployment, training, and ongoing maintenance.',
    duration: 'Ongoing',
  },
];

// Statistics
const stats = [
  { number: '50+', label: 'Projects Delivered', icon: '🚀' },
  { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
  { number: '40+', label: 'Happy Clients', icon: '😊' },
  { number: '24/7', label: 'Support Available', icon: '🛡️' },
];

export { services, processSteps, stats };
