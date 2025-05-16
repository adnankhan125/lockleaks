import { useEffect, useState } from 'react';
import LoaderPage from '../components/LoaderPage';
import '../styles/LoaderPage.css'; // import global styles here
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoaderPage /> : <Component {...pageProps} />;
}
