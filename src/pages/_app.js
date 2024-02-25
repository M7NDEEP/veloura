import React, { useEffect } from 'react';
import gsap from 'gsap';
import MouseFollower from 'mouse-follower';
import 'mouse-follower/dist/mouse-follower.min.css';
import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lenis from '@studio-freight/lenis';
import store from '@/redux/store';
import { Provider } from 'react-redux';

function App({ Component, pageProps }) {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower();
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      cursor.destroy();
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        </Provider>
    </>
  );
}

export default App;
