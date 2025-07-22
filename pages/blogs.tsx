import { useState } from 'react';
import Blogs from '@/components/blog';
import Header from '@/components/header';
import '../styles/global.css';
import Footer from '@/components/footer';
import CallToAction from '@/components/CallToAction';
import PlatformSection from '@/components/PlatformSection';

export default function Home() {
  return (
        <>

      <Header />
      <Blogs />
      <PlatformSection/>
      <CallToAction/>
      <Footer/>
          </>

  );
}
