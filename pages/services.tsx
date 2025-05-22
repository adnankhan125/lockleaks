import { useState } from 'react';

import TcSection from '../components/TcSection';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/TcSection.css';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <TcSection />
    </>
  );
}
