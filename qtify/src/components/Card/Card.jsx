import React from "react";
import styles from "./Card.module.css";

function Card({ image, follows, title }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} alt="cardimage" />
        <div className={styles.banner}>
          <div className={styles.pill}>
            <p>{follows} Follows</p>
          </div>
        </div>
      </div>
      <div className={styles.cardTitle}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
