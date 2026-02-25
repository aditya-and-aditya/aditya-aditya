import React from 'react';
import CartThatUnderstoodHer from '../case-studies/ai-confluence';

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
  
];
