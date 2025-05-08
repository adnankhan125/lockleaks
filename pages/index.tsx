'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/faqs.css';

// Components
import Header from '@/components/header';
import Orbit from '@/components/orbit';
import Animation from '@/components/animation';
import Animationsec from '@/components/protectWithVisual'
import Animationthird from '@/components/animationthird';
import Testimonial from '@/components/testimonial';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/footer';
import Faqs from '@/components/faqs';

export default function Home() {
  return (
    <>
      <Header />
      <Orbit />
      <Animationsec/>
      <Animation />
      <Animationthird />
      <Faqs />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
}
