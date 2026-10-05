import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import styles from "../../assets/stylesheets/Photo.module.css";
import wrapperStyle from "../../assets/stylesheets/CharactersDialog.module.css";

import Characters from "./Characters";
import CharactersDialog from "./CharactersDialog";

function Photo() {
  const { id } = useParams();
  const [image, setImage] = useState([]);
  const imgContainerRef = useRef(null);
  const [characters, setCharacters] = useState([]);

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
        console.log(result);

        if (!ignore) {
          setCharacters(result);
        }
      });
    return () => (ignore = true);
  }, []);

  const displayCharactersDialog = (e) => {
    const rect = e.target.getBoundingClientRect();
    const horizontalDiff = Number(rect.width) - Number(e.nativeEvent.offsetX);
    const verticalDiff = Number(rect.height) - Number(e.nativeEvent.offsetY);
    if (horizontalDiff > 330) {
      imgContainerRef.current.style.left = `${rect.left + e.nativeEvent.offsetX + 10}px`;
      imgContainerRef.current.style.right = null;
    } else {
      imgContainerRef.current.style.left = null;
      imgContainerRef.current.style.right = `calc(100vw - ${rect.left + e.nativeEvent.offsetX - 10}px)`;
    }
    if (verticalDiff > 297) {
      imgContainerRef.current.style.top = `${rect.top + e.nativeEvent.offsetY + 10}px`;
      imgContainerRef.current.style.bottom = null;
    } else {
      imgContainerRef.current.style.bottom = `calc(100dvh - ${rect.top + e.nativeEvent.offsetY - 10}px)`;
      imgContainerRef.current.style.top = null;
    }

    imgContainerRef.current.showPopover();
  };

  return (
    <div>
      <div className={styles.titleBar}>
        <div>
          <p>{image.name}</p>
          <span className={styles.difficulty}>{image.difficulty}</span>
        </div>
        <Characters characters={characters} />
        <span>Timer</span>
      </div>
      <div className={styles.imgContainer}>
        <img
          src={image.image}
          alt={image.name}
          className={styles.img}
          onClick={displayCharactersDialog}
        />
        <div
          ref={imgContainerRef}
          popover="auto"
          className={wrapperStyle.wrapper}
        >
          <CharactersDialog characters={characters} />
        </div>
      </div>
    </div>
  );
}

export default Photo;
