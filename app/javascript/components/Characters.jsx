import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "../../assets/stylesheets/Characters.module.css";

function Character({ characters }) {
  return (
    <div className={styles.wrapper}>
      {characters
        ? characters.map((character) => (
            <img
              key={character.name}
              src={character.location}
              alt={character.name}
              className={character.found ? styles.found : styles.character}
            />
          ))
        : ""}
    </div>
  );
}

export default Character;
