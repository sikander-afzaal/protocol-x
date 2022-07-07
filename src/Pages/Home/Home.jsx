import React from "react";
import Works from "./Works/Works";
import Hero from "./Hero/Hero";
import styles from "./Home.module.css";
import Model from "./Model/Model";
function Home() {
  return (
    <div className="home">
      <div className={styles.heroBg}>
        <Hero />
        <Works />
      </div>
      <Model />
    </div>
  );
}

export default Home;
