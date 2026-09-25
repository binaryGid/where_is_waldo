import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "../../assets/stylesheets/Characters.module.css";

function Character() {
  const [characters, setCharacters] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/v1/show/${id}/characters/index`)
      .then((response) => response.json())
      .then((result) => setCharacters(result));
  });
  return (
    <div className={styles.wrapper}>
      {characters
        ? characters.map((character) => (
            <img
              src={character.location}
              alt={character.name}
              className={styles.character}
            />
          ))
        : ""}
    </div>
  );
}

export default Character;
