// components/CallToAction.js
import Link from 'next/link';
import '../styles/CallToAction.css';
import Image from 'next/image';
import lockIcon from '../public/images/lock-icon.svg';

const CallToAction = () => {
  return (
    <div className="ctaContainer">
      <div className="ctaContent">
        <Image src={lockIcon} alt="Lock Icon" className="lockIcon" />
        <h2>
          Secure Your Content with a Global Leader in{' '}
          <span className="highlight-1">Leak Protection</span>
        </h2>
        <p>Try our free scan and see the difference Lock Leaks can make!</p>
        <div className="ctaButtons">
          <Link href="/start" className="ctaButton">Start Free</Link>
          <Link href="/agencies" className="ctaButton agencyButton">For Agencies</Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
