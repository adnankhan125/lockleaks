import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Newheader.css';
import '../styles/global.css';

import Newheader from '@/components/newheader';
import NotFound from '@/components/NotFound';

export default function Custom404() {
  return (
    <>
      <Newheader/>
      <NotFound />
    </>
  );
}
