import 'styles/globals.scss';
import type {AppProps} from 'next/app';
import Navbar from 'components/Navbar';
import {GoogleAnalytics} from 'nextjs-google-analytics';
import PageTransition from 'components/PageTransition';
import {ThemeProvider} from 'next-themes';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      {process.env.NODE_ENV == 'production' ? <GoogleAnalytics trackPageViews /> : null}
      <Navbar />
      {/* <PageTransition> */}
      <Component {...pageProps} />
      {/* </PageTransition> */}
      <div className="blobs">
        <div className="blob1" />
        <div className="blob2" />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
