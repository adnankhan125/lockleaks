'use client';
import Orbit from '../components/orbit';
import Header from '../components/header';
import Animation from '../components/animation';
import Animationthird from '../components/animationthird';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

export default function Home() {
  return (
    <>
      <Header />
      <Orbit />
      <Animation/>
      <Animationthird/>

  </>
  );
}
