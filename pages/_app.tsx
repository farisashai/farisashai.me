import 'styles/globals.scss';
import type {AppProps} from 'next/app';
import Navbar from 'components/Navbar';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <div className="blobs">
        <div className="blob1" />
        <div className="blob2" />
      </div>
    </>
  );
}

export default MyApp;
