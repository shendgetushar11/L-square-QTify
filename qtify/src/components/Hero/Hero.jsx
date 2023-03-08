import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <p className={styles.hero_heading1}>100 Thousand Songs, ad-free</p>
      <p className={styles.hero_heading2}>Over thousands podcast episodes</p>
      <img
        src={require("../../assets/hero_image.png")}
        alt="heroimage"
        className={styles.hero_img}
      />
    </div>
  );
}

export default Hero;
