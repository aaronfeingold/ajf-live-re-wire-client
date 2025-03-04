import React, { useState, useEffect, useContext, useMemo } from "react";
import DefaultErrorMessage from '../components/errors/DefaultErrorMessage';
import Header from "../components/Header.component";
import Spinner from "../components/Spinner.component";
import useScroll from "../hooks/useScroll";
import { SpinnerContext } from "../containers/Home.container";
import styles from "./HeroSection.container.module.css";

const HeroSection = () => {
  const { spinnerVisible, startFadeOut, apiStatus, error } =
    useContext(SpinnerContext);
  const { scrollToEvents } = useScroll();
  const [showHeader, setShowHeader] = useState(false);

  // After the spinner disappears, show the header
  useEffect(() => {
    if (!spinnerVisible) {
      setShowHeader(true);
    }
  }, [spinnerVisible, apiStatus]);
  // UX: Hide the spinner after a minimum loading time
  const header = useMemo(
    () => (
      <h1
        className={`display-4 fw-bold ${
          showHeader ? styles.headerFadeIn : ''
        } ${startFadeOut ? styles.spinnerTwinkle : ''}`}
      >
        {spinnerVisible ? (
          <Spinner />
        ) : apiStatus === 'failed' ? (
          <DefaultErrorMessage error={error} />
        ) : (
          <Header />
        )}
      </h1>
    ),
    [spinnerVisible, showHeader, startFadeOut, apiStatus, error]
  );

  // UX: Handle the mouse wheel changing down
  const handleWheel = (event) => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Trigger scrollToEvents only if we're at the top of the page (i.e., HeroSection is in its highest position)
    if (event.deltaY > 0 && scrollTop === 0) {
      scrollToEvents();
    }
  };

  return (
    <div id="home" className={styles.heroSection} onWheel={handleWheel}>
      <div className={styles.parallax}>
        <div
          className={`container-sm text-center text-black ${styles.headerContainer}`}
        >
          {header}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
