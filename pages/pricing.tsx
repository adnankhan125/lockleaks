import PricingSection from '@/components/PricingSection';
import '../styles/PricingSection.css'; // Import the CSS file
import '../styles/global.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '../styles/AgencyProtectionSection.css';
import AgencyProtectionSection from '@/components/AgencyProtectionSection';



export default function Home() {
  return (
    <>
      <Header />
      <PricingSection />
      <AgencyProtectionSection/>
      <Footer />
    
    </>
  );
}
