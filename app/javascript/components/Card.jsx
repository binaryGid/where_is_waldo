import React from "react";
import styles from "../../assets/stylesheets/Card.module.css";

function Card({ src, name, difficulty }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.poster} src={src} alt="" />
      <div className={styles.actionWrapper}>
        <p className={styles.name}>{name}</p>
        <button type="button" className={styles.playBtn}>
          <span>Play</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-play"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
      </div>
      <p
        className={styles.difficulty}
        style={{
          color:
            difficulty === "easy"
              ? "green"
              : difficulty === "medium"
                ? "orange"
                : "red",
        }}
      >
        {difficulty}
      </p>
    </div>
  );
}

export default Card;
