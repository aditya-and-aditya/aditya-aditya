import React from 'react';
import CartThatUnderstoodHer from '../case-studies/ai-confluence';
import LuxuryClienteling from '../case-studies/luxury-clienteling';
import MarketPlaceCaseStudy from '../case-studies/market-place';
import LivingMachine from '../case-studies/living-machine';

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  metrics: {
    metric: string;
    value: string;
  }[];
  content: React.ReactNode;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'ai-confluence',
    category: 'Essay · AI & Design',
    title: 'The Cart That Understood Her',
    description:
      'A story about the quiet revolution happening at the intersection of artificial intelligence and the online shopping experience.',
    metrics: [
      { metric: 'Time to Cart', value: '< 4 Mins' },
      { metric: 'Curated Results', value: 'Top 20' },
    ],
    content: <CartThatUnderstoodHer />
  },
  {
    id: 'luxury-clienteling',
    category: 'Strategy · Architecture',
    title: 'The Architecture of Luxury Clienteling',
    description:
      'A deep dive into the six layers of modern luxury commerce: Persona, Branding, Presence, Insights, Authority, and UX.',
    metrics: [
      { metric: 'Loyalty', value: 'Generational' },
      { metric: 'Trust', value: 'Absolute' },
    ],
    content: <LuxuryClienteling />
  },
  {
    id: 'market-place',
    category: 'Strategy · Marketplace & Retail',
    title: 'The Marketplace & The Retailer',
    description:
      'A deep dive into how clienting transforms transactions into lasting relationships across both mass-market and boutique scales.',
    metrics: [
      { metric: 'Returns', value: '↓ 30%' },
      { metric: 'LTV Increase', value: '4.2×' },
    ],
    content: <MarketPlaceCaseStudy />
    id: 'living-machine',
    category: 'Visualized · Systems',
    title: 'The Living Machine',
    description:
      'A cinematic visualization of distributed systems. Explore how machines agree, fail, and scale in the digital void.',
    metrics: [
      { metric: 'Architecture', value: 'Distributed' },
      { metric: 'Interaction', value: 'Deep' },
    ],
    content: <LivingMachine />
  },
];
