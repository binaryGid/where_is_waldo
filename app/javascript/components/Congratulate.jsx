import React from "react";
import style from "../../assets/stylesheets/Congratulation.module.css";

function Congartulate({ duration, close }) {
  return (
    <div className={style.wrapper}>
      <button onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <path
            fill="#F44336"
            d="M21.5 4.5H26.501V43.5H21.5z"
            transform="rotate(45.001 24 24)"
          ></path>
          <path
            fill="#F44336"
            d="M21.5 4.5H26.5V43.501H21.5z"
            transform="rotate(135.008 24 24)"
          ></path>
        </svg>
      </button>
      <h3>Congratulations!</h3>
      <img src="/images/congrats.png" alt="congrats" />
      <p>It took you ...</p>
      <p>{duration}</p>
      <span>
        <a target="_blank" href="https://icons8.com/icon/91169/inspection">
          Complete
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </span>
    </div>
  );
}

export default Congartulate;
