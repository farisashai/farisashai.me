import 'styles/globals.scss';
import type {AppProps} from 'next/app';
import Navbar from 'components/Navbar';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <div className="blobs">
        <div className="blob1" />
        <div className="blob2" />
      </div>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
