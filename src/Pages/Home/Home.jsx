import React from "react";
import Works from "../Works/Works";
import Hero from "./Hero/Hero";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className="home">
      <div className={styles.heroBg}>
        <Hero />
        <Works />
      </div>
    </div>
  );
}

export default Home;
