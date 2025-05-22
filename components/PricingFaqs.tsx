'use client';

import React, { useState } from 'react';
import '../styles/PricingFaqs.css';

const faqs = [
  {
    question: ' What’s included in all plans?',
    answer: 'A packaging designer researches the product and audience, then creates structural and visual packaging concepts from sketch to final production.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Charges vary depending on complexity and experience, typically ranging from $200 to $2000 per project or hourly rates.',
  },
  {
    question: ' Is there a free scan available before purchasing?',
    answer: 'You can hire packaging designers through freelance platforms, design agencies, or referrals based on portfolios and experience.',
  },
  {
    question: 'How fast will leaks be detected and removed?',
    answer: 'The time required can range from a few days to a few weeks depending on the project scope and number of revisions.',
  }
];

const PricingFaqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="pricing-faqs-container">
      <h2 className="faq-title">FAQs</h2>
      <p className="faq-subtitle">Some questions we get asked the most</p>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
          </div>
          <div className={`faq-answer-container ${activeIndex === index ? 'open' : ''}`}>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingFaqs;
