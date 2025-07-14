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
    {
      question: "Are removals guaranteed?",
      answer:
        "We combine advanced cybersecurity, specialized monitoring, and thorough takedown strategies for a superior success rate. While no service can promise 100% removal, we go well beyond basic DMCA methods, delivering unmatched results.",
    },
    {
      question: "How fast do you remove content?",
      answer:
        "Our real-time scanning and 24/7 team identify and address leaks quickly—often within hours. Actual removal times vary by platform, but we push for the fastest resolution possible.",
    },
    {
      question: "What about re-uploads or repeat infringers?",
      answer:
        "Our advanced AI flags duplicates and partial matches, so if removed content reappears, we spot it quickly. We stay ahead of persistent infringers using continuous monitoring and specialized cybersecurity tactics.",
    },
    {
      question: "Will my personal details be exposed during the takedown process?",
      answer:
        "No. Our company submits every notice in our own name, ensuring your identity remains confidential and shielding you from retaliation.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          {/* <a href="#" className="read-all-link">Read all FAQs</a> */}
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className="faq-item"
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                {item.question}
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
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
