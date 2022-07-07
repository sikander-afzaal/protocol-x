import React from "react";
import Works from "./Works/Works";
import Hero from "./Hero/Hero";
import styles from "./Home.module.css";
import Model from "./Model/Model";
import BoxRow1 from "./BoxRow1/BoxRow1";
import BoxRow2 from "./BoxRow2/BoxRow2";
import Treasury from "./Treasury/Treasury";
function Home() {
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
      </div>
    </div>
  );
}

export default Home;
