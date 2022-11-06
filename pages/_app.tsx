import 'styles/globals.scss';
import type {AppProps} from 'next/app';
import Navbar from 'components/Navbar';
import {GoogleAnalytics} from 'nextjs-google-analytics';
import PageTransition from 'components/PageTransition';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Navbar />
      {/* <PageTransition> */}
      <Component {...pageProps} />
      {/* </PageTransition> */}
      <div className="blobs">
        <div className="blob1" />
        <div className="blob2" />
      </div>
    </>
  );
}

export default MyApp;
