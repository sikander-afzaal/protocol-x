import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Works from "./Works/Works";
import Hero from "./Hero/Hero";
import styles from "./Home.module.css";
import Model from "./Model/Model";
import BoxRow1 from "./BoxRow1/BoxRow1";
import BoxRow2 from "./BoxRow2/BoxRow2";
import Treasury from "./Treasury/Treasury";
import Tokenomics from "./Tokenomics/Tokenomics";
import Faq from "./Faq/Faq";
import Roadmap from "./Roadmap/Roadmap";
function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="home">
      <div className={styles.heroBg}>
        <Hero />
        <Works />
      </div>
      <Model />
      <BoxRow1 />
      <div className={styles.blackBg}>
        <BoxRow2 />
        <Treasury />
        <Tokenomics />
        <Faq />
      </div>
      <Roadmap />
    </div>
  );
}

export default Home;
