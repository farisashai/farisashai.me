import 'styles/globals.scss';
import type {AppProps} from 'next/app';
import Navbar from 'components/Navbar';
import {GoogleAnalytics} from 'nextjs-google-analytics';
import PageTransition from 'components/PageTransition';
import {ThemeProvider} from 'next-themes';
import {useEffect, useRef} from 'react';

function MyApp({Component, pageProps}: AppProps) {
  // const blobRef = useRef(null);
  // useEffect(() => {
  //   document.addEventListener('mousemove', event => {
  //     blobRef.current.animate(
  //       {
  //         left: `${event.clientX}px`,
  //         top: `${event.clientY}px`,
  //       },
  //       {duration: 2000, fill: 'forwards'}
  //     );
  //   });
  // }, []);

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
        <div className="blob3" />
        {/* // ref={blobRef} */}
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
