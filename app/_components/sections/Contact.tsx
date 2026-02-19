'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone state
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset form including phone
        setFormData({ name: '', email: '', phone: '', company: '', message: '' }); 
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aditya2square@gmail.com',
      href: 'mailto:aditya2square@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 88179 23187',
      href: 'tel:+918817923187',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhopal, India',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
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
            Let's Start Something Great
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#666' }}>
            Ready to transform your business with custom tech solutions? Get in touch with our team and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-8"
              style={{ color: '#092d60' }}
            >
              Get in Touch
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex gap-4 p-6 rounded-lg transition-all duration-300"
                    style={{ backgroundColor: 'rgba(55, 168, 177, 0.05)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        'rgba(55, 168, 177, 0.1)';
                      e.currentTarget.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        'rgba(55, 168, 177, 0.05)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(55, 168, 177, 0.2)' }}
                    >
                      <Icon style={{ color: '#37a8b1' }} size={24} />
                    </div>
                    <div>
                      <h4
                        className="font-semibold mb-1"
                        style={{ color: '#092d60' }}
                      >
                        {info.label}
                      </h4>
                      <p style={{ color: '#666' }}>{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4
                className="font-semibold mb-4"
                style={{ color: '#092d60' }}
              >
                Follow Us
              </h4>
              <div className="flex gap-4">
                {[
                  { name: 'Instagram', url: 'https://www.instagram.com/aditya.and.aditya' },
                  { name: 'Twitter', url: 'https://x.com/Aditya_n_Aditya' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(55, 168, 177, 0.1)',
                      color: '#37a8b1',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#37a8b1';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        'rgba(55, 168, 177, 0.1)';
                      e.currentTarget.style.color = '#37a8b1';
                    }}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card
              className="p-8 bg-white"
              style={{ borderColor: 'rgba(55, 168, 177, 0.2)', borderWidth: '2px' }}
            >
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <CheckCircle
                      size={64}
                      style={{ color: '#37a8b1' }}
                      className="mb-4"
                    />
                  </motion.div>
                  <h3
                    className="text-2xl font-bold text-center mb-2"
                    style={{ color: '#092d60' }}
                  >
                    Thank You!
                  </h3>
                  <p className="text-center" style={{ color: '#666' }}>
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#092d60' }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                      style={{
                        borderColor: 'rgba(55, 168, 177, 0.2)',
                        borderWidth: '2px',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#37a8b1';
                        e.currentTarget.style.boxShadow =
                          '0 0 0 3px rgba(55, 168, 177, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          'rgba(55, 168, 177, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#092d60' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                      style={{
                        borderColor: 'rgba(55, 168, 177, 0.2)',
                        borderWidth: '2px',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#37a8b1';
                        e.currentTarget.style.boxShadow =
                          '0 0 0 3px rgba(55, 168, 177, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          'rgba(55, 168, 177, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* --- NEW PHONE FIELD --- */}
                  <div className="mb-6">
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#092d60' }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                      style={{
                        borderColor: 'rgba(55, 168, 177, 0.2)',
                        borderWidth: '2px',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#37a8b1';
                        e.currentTarget.style.boxShadow =
                          '0 0 0 3px rgba(55, 168, 177, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          'rgba(55, 168, 177, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  {/* --- END PHONE FIELD --- */}

                  <div className="mb-6">
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#092d60' }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                      style={{
                        borderColor: 'rgba(55, 168, 177, 0.2)',
                        borderWidth: '2px',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#37a8b1';
                        e.currentTarget.style.boxShadow =
                          '0 0 0 3px rgba(55, 168, 177, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          'rgba(55, 168, 177, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="Your company"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#092d60' }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none"
                      style={{
                        borderColor: 'rgba(55, 168, 177, 0.2)',
                        borderWidth: '2px',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#37a8b1';
                        e.currentTarget.style.boxShadow =
                          '0 0 0 3px rgba(55, 168, 177, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          'rgba(55, 168, 177, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full text-white text-lg py-6 font-semibold transition-all duration-300"
                    style={{ backgroundColor: '#37a8b1' }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = '#2a8490';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#37a8b1';
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send size={20} />}
                    </div>
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}