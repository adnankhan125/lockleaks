import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css';
import '../styles/global.css';
import '../styles/termsConditions.css';
import '../styles/AgenciesVideo.css';
// import '../styles/faqs.css';

import Header from '@/components/header';
import AgenciesSection from '@/components/AgenciesSection';
import AgenciesVideo from '@/components/AgenciesVideo';
import HowItWorks from '@/components/HowItWorks';
// import Faqs from '@/components/faqs';
import Footer from '@/components/footer';
import SimpleComparison from '@/components/SimpleComparison';
import TestiScrol from '@/components/TestiScrol';
import BeforeAfterSection from '@/components/BeforeAfterSection';







export default function Contact() {
  return (
    <> 
      <Header /> 
      <AgenciesSection />
      <AgenciesVideo/>
      <HowItWorks/>
      <SimpleComparison/>
      {/* First Section */}
      <BeforeAfterSection
        beforeImage="/images/beforeimg1.webp"
        afterImage="/images/afterimg1.webp"
        headingPart1="Impersonator"
        headingPart2="Profiles Removal"
      />
      
      {/* Second Section */}
      <BeforeAfterSection
        beforeImage="/images/beforeimg2.webp"
        afterImage="/images/aftereimg2.webp"
        headingPart1="Fake Account"
        headingPart2="Elimination"
      />
      
      {/* Third Section */}
      <BeforeAfterSection
        beforeImage="/images/beforeimg3.webp"
        afterImage="/images/afterimg3.webp"
        headingPart1="Online Identity"
        headingPart2="Protection"
      />

 
      <TestiScrol/>
      {/* <Faqs /> */}
      <Footer />
      
    </>
  );
}

