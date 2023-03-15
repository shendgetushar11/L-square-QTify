import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";

function CarouselRightNavigation() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slideNext();
      }}
      className={styles.rightnavigator}
    >
      <img
        src={require("../../../assets/right_slider.png")}
        alt="rightslider"
      />
    </div>
  );
}

export default CarouselRightNavigation;
