import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import styles from "../../assets/stylesheets/Photo.module.css";
import wrapperStyle from "../../assets/stylesheets/CharactersDialog.module.css";
import notHere from "../../assets/stylesheets/NotHere.module.css";

import Characters from "./Characters";
import CharactersDialog from "./CharactersDialog";
import FoundMarker from "./FoundMarker";
import Congartulate from "./Congratulate";

function Photo() {
  const [stopWatch, setStopwatch] = useState(0);
  const [image, setImage] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [offsets, setOffsets] = useState({});
  const [notification, setNotification] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const [timeTaken, setTimeTaken] = useState("");
  const popoverContainerRef = useRef(null);
  const notHereRef = useRef(null);
  const congratsRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    let interval = setInterval(() => {
      setStopwatch((prev) => prev + 1);
    }, 1000);
    if (timeTaken) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  useEffect(() => {
    let ignore = false;
    fetch(`/api/v1/show/${id}`)
      .then((response) => response.json())
      .then((results) => {
        if (!ignore) {
          setImage(results);
        }
      });
    return () => (ignore = true);
  }, []);

  useEffect(() => {
    let ignore = false;
    fetch(`/api/v1/show/${id}/characters/index`)
      .then((response) => response.json())
      .then((result) => {
        if (!ignore) {
          setCharacters(result);
        }
      });
    return () => (ignore = true);
  }, []);

  const displayCharactersDialog = (e) => {
    const rect = e.target.getBoundingClientRect();

    const x = Number(e.nativeEvent.offsetX);
    const y = Number(e.nativeEvent.offsetY);

    // const horizontalDiff = Number(rect.width) - x;
    // const verticalDiff = Number(rect.height) - y;
    // if (horizontalDiff > 330) {
    //   popoverContainerRef.current.style.left = `${rect.left + x + 10}px`;
    //   popoverContainerRef.current.style.right = null;
    // } else {
    //   popoverContainerRef.current.style.left = null;
    //   popoverContainerRef.current.style.right = `calc(100vw - ${rect.left + x - 10}px)`;
    // }
    // if (verticalDiff > 297) {
    //   popoverContainerRef.current.style.top = `${rect.top + y + 10}px`;
    //   popoverContainerRef.current.style.bottom = null;
    // } else {
    //   popoverContainerRef.current.style.bottom = `calc(100dvh - ${rect.top + y - 10}px)`;
    //   popoverContainerRef.current.style.top = null;
    // }

    const horizontalDiff = Number(rect.width) - x;
    const verticalDiff = Number(rect.height) - y;

    if (horizontalDiff > 330) {
      popoverContainerRef.current.style.left = `calc(${x + rect.left}px / 100vw * 100% + 10px)`;
      popoverContainerRef.current.style.right = null;
    } else {
      popoverContainerRef.current.style.left = `calc((${x + rect.left}px / 100vw * 100%) - 330px)`;
      popoverContainerRef.current.style.right = null;
    }
    if (verticalDiff > 295) {
      // popoverContainerRef.current.style.top = `calc(${y + rect.top}px / 100dvh * 100% + 10px)`;

      popoverContainerRef.current.style.top = `calc(${y + 316}px / 100dvh * 100%)`;
      popoverContainerRef.current.style.bottom = null;
    } else {
      popoverContainerRef.current.style.top = `calc(${y + 316 - 295}px / 100dvh * 100%)`;
      popoverContainerRef.current.style.bottom = null;
    }

    const width = (x / Number(rect.width)).toFixed(4) * 100;
    const height = (y / Number(rect.height)).toFixed(4) * 100;
    setDimensions((prev) => ({ ...prev, width, height }));

    // setOffsets({ ...offsets, x: x, y: y });
    setOffsets({
      ...offsets,
      x: (x * 100) / Number(rect.width),
      y: (y * 100) / Number(rect.height),
    });
    setNotification(null);

    popoverContainerRef.current.showPopover();
  };

  const mark = (character_id) => {
    setMarkers([...markers, { x: offsets.x, y: offsets.y }]);
    const updatedChars = characters.map((character) => {
      if (character.id == character_id) {
        character.found = true;
      }
      return character;
    });
    setCharacters(updatedChars);
    popoverContainerRef.current.hidePopover();
  };

  const formatTime = (time) => {
    let hour = Math.floor(time / 3600) % 24;
    let min = Math.floor(time / 60) % 60;
    let sec = time % 60;

    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    return `${hour} : ${min} : ${sec}`;
  };

  const completeEpisode = () => {
    const complete = characters.every((character) => character.found);

    if (complete) {
      const url = "/api/v1/leaderboards/patch";
      const token = document.querySelector("meta[name='csrf-token']").content;

      const body = {
        photo_id: id,
        complete: complete,
      };
      fetch(url, {
        method: "PATCH",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          return formatTime(Number(result.duration));
        })
        .then((result) => {
          setTimeTaken(result);
          congratsRef.current.showModal();
        });
    }
  };

  const alertWrongSelection = () => {
    setNotification(true);
  };

  const renderStopwatch = () => {
    return formatTime(stopWatch);
  };

  const closeDialog = () => {
    congratsRef.current.close();
  };

  return (
    <div>
      <div className={styles.titleBar}>
        <div>
          <p>{image.name}</p>
          <span className={styles.difficulty}>{image.difficulty}</span>
        </div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9.5V13.5L14.5 15M12 5C7.30558 5 3.5 8.80558 3.5 13.5C3.5 18.1944 7.30558 22 12 22C16.6944 22 20.5 18.1944 20.5 13.5C20.5 8.80558 16.6944 5 12 5ZM12 5V2M10 2H14M20.329 5.59204L18.829 4.09204L19.579 4.84204M3.67102 5.59204L5.17102 4.09204L4.42102 4.84204"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {renderStopwatch()}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "16px",
        }}
      >
        <span>Characters to seek: </span>
        <Characters characters={characters} />
      </div>
      <div className={styles.imgContainer}>
        <img
          src={image.image}
          alt={image.name}
          className={styles.img}
          onClick={displayCharactersDialog}
        />
        {notification && (
          <p
            style={{
              position: "absolute",
              // left: `${offsets.x + 8}px`,
              // top: `${offsets.y - 8}px`,
              left: `${offsets.x}%`,
              top: `${offsets.y}%`,
            }}
            className={notHere.notHere}
            ref={notHereRef}
          >
            Not here!
          </p>
        )}
        {markers.length > 0 &&
          markers.map((marker, index) => (
            <FoundMarker key={index} x={marker.x} y={marker.y} />
          ))}

        <div
          ref={popoverContainerRef}
          popover="auto"
          className={wrapperStyle.wrapper}
        >
          <CharactersDialog
            characters={characters}
            width={dimensions.width}
            height={dimensions.height}
            photo_id={id}
            mark={mark}
            alert={alertWrongSelection}
            isComplete={completeEpisode}
            parent={popoverContainerRef}
          />
        </div>
      </div>
      <dialog
        ref={congratsRef}
        style={{
          margin: "auto",
          width: "100%",
          maxWidth: "480px",
          border: "1px solid #2d514e",
        }}
      >
        {timeTaken ? (
          <Congartulate duration={timeTaken} close={closeDialog} id={id} />
        ) : null}
      </dialog>
    </div>
  );
}

export default Photo;
