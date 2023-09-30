import type { PricingPlan } from '/@src/components/advanced/pricing/pricing-long/PricingLong.vue'

export const services = [
  {
    id: 0,
    icon: '/assets/icons/pricing/pricing-1.svg',
    title: 'GROWTH',
    subtitle: 'Under $10,000 in monthly ad spend',
    price: {
      monthly: 250,
      yearly: 1750,
    },
    benefits: [
      {
        id: 0,
        content: 'Access to slack community',
      },
      {
        id: 1,
        content: 'Access to support team',
      },
      {
        id: 2,
        content: 'Algorithmic bidding',
      },
      {
        id: 3,
        content: 'Keyword and ASIN harvesting',
      },
    ],
    features: [
      {
        id: 0,
        content: 'Search term isolation',
      },
      {
        id: 1,
        content: 'Total sales analytics',
      },
      {
        id: 2,
        content: 'Best seller rank',
      },
      {
        id: 3,
        content: 'Placement optimization',
      },
    ],
  },
  {
    id: 1,
    icon: '/assets/icons/pricing/pricing-2.svg',
    title: 'BUSINESS',
    subtitle: 'Over $10,000 in monthly ad spend',
    price: {
      monthly: 500,
      yearly: 3500,
    },
    benefits: [
      {
        id: 0,
        content: 'All features in Growth',
      },
      {
        id: 1,
        content: '3 week checkpoint call',
      },
      {
        id: 2,
        content: '6 week checkpoint call',
      },
      {
        id: 3,
        content: 'Quarterly account assessment',
      },
    ],
    features: [
      {
        id: 0,
        content: 'Google Ads integration',
      },
      {
        id: 1,
        content: 'Automated rules and strategies',
      },
      {
        id: 2,
        content: 'Brand analytics',
      },
      {
        id: 3,
        content: 'Competitor intelligence',
      },
    ],
  },
  {
    id: 2,
    icon: '/assets/icons/pricing/pricing-3.svg',
    title: 'ENTERPRISE',
    subtitle: 'Over $300,000 in monthly ad spend',
    price: {
      monthly: 1250,
      yearly: 15000,
    },
    benefits: [
      {
        id: 0,
        content: 'All features in Business',
      },
      {
        id: 1,
        content: 'Strategic Partner Manager',
      },
      {
        id: 2,
        content: 'Quarterly Business Review',
      },
      {
        id: 3,
        content: 'Yearly Account Planning',
      },
    ],
    features: [
      {
        id: 0,
        content: 'Amazon DSP instance',
      },
      {
        id: 1,
        content: 'Amazon Marketing Cloud',
      },
      {
        id: 2,
        content: 'Datalake integration',
      },
      {
        id: 3,
        content: 'Custom dashboard',
      },
    ],
  },
]

