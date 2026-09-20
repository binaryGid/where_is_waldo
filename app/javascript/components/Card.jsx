import React from "react";
import styles from "../../assets/stylesheets/Card.module.css";

function Card({ src, name, difficulty }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.poster} src={src} alt="" />
      <p className={styles.name}>{name}</p>
      <p className={styles.difficulty}>{difficulty}</p>
    </div>
  );
}

export default Card;
