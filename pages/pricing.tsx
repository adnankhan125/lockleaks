import PricingSection from '@/components/PricingSection';
import '../styles/PricingSection.css'; // Import the CSS file
import '../styles/global.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '../styles/AgencyProtectionSection.css';
import AgencyProtectionSection from '@/components/AgencyProtectionSection';
import FastLeakRemovalSection from '@/components/FastLeakRemovalSection';
import FaqSection from '@/components/faqs';



export default function Home() {
  return (
    <>
      <Header />
      <PricingSection />
      <AgencyProtectionSection/>
      <FastLeakRemovalSection/>
      <FaqSection/>
      <Footer />
    
    </>
  );
}