export const compareServices = [
  {
    logo: '/assets/brands/tribe.svg',
    featured: true,
    popular: false,
    features: [
      {
        value: 'Free or $12',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
    ],
  },
  {
    logo: '/assets/brands/vonmo.svg',
    featured: false,
    popular: true,
    features: [
      {
        value: '$24',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
    ],
  },
  {
    logo: '/assets/brands/infinite.svg',
    featured: false,
    popular: false,
    features: [
      {
        value: '$16',
        label: 'Trades',
      },
      {
        value: '$15/month',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
    ],
  },
  {
    logo: '/assets/brands/kromo.svg',
    featured: false,
    popular: false,
    features: [
      {
        value: '$8',
        label: 'Trades',
      },
      {
        value: '$25/month',
        label: 'Basic Account',
      },
      {
        value: '$4.95',
        label: 'Monthly fees',
      },
    ],
  },
]

export const longServices: PricingPlan[] = [
  {
    name: 'Starter',
    logo: '/assets/brands/tribe.svg',
    price: 15,
    color: 'primary',
    featured: true,
    popular: false,
    features: [
      {
        value: 'Free or $12',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$3/mo',
        label: 'Stocks & Shares',
      },
      {
        value: '$5/mo',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.65%',
        label: 'Tax rate',
      },
      {
        value: '$0.75',
        label: 'Bank transfer',
      },
      {
        value: '$5',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Business',
    logo: '/assets/brands/tribe.svg',
    price: 25,
    color: 'secondary',
    featured: false,
    popular: true,
    features: [
      {
        value: 'Free',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$10/mo',
        label: 'Stocks & Shares',
      },
      {
        value: '$2/mo',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.55%',
        label: 'Tax rate',
      },
      {
        value: '$0.5',
        label: 'Bank transfer',
      },
      {
        value: '$3',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Enterprise',
    logo: '/assets/brands/tribe.svg',
    price: 45,
    color: 'yellow',
    featured: false,
    popular: false,
    features: [
      {
        value: 'Free',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$15/mo',
        label: 'Stocks & Shares',
      },
      {
        value: 'Free',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.25%',
        label: 'Tax rate',
      },
      {
        value: 'Free',
        label: 'Bank transfer',
      },
      {
        value: '$2',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Custom',
    logo: '/assets/brands/tribe.svg',
    price: 24,
    color: 'info',
    featured: false,
    popular: false,
    features: [
      {
        value: '$8',
        label: 'Trades',
      },
      {
        value: '$25/month',
        label: 'Basic Account',
      },
      {
        value: '$4.95',
        label: 'Monthly fees',
      },
      {
        value: 'Free or $12',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
    ],
  },
]

export const pricingSplit = {
  regularPlans: [
    {
      name: 'Community',
      logo: 'assets/icons/pricing/pricing-icon-1.svg',
      price: 'Free',
      priceLabel: 'Forever',
      features: [
        'Additional capacity not available',
        'Free for personal/non commercial projects',
      ],
    },
    {
      name: 'Starter',
      logo: 'assets/icons/pricing/pricing-icon-2.svg',
      price: '$29/mo',
      priceLabel: 'Starting at',
      features: [
        'Additional capacity starts at $10/mo',
        'Entry level plan running tests and projects',
      ],
    },
    {
      name: 'Pro',
      logo: 'assets/icons/pricing/pricing-icon-3.svg',
      price: '$299/mo',
      priceLabel: 'Starting at',
      features: [
        'Additional capacity starts at $5/mo',
        'Includes online support and app integrations',
      ],
    },
  ],
  premiumPlan: {
    name: 'Enterprise',
    logo: 'assets/icons/pricing/pricing-icon-4.svg',
    features: [
      {
        title: 'Personalization',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam stabilem appellas. Conferam tecum, quam cuique verso rem subicias.',
      },
      {
        title: 'Analytics',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam stabilem appellas. Conferam tecum, quam cuique verso rem subicias.',
      },
      {
        title: 'Security',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam stabilem appellas. Conferam tecum, quam cuique verso rem subicias.',
      },
      {
        title: 'Service level',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam stabilem appellas. Conferam tecum, quam cuique verso rem subicias.',
      },
    ],
  },
}

export const comparisonTable = {
  labels: [
    {
      cellType: 'head',
      cellLabel: '',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Included monthly usage',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Additional usage',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Analytics Retention',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'row',
      cellLabel: 'Features',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Search API',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Synonyms',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Secure environment',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Standard Analytics',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Query Suggestions',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Advanced Analytics',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Advanced APIs',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Personalization',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'A/B Testing',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Query Rules',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Single Tenancy',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Single sign on (SSO)',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Service Level Agreement (SLA)',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Additional Team Members',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Granular Team Permissions',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'row',
      cellLabel: 'Support',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Documentation & Forum',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Email support',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'App integrations',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Coding guidance',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Live chat',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Phone alerts',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Dedicated contact',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Dedicated engineer',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
  ],
  plans: [
    {
      name: 'Community',
      logo: 'assets/icons/pricing/pricing-icon-1.svg',
      price: 'Free for personal use',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['50K operations', '10K records'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['Not available'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['0'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
      ],
    },
    {
      name: 'Starter',
      logo: 'assets/icons/pricing/pricing-icon-2.svg',
      price: 'Starting at $29/mo',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['250K operations', '50K records'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['$10/month'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['7 days'],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['3'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
      ],
    },
    {
      name: 'Pro',
      logo: 'assets/icons/pricing/pricing-icon-3.svg',
      price: 'Starting at $299/mo',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['5M operations', '1M records'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['$5/month'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['30 days'],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['3'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
      ],
    },
    {
      name: 'Enterprise',
      logo: 'assets/icons/pricing/pricing-icon-4.svg',
      price: 'Contact Us',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['', 'Contact Us', ''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['Contact Us'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['up to 365 days'],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'label',
          cellLabel: ['Unlimited'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
      ],
    },
  ],
}

export const pricingBlockPlans = [
  {
    name: 'Discovery',
    text: 'Discover our premium features for 30 days , absolutely free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ['1 user', '1 Dashboard', 'Project Module', '--', '--', '--'],
  },
  {
    name: 'Manager',
    text: 'Discover our premium features for 30 days , absolutely free',
    monthlyPrice: 32,
    yearlyPrice: 350,
    features: [
      '5 users',
      '2 Dashboard',
      'Project Module',
      'Accounting Module',
      'CRM Module',
      '--',
    ],
  },
  {
    name: 'Executive',
    text: 'Discover our premium features for 30 days , absolutely free',
    monthlyPrice: 55,
    yearlyPrice: 490,
    features: [
      '15 users',
      '3 Dashboards',
      'Project Module',
      'Accounting Module',
      'CRM Module',
      'Helpdesk module',
    ],
  },
  {
    name: 'Enterprise',
    text: 'Discover our premium features for 30 days , absolutely free',
    monthlyPrice: 90,
    yearlyPrice: 790,
    features: [
      '30 users',
      'Unlimited Dashboards',
      'Access to all modules',
      'Integrations',
      'Dedicated support',
      'Beta features',
    ],
  },
]

export const servicesTabbed = {
  allServices: [
    {
      icon: '/assets/icons/services/study-abroad-icon.svg',
      name: 'Study Abroad',
    },
    {
      icon: '/assets/icons/services/visit-glob-icon.svg',
      name: 'Visit',
    },
    {
      icon: '/assets/icons/services/consult-icon.svg',
      name: 'Consultation',
    },
    {
      icon: '/assets/icons/services/test-exam-icon.svg',
      name: 'Test Prep',
    },
  ],
  testServices: [
    {
      icon: '/assets/icons/services/standard-seedling-icon.svg',
      name: 'Standard Test Preparation',
      price: 4000,
      priceBilling: 'Several Sessions',
      planText:
        ' Our standard test preparation services are designed to help you excel in English proficiency tests such as TOEFL, IELTS, Duolingo English Test or Cambridge exams. ',
      buttonLabel: 'Book now',
      features: [
        'Structured curriculum',
        'Experienced instructors',
        'Practice materials',
        'Group learning environment',
        'Progress tracking '
      ],
    },
    {
      icon: '/assets/icons/services/personalized-setting-icon.svg',
      name: 'Personalized Test Preparation',
      price: 0,
      priceBilling: 'Per month',
      planText:
        'For those seeking a more customized approach, our personalized test preparation services offer individualized instruction and tailored study plans. ',
      buttonLabel: 'Book now',
      features: [
        'Individualized instruction',
        'Customized study plans',
        'Flexible scheduling',
        'Targeted skill development',
        'Personalized feedback'
      ],
    },

  ],
  coreServices: [
    {
      icon: '/assets/icons/services/study-abroad-icon.svg',
      name: 'Study abroad',
      serviceText:
        'Our educational consultancy service provides expert guidance to help you navigate the complexities of academic choices. From program selection to application support, we empower you to reach your educational goals with confidence.',
      buttonLabel: 'Explore more',
      relatedPage: '/education',
      features: [
'Interview Preparation',
'Post-Acceptance Support',
'Ongoing Guidance and Support and more',

      ],
      featuresHeader: 'Our Comprehensive Educational Consultancy Services',
      highlight: {
        title: 'Look for your studying destination',
        subtitle: 'Explore Your Ideal Studying Destination: A World of Opportunities Awaits',
        image: '/assets/illustrations/pricing/pricing-highlight-1.svg',
        darkImage: '/assets/illustrations/pricing/pricing-highlight-1-dark.svg',
      },
    },
    {
      icon: '/assets/icons/services/visit-glob-icon.svg',
      name: 'Visit Abroad Support',
      serviceText:
        'Our visit abroad services provide expert guidance to help you navigate the complexities of planning your visit abroad. Whether you\'re seeking a cultural exchange, language immersion, or a memorable travel experience, we empower you to make the most of your time abroad. From itinerary planning to logistics support, our experienced team ensures a seamless and enriching visit abroad.',
      buttonLabel: 'Explore more',
      relatedPage: '/visit',
      features: [
        'Destination Recommendation',
        'Cultural Immersion Guidance',
        'Itinerary Planning',
        'Language and Communication Assistance',
        'Safety and Security Tips and more'
      ],
      highlight: {
        title: 'Discover Your Destination',
        subtitle: "From iconic landmarks to hidden gems, each country offers a unique blend of history, culture, and natural beauty.",
        image: '/assets/illustrations/pricing/pricing-highlight-2.svg',
        darkImage: '/assets/illustrations/pricing/pricing-highlight-2-dark.svg',
      },
    },
    {
      icon: '/assets/icons/services/consult-icon.svg',
      name: 'Expert Consultation',
      price: 99,
      serviceText:
      'Our consultation services cover a wide range of areas, including visiting assistance and study consultation, ensuring a holistic approach to your international experience. We go beyond travel logistics and cultural immersion, providing valuable advice on academic programs, educational institutions, and academic planning. Our team of experts will tailor their guidance to your specific needs, helping you navigate every aspect of your visit abroad and academic journey with confidence.',
      buttonLabel: 'Schedule a Consultation',
      relatedPage: '/consultation',
      features: [
        'Comprehensive Travel Logistics Assistance',
        'Expert Study Program Consultation',
        'Strategic Academic Planning and Guidance',
        'Insider Knowledge of Local Attractions and Experiences',
        'Tailor-made Itinerary Planning:'
      ],
      highlight: {
        title: 'Customized Assistance',
        subtitle:
          'Our consultation services cover a wide range of areas, including visiting assistance and study consultation, ensuring a holistic approach to your international experience.',
        image: '/assets/illustrations/pricing/pricing-highlight-3.svg',
        darkImage: '/assets/illustrations/pricing/pricing-highlight-3-dark.svg',
      },
    },
  ],
}

export const pricingCompactPlans = [
  {
    name: 'Basic',
    description:
      'For individuals who just need to start with the basic features',
    monthlyPrice: 0,
    yearlyPrice: 0,
    actionLabel: 'Start For Free',
    popular: false,
  },
  {
    name: 'Team',
    description: 'For teams who just need to start with the basic features',
    monthlyPrice: 5,
    yearlyPrice: 49,
    actionLabel: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Pro',
    description:
      'For medium businesses who need advanced features for their activity',
    monthlyPrice: 15,
    yearlyPrice: 149,
    actionLabel: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Enterprise',
    description:
      'For large businesses who need advanced features for their activity',
    monthlyPrice: 99,
    yearlyPrice: 899,
    actionLabel: 'Contact Us',
    popular: false,
  },
]

export const pricingCompareBasic = [
  {
    label: 'Separate business/personal',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Estimate tax payments',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Track deductible mileage',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Download online banking',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Multi-device',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Create invoices & estimates',
    one: false,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Manage VAT',
    one: false,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Run payroll',
    one: false,
    two: false,
    three: true,
    four: true,
  },
  {
    label: 'Manage bills & payments',
    one: false,
    two: false,
    three: true,
    four: true,
  },
  {
    label: 'Multiple currencies',
    one: false,
    two: false,
    three: false,
    four: true,
  },
  {
    label: 'Create budgets',
    one: false,
    two: false,
    three: false,
    four: true,
  },
  {
    label: 'Track time',
    one: false,
    two: false,
    three: false,
    four: true,
  },
]

export const pricingDuoPlans = [
  {
    name: 'Team',
    icon: 'ph:parachute-duotone',
    price: {
      monthly: 24,
      yearly: 249,
    },
    features: [
      'Git connector',
      'Integrations',
      'Single sign on',
      '500GB upload /year',
      'Live Chat',
    ],
    featured: false,
  },
  {
    name: 'Enterprise',
    icon: 'ph:rocket-duotone',
    price: {
      monthly: 49,
      yearly: 499,
    },
    features: [
      'All team features',
      'File processing',
      'Bulk uploads',
      '24/7 support',
      'Search API',
    ],
    featured: false,
  },
]
