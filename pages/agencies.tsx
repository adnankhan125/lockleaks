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
import Faqs from '@/components/faqs';
import Footer from '@/components/footer';
import SimpleComparison from '@/components/SimpleComparison';


export default function Contact() {
  return (
    <> 
      <Header /> 
      <AgenciesSection />
      <AgenciesVideo/>
      <HowItWorks/>
      <SimpleComparison/>
      <Faqs />
      <Footer />
      
    </>
  );
}

