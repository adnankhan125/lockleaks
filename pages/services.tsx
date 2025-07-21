import { useState } from 'react';

import TcSection from '../components/TcSection';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/TcSection.css';
import dynamic from "next/dynamic";
import Footer from '@/components/footer';
import TrafficRecoverySection from '@/components/TrafficRecovery';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import CallToAction from '@/components/CallToAction';


const ProtectPopup = dynamic(() => import("@/components/ProtectPopup"), { ssr: false });
export default function ServicesPage() {
  return (
    <>
      <Header />
      <TcSection />
      <TrafficRecoverySection/>
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
      <ProtectPopup/>
      <CallToAction/>
      <Footer/>
    </>
  );
}
