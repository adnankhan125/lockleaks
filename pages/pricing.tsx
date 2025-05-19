import PricingSection from '@/components/PricingSection';
import '../styles/PricingSection.css'; // Import the CSS file
import '../styles/global.css';
import Header from '@/components/header';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <>
      <Header />
      <PricingSection />
      <Footer />
    
    </>
  );
}
