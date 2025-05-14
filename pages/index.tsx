'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/faqs.css';

// Components
import Header from '@/components/header';
import Orbit from '@/components/orbit';
// import Animation from '@/components/animation';
import ProtectSection from '@/components/ProtectContentSection'
import Animationthird from '@/components/animationthird';
import Testimonial from '@/components/testimonial';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/footer';
import Faqs from '@/components/faqs';
import DataPrivacySection from '@/components/DataPrivacySection';

export default function Home() {
  return (
    <>
      <Header />
      <Orbit />
      {/* <Animationsec/> */}
      <ProtectSection />
      <Animationthird />
      <DataPrivacySection />
      <Faqs />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
}
