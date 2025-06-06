import PricingSection from '@/components/PricingSection';
import '../styles/PricingSection.css';
import '../styles/global.css';

import Header from '@/components/header';
import Footer from '@/components/footer';

import '../styles/AgencyProtectionSection.css';
import AgencyProtectionSection from '@/components/AgencyProtectionSection';
import FastLeakRemovalSection from '@/components/FastLeakRemovalSection';

import PricingFaqs from '@/components/PricingFaqs';
import '../styles/PricingFaqs.css';

export default function Home() {
  return (
    <>
      <Header />
      <PricingSection />
      <AgencyProtectionSection />
      <FastLeakRemovalSection />
      <PricingFaqs />
      <Footer />
    </>
  );
}
