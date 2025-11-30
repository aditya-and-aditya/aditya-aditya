export interface CaseStudyDetail {
  id: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics: {
    metric: string;
    value: string;
  }[];
  services: string[];
}

export const caseStudiesData: CaseStudyDetail[] = [
  {
    id: 'ai-automation',
    category: 'AI & Automation',
    title: '"Our Support Team is Drowning in Repetitive Questions."',
    problem:
      "An e-commerce brand's support team spent 80% of their day answering the same five questions about order status, returns, and shipping policies.",
    solution:
      "We built and deployed an AI-powered support agent on their website and WhatsApp. It instantly answers common questions using the company's knowledge base and automatically escalates complex issues to a human agent.",
    outcome:
      'A 70% reduction in repetitive support tickets within 60 days. The human support team was freed up to handle high-value customer problems, dramatically improving customer satisfaction.',
    metrics: [
      { metric: 'Reduction in Repetitive Tickets', value: '70%' },
      { metric: 'Implementation Time', value: '60 days' },
    ],
    services: ['AI & Automation', 'RAG Knowledge Systems'],
  },
  {
    id: 'knowledge-systems',
    category: 'Custom Knowledge Systems',
    title: '"Our Internal Teams Can\'t Find Information."',
    problem:
      'A consulting firm had thousands of documents—case studies, reports, and policy updates—spread across different drives. Their teams wasted hours searching for the right information.',
    solution:
      'We developed a secure, private knowledge assistant. Staff can now ask questions in plain language (e.g., "What were our Q3 results for the energy sector?") and get instant, accurate answers with direct links to the source documents.',
    outcome:
      'Internal search time was reduced by 90%. New hires could get up to speed faster, and the sales team could generate proposals with the latest data in minutes, not hours.',
    metrics: [
      { metric: 'Search Time Reduced', value: '90%' },
      { metric: 'Proposal Generation Time', value: 'Minutes' },
    ],
    services: ['RAG & Fine-Tuning', 'AI Integration'],
  },
  {
    id: 'saas-mvp',
    category: 'SaaS Development',
    title: '"We Have a SaaS Idea But Need to Launch Fast."',
    problem:
      'A founder had a powerful idea for a subscription software product but needed to validate it in the market quickly without spending a fortune.',
    solution:
      'We designed and launched a fully functional Minimum Viable Product (MVP) in just 8 weeks. It included secure user accounts, subscription billing via Stripe, and the core feature set needed to attract early customers.',
    outcome:
      'The founder secured their first 50 paying customers within three months of launch, proving product-market fit and successfully raising a seed funding round based on the early traction.',
    metrics: [
      { metric: 'MVP Launch Time', value: '8 weeks' },
      { metric: 'Paying Customers (3 months)', value: '50+' },
    ],
    services: ['Business SaaS Development', 'MVP & Go-to-Market Support'],
  },
  {
    id: 'full-stack',
    category: 'Full-Stack Engineering',
    title: '"Our Customer Portal is Old, Slow, and Unreliable."',
    problem:
      "A service company was losing customers due to a clunky, outdated portal that didn't work well on mobile and was frequently down.",
    solution:
      'We engineered a modern, fast, and highly reliable web platform from the ground up. The new system features a clean user interface, powerful admin dashboards, and a mobile-first design.',
    outcome:
      'A 40% increase in customer engagement on the new platform and a 50% reduction in support calls related to portal issues. Uptime is now a consistent 99.99%.',
    metrics: [
      { metric: 'Customer Engagement Increase', value: '+40%' },
      { metric: 'Support Calls Reduction', value: '-50%' },
      { metric: 'Platform Uptime', value: '99.99%' },
    ],
    services: ['Full-Stack Engineering', 'Real-Time Analytics'],
  },
  {
    id: 'data-engineering',
    category: 'Data Engineering',
    title: '"Our Data is a Mess and We Can\'t Trust Our Reports."',
    problem:
      "A retail company's data was scattered across Shopify, Google Analytics, and their CRM. Their reports were inconsistent, manually built, and always out of date.",
    solution:
      'We built automated data pipelines to pull all their information into a single, central data warehouse. We cleaned, structured, and organized the data, creating a "single source of truth" for the entire business.',
    outcome:
      'The company now has access to real-time, accurate business dashboards. Report generation time has been cut from days to minutes, enabling faster and more confident decision-making.',
    metrics: [
      { metric: 'Report Generation Time', value: 'Minutes' },
      { metric: 'Data Accuracy', value: '100%' },
    ],
    services: ['Data Engineering & Pipelines'],
  },
  {
    id: 'machine-learning',
    category: 'Machine Learning',
    title: '"We\'re Losing Customers and We Don\'t Know Why."',
    problem:
      'A subscription box service was struggling with high customer churn. They were unable to identify which users were at risk of canceling their subscriptions.',
    solution:
      'We developed a predictive churn model that analyzed user behavior patterns. The system identifies at-risk customers with 85% accuracy and automatically flags them for a proactive retention campaign.',
    outcome:
      'Monthly churn was reduced by 15% in the first quarter. The targeted retention campaigns led to a measurable increase in overall customer lifetime value.',
    metrics: [
      { metric: 'Churn Reduction', value: '15%' },
      { metric: 'Prediction Accuracy', value: '85%' },
    ],
    services: ['Machine Learning & AI Models', 'Data Engineering'],
  },
  {
    id: 'legacy-integration',
    category: 'Legacy System AI Integration',
    title: '"Our Old ERP is Holding Us Back."',
    problem:
      "A large logistics firm relied on a 20-year-old ERP system. They needed modern AI-powered inventory forecasting but couldn't afford the risk and cost of a full system replacement.",
    solution:
      'We built a lightweight integration layer that securely connected their legacy ERP to a modern AI forecasting model. There was zero disruption to their existing operations.',
    outcome:
      'They improved forecast accuracy by over 30%, reducing costly overstocking and preventing stockouts. They successfully modernized a critical business function without a multi-million dollar overhaul.',
    metrics: [
      { metric: 'Forecast Accuracy Improvement', value: '+30%' },
      { metric: 'System Downtime', value: '0%' },
    ],
    services: ['AI Integration into Legacy Systems'],
  },
  {
    id: 'vertical-saas',
    category: 'Vertical-Specific SaaS',
    title: '"Generic Software Doesn\'t Understand Our Industry."',
    problem:
      'A legal-tech startup recognized that generic project management tools failed to meet the specific compliance and workflow needs of law firms.',
    solution:
      'We built a Vertical SaaS MVP designed specifically for the legal industry, featuring secure document management, case-specific workflows, and built-in compliance checklists.',
    outcome:
      'The industry-specific focus was a huge success. They landed 10 pilot law firms before the public launch, proving strong demand and securing a competitive advantage in a crowded market.',
    metrics: [
      { metric: 'Pilot Law Firms', value: '10' },
      { metric: 'Pre-Launch Success Rate', value: '100%' },
    ],
    services: ['Vertical-Specific SaaS', 'Business SaaS Development'],
  },
  {
    id: 'real-time-analytics',
    category: 'Real-Time Analytics',
    title: '"We\'re Making Decisions Based on Outdated Information."',
    problem:
      'A transportation company relied on end-of-day reports to track their fleet, meaning they only learned about delivery delays hours after they happened.',
    solution:
      'We developed a real-time analytics platform with live dashboards visualizing fleet location, delivery status, and key performance indicators. We also configured automated alerts for any route deviations or delays.',
    outcome:
      "The operations team's response time to delivery issues was reduced by 80%. Their on-time delivery rate improved by 18% because they could finally make decisions based on live data.",
    metrics: [
      { metric: 'Response Time Reduction', value: '80%' },
      { metric: 'On-Time Delivery Improvement', value: '+18%' },
    ],
    services: ['Real-Time Analytics & BI', 'Data Engineering'],
  },
  {
    id: 'mvp-gtm',
    category: 'MVP & Go-to-Market',
    title: '"We Have an Idea, But No Product and No Users."',
    problem:
      'A startup had a validated idea but needed to get a real product into the hands of users as quickly as possible to gather feedback and prove traction.',
    solution:
      'We took their concept and launched a functional MVP in just 6 weeks. Crucially, we integrated analytics and user feedback tools from day one, so they could measure everything their first users did.',
    outcome:
      'They acquired their first 100 active users within a month. The data they collected allowed them to make smart product improvements, leading to a successful seed funding round.',
    metrics: [
      { metric: 'MVP Launch Time', value: '6 weeks' },
      { metric: 'Active Users (Month 1)', value: '100+' },
    ],
    services: ['MVP & Go-to-Market Support', 'Full-Stack Engineering'],
  },
  {
  id: 'ai-agentic-workflows',
  category: 'AI Agentic Workflows',
  title: '"Our Operations Team is Buried in Manual Processes."',
  problem:
    "A fast-growing D2C health & wellness brand was manually handling order fulfillment exceptions, supplier follow-ups, and inventory reordering across email, Slack, spreadsheets, and three different tools. One operations manager spent 6+ hours a day just copying and pasting data.",
  solution:
    "We built a team of autonomous AI agents that work 24/7: one monitors orders and flags exceptions, another chases suppliers on late POs, a third automatically creates and sends reorder requests when stock hits thresholds. Everything is auditable; humans only step in on escalated cases.",
  outcome:
    "85% of routine operations tasks are now fully automated. The ops team went from 9 to 4 people as company order volume doubled. Monthly human error incidents dropped by 95%.",
  metrics: [
    { metric: 'Tasks Automated', value: '85%' },
    { metric: 'Ops Team Size', value: '9 → 4' },
    { metric: 'Error Incident Reduction', value: '-95%' },
  ],
  services: [
    'AI Agentic Workflows',
    'Multi-Agent Systems',
    'Process Automation & Integration',
  ],
},
{
  id: 'ai-personalization-engine',
  category: 'AI-Powered Personalization Engine',
  title: '"Our Conversion Rates Are Flat Despite Heavy Traffic."',
  problem:
    "A premium fashion e-commerce brand with 400k+ monthly visitors converting at only 1.4%. Generic recommendations and broad email campaigns weren’t driving growth.",
  solution:
    "We designed and deployed a real-time personalization engine using on-site behavior, purchase history, browsing, and weather data to deliver hyper-personalized product suggestions, dynamic homepage content, cart-abandonment recovery, and upsell flows.",
  outcome:
    "Average order value increased 31%, email click-through rates jumped 4.3×, and conversion rose from 1.4% to 3.1% in under 90 days—adding $1.8M annualized revenue without extra ad spend.",
  metrics: [
    { metric: 'Conversion Rate', value: '1.4% → 3.1%' },
    { metric: 'Order Value Increase', value: '+31%' },
    { metric: 'Email Click-Through', value: '4.3×' },
  ],
  services: [
    'Machine Learning & Personalization',
    'Recommendation Systems',
    'Real-Time Data Pipelines',
  ],
},

];
