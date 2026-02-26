'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CaseStudy, caseStudiesData } from '@/app/_lib/caseStudiesData';



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
          {study.id !== 'market-place' && (
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
          )}

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
            Other Case Studies
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#666' }}>
            Explorations in user experience, artificial intelligence, and building interfaces that understand human intent.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {caseStudiesData.map((study, index) => (
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
