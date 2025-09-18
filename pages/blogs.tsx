import { useState } from 'react';
import Blogs from '@/components/blog';
// import Header from '@/components/header';
import '../styles/global.css';
import Footer from '@/components/footer';
import CallToAction from '@/components/CallToAction';
import PlatformSection from '@/components/PlatformSection';
import Newheader from '@/components/newheader';
import PricingStater from '@/components/PricingStater';

export default function Home() {
  return (
        <>

      {/* <Header /> */}
      <Newheader/>
      <Blogs />
      <PlatformSection/>
      <CallToAction/>
      <PricingStater/>
      <Footer/>
          </>

  );
}
