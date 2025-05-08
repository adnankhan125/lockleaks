'use client';
import { useState } from 'react';
import Image from 'next/image';
import starts from '../public/images/Vector.png';
import plusIcon from '../public/images/plus.png';
import minusIcon from '../public/images/minus.png';
import '../styles/faqs.css';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    "Are removals guaranteed?",
    "How fast do you remove content?",
    "What about re-uploads or repeat infringers?",
    "Will my personal details be exposed during the takedown process?"
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section position-relative py-5">
      {/* Stars */}
      <Image
        src={starts}
        width={20}
        height={20}
        alt="star"
        className="star star-left"
      />
      <Image
        src={starts}
        width={20}
        height={20}
        alt="star"
        className="star star-right"
      />

      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="faq-heading">Frequency Asked Questions</h2>
          <a href="#" className="read-all-link">Read all FAQs</a>
        </div>

        <div className="faq-list">
          {faqs.map((question, index) => (
            <div
              className="faq-item"
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                {question}
                <span className="faq-icon">
                  <Image
                    src={openIndex === index ? minusIcon : plusIcon}
                    alt="Toggle Icon"
                    width={30}
                    height={30}
                  />
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>This is a sample answer for: <strong>{question}</strong>. Replace this with real FAQ content.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
