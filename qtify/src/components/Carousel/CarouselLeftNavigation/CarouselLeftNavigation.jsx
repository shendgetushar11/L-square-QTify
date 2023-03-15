import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";

function CarouselLeftNavigation() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slidePrev();
      }}
      className={styles.leftnavigator}
    >
      <img src={require("../../../assets/left_slider.png")} alt="leftslider" />
    </div>
  );
}

export default CarouselLeftNavigation;
