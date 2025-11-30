'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  metrics: {
    metric: string;
    value: string;
  }[];
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={`/case-studies/${study.id}`}>
        <Card
          className="p-6 h-full transition-all duration-300 hover:shadow-xl cursor-pointer"
          style={{ borderColor: 'rgba(55, 168, 177, 0.2)', borderWidth: '2px' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = 'rgba(55, 168, 177, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(55, 168, 177, 0.2)';
          }}
        >
          {/* Category */}
          <div className="mb-3">
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: '#37a8b1' }}
            >
              {study.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold mb-3 line-clamp-2" style={{ color: '#092d60' }}>
            {study.title}
          </h3>

          {/* Description */}
          <p className="text-sm mb-4 line-clamp-3" style={{ color: '#666' }}>
            {study.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {study.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg"
                style={{ backgroundColor: 'rgba(55, 168, 177, 0.05)' }}
              >
                <div className="text-xl font-bold" style={{ color: '#37a8b1' }}>
                  {metric.value}
                </div>
                <div className="text-xs" style={{ color: '#666' }}>
                  {metric.metric}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
            style={{ color: '#37a8b1' }}
          >
            Read Case Study
            <ArrowRight size={16} />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function CaseStudies() {
  const caseStudies: CaseStudy[] = useMemo(
    () => [
      {
        id: 'ai-automation',
        category: 'AI & Automation',
        title: 'Support Team Drowning in Repetitive Questions',
        description:
          'E-commerce brand reduced support tickets by 70% with AI-powered support agent deployed on website and WhatsApp.',
        metrics: [
          { metric: 'Reduction in Tickets', value: '70%' },
          { metric: 'Implementation Time', value: '60 days' },
        ],
      },
      {
        id: 'knowledge-systems',
        category: 'Custom Knowledge Systems',
        title: 'Internal Teams Can\'t Find Information',
        description:
          'Consulting firm reduced internal search time by 90% with secure, private knowledge assistant for instant document retrieval.',
        metrics: [
          { metric: 'Search Time Reduced', value: '90%' },
          { metric: 'Proposal Generation', value: 'Minutes' },
        ],
      },
      {
        id: 'saas-mvp',
        category: 'SaaS Development',
        title: 'SaaS Idea Needs Fast Launch',
        description:
          'Founder launched MVP in 8 weeks, secured 50 paying customers in 3 months, and raised seed funding based on early traction.',
        metrics: [
          { metric: 'MVP Launch Time', value: '8 weeks' },
          { metric: 'Paying Customers', value: '50+' },
        ],
      },
      {
        id: 'full-stack',
        category: 'Full-Stack Engineering',
        title: 'Customer Portal is Old, Slow, and Unreliable',
        description:
          'Service company increased customer engagement by 40% and reduced support calls by 50% with modern, mobile-first platform.',
        metrics: [
          { metric: 'Engagement Increase', value: '+40%' },
          { metric: 'Support Calls', value: '-50%' },
        ],
      },
      {
        id: 'data-engineering',
        category: 'Data Engineering',
        title: 'Data is a Mess and Reports Can\'t Be Trusted',
        description:
          'Retail company cut report generation from days to minutes with automated data pipelines and single source of truth.',
        metrics: [
          { metric: 'Report Generation', value: 'Minutes' },
          { metric: 'Data Accuracy', value: '100%' },
        ],
      },
      {
        id: 'machine-learning',
        category: 'Machine Learning',
        title: 'Losing Customers and Don\'t Know Why',
        description:
          'Subscription service reduced monthly churn by 15% with predictive model identifying at-risk customers with 85% accuracy.',
        metrics: [
          { metric: 'Churn Reduction', value: '15%' },
          { metric: 'Prediction Accuracy', value: '85%' },
        ],
      },
      {
        id: 'legacy-integration',
        category: 'Legacy System AI Integration',
        title: 'Old ERP is Holding Business Back',
        description:
          'Logistics firm improved forecast accuracy by 30% with AI integration layer connecting legacy ERP to modern forecasting.',
        metrics: [
          { metric: 'Forecast Accuracy', value: '+30%' },
          { metric: 'System Downtime', value: '0%' },
        ],
      },
      {
        id: 'vertical-saas',
        category: 'Vertical-Specific SaaS',
        title: 'Generic Software Doesn\'t Understand Our Industry',
        description:
          'Legal-tech startup landed 10 pilot law firms before public launch with industry-specific SaaS for compliance and workflows.',
        metrics: [
          { metric: 'Pilot Customers', value: '10' },
          { metric: 'Pre-Launch Success', value: '100%' },
        ],
      },
      {
        id: 'real-time-analytics',
        category: 'Real-Time Analytics',
        title: 'Making Decisions Based on Outdated Information',
        description:
          'Transportation company reduced response time by 80% and improved on-time delivery by 18% with real-time fleet analytics.',
        metrics: [
          { metric: 'Response Time', value: '-80%' },
          { metric: 'On-Time Delivery', value: '+18%' },
        ],
      },
      {
        id: 'mvp-gtm',
        category: 'MVP & Go-to-Market',
        title: 'Have an Idea, But No Product and No Users',
        description:
          'Startup launched MVP in 6 weeks, acquired 100 active users in one month, and used data to secure seed funding.',
        metrics: [
          { metric: 'Launch Time', value: '6 weeks' },
          { metric: 'Active Users', value: '100+' },
        ],
      },
      {
  id: 'ai-agentic-workflows',
  category: 'AI Agentic Workflows',
  title: 'Operations Team Buried in Manual Processes',
  description:
    'Health & wellness brand automated 85% of routine ops. Ops team reduced from 9 to 4; company doubled order volume and cut error incidents by 95%.',
  metrics: [
    { metric: 'Tasks Automated', value: '85%' },
    { metric: 'Ops Team Size', value: '9 → 4' },
  ],
},
{
  id: 'ai-personalization-engine',
  category: 'AI-Powered Personalization Engine',
  title: 'Conversion Rates Flat Despite Heavy Traffic',
  description:
    'E-com fashion brand lifted conversion 1.4%→3.1% (+$1.8M), grew order value 31%, and 4.3× email CTR—all via real-time ML-powered personalization.',
  metrics: [
    { metric: 'Conversion Rate', value: '1.4%→3.1%' },
    { metric: 'Order Value Increase', value: '+31%' },
  ],
},

    ],
    []
  );

  return (
    <section
      id="projects"
      className="py-20 md:py-32"
      style={{ backgroundColor: '#eff0ef' }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#092d60' }}
          >
            Case Studies
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#666' }}>
            Real problems solved. Real results delivered. Discover how we've helped businesses transform their operations.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg mb-6" style={{ color: '#666' }}>
            Ready to solve your business challenges?
          </p>
          <Button
            asChild
            size="lg"
            className="text-white text-lg px-8 py-6"
            style={{ backgroundColor: '#37a8b1' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2a8490')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#37a8b1')}
          >
            <Link href="#contact" className="flex items-center gap-2">
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
