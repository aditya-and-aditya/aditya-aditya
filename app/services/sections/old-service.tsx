'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Code,
  Brain,
  Cloud,
  Smartphone,
  Database,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        className="p-8 h-full transition-all duration-300 hover:shadow-xl"
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
        <div
          className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
          style={{ backgroundColor: 'rgba(55, 168, 177, 0.1)' }}
        >
          <Icon style={{ color: '#37a8b1' }} size={32} />
        </div>

        <h3 className="text-2xl font-bold mb-3" style={{ color: '#092d60' }}>
          {title}
        </h3>

        <p className="mb-6" style={{ color: '#666' }}>
          {description}
        </p>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 font-semibold transition-colors hover:gap-3"
          style={{ color: '#37a8b1' }}
        >
          Learn More
          <ArrowRight size={18} />
        </Link>
      </Card>
    </motion.div>
  );
}

export default function Services() {
  const services = useMemo(
    () => [
      {
        icon: Code,
        title: 'Web Development',
        description:
          'Custom web applications built with modern frameworks like React, Next.js, and TypeScript. Scalable, maintainable, and optimized for performance.',
      },
      {
        icon: Brain,
        title: 'AI Integration',
        description:
          'Harness the power of machine learning and generative AI. We integrate intelligent solutions that automate workflows and enhance user experience.',
      },
      {
        icon: Cloud,
        title: 'Cloud Deployment',
        description:
          'Deploy your applications on AWS, Azure, or Vercel. We handle infrastructure, security, and scalability for enterprise-grade solutions.',
      },
      {
        icon: Smartphone,
        title: 'Mobile Solutions',
        description:
          'Cross-platform mobile applications for iOS and Android. Native performance with shared codebase using React Native or Flutter.',
      },
      {
        icon: Database,
        title: 'Database Design',
        description:
          'Scalable database architecture with SQL and NoSQL solutions. Optimization, backup strategies, and data security best practices.',
      },
      {
        icon: Zap,
        title: 'Performance Optimization',
        description:
          'Speed up your applications with code optimization, caching strategies, and CDN integration for lightning-fast load times.',
      },
    ],
    []
  );

  return (
    <section
      id="services"
      className="py-20 md:py-32"
      style={{ backgroundColor: 'white' }}
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
            Our Services
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ color: '#666' }}
          >
            We offer comprehensive tech solutions tailored to your business needs. From development to deployment, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p
            className="text-lg mb-6"
            style={{ color: '#666' }}
          >
            Ready to transform your business with custom tech solutions?
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
              Get Started Today
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
