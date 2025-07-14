import { useEffect, useState } from 'react';
import LoaderPage from '../components/LoaderPage';
import '../styles/LoaderPage.css'; // import global styles here
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
