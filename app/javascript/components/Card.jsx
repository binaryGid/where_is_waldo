import React from "react";
import styles from "../../assets/stylesheets/Card.module.css";

function Card({ src, name, difficulty }) {
  const difficultyColor =
    difficulty === "hard"
      ? "red"
      : difficulty === "medium"
        ? "yellow"
        : "green";
  return (
    <div className={styles.wrapper}>
      <img className={styles.poster} src={src} alt="" />
      <div className={styles.titleWrapper}>
        <p className={styles.name}>{name}</p>
        <button type="button" className={styles.playButton}>
          <span>Play</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-play"
            style={{ color: "#000" }}
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
      </div>
      <p className={styles.difficulty} style={{ color: difficultyColor }}>
        {difficulty}
      </p>
    </div>
  );
}

export default Card;
