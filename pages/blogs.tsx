import { useState } from 'react';
import Blogs from '@/components/blog';
// import Header from '@/components/header';
import '../styles/global.css';
import Footer from '@/components/footer';
import CallToAction from '@/components/CallToAction';
import PlatformSection from '@/components/PlatformSection';
import Newheader from '@/components/newheader';
import LeakSiteSec from '@/components/LeakSiteSec';


export default function Home() {
  return (
        <>

      {/* <Header /> */}
      <Newheader/>
      <Blogs />
      <PlatformSection/>
      <CallToAction/>
      <LeakSiteSec/>
      <Footer/>
          </>

  );
}
