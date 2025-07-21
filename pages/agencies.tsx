import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css';
import '../styles/global.css';
import '../styles/termsConditions.css';
import '../styles/AgenciesVideo.css';
import '../styles/faqs.css';

import Header from '@/components/header';
import AgenciesSection from '@/components/AgenciesSection';
import AgenciesVideo from '@/components/AgenciesVideo';
import HowItWorks from '@/components/HowItWorks';
import FaqSection from '@/components/faqs'; // ✅ updated
import Footer from '@/components/footer';
import SimpleComparison from '@/components/SimpleComparison';
import TestiScrol from '@/components/TestiScrol';
import CompareSection from '@/components/CompareSection';
import CompareLeakSection from '@/components/CompareLeakSection';
import SpotlightScroller from '@/components/SpotlightScroller';

export default function Contact() {
  const agencyFaqs = [
    {
      question: "What is Lock Leaks and how can it help me?",
      answer:
        "Lock Leaks is a digital protection service that detects and removes unauthorized content leaks, redirects lost traffic to your verified profile, and offers 24/7 monitoring to prevent impersonation or content abuse.",
    },
    {
      question: "How does traffic recovery work?",
      answer:
        "By intercepting traffic from leak sites that post your content without permission, Lock Leaks redirects it to your official profile — turning stolen views into paying subscribers.",
    },
    {
      question: "What types of content can be protected?",
      answer:
        "Lock Leaks protects images, videos, and other media, especially content shared on social platforms, leak sites, or any high-risk sources of piracy.",
    },
    {
      question: "How fast does Lock Leaks respond?",
      answer:
        "The system uses AI for automatic detection and rapid takedowns, with real-time alerts. You won’t wait days for a response — every action is tracked, logged, and executed immediately.",
    },
  ];

  return (
    <>
      <Header />
      <AgenciesSection />
      <AgenciesVideo />
      <HowItWorks />
      <SimpleComparison />
      <CompareLeakSection />
      <SpotlightScroller />
      <CompareSection />
      <TestiScrol />
      <FaqSection faqs={agencyFaqs} heading="Frequently Asked Questions" />
      <Footer />
    </>
  );
}
