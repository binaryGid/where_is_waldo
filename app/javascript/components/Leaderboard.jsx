import React, { useEffect, useState } from "react";
import style from "../../assets/stylesheets/Leaderboard.module.css";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState();

  useEffect(() => {
    fetch("/api/v1/leaderboards/index")
      .then((response) => response.json())
      .then((result) => {
        setLeaderboard(result);
      });
  }, []);
  const formatTime = (time) => {
    let hour = Math.floor(time / 3600) % 24;
    let min = Math.floor(time / 60) % 60;
    let sec = time % 60;

    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    return `${hour} : ${min} : ${sec}`;
  };

  const formatCardinalNumber = (num) => {
    const numToStr = `${num}`;
    if (numToStr.slice(-1) === "1") {
      return `${numToStr}st`;
    } else if (numToStr.slice(-1) === "2") {
      return `${numToStr}nd`;
    } else if (numToStr.slice(-1) === "3") {
      return `${numToStr}rd`;
    } else {
      return `${numToStr}th`;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <h2>Leaderboard</h2>
      <table className={style.table}>
        <caption className={style.caption}>General leaderboard</caption>
        <thead className={style.thead}>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Score (time)</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard &&
            leaderboard.map((candidate, index) => (
              <tr>
                <td>{formatCardinalNumber(index + 1)}</td>
                <td>{candidate.name}</td>
                <td>{formatTime(candidate.duration)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
