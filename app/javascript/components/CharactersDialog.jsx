import React from "react";
import styles from "../../assets/stylesheets/CharactersDialog.module.css";
import buttonStyles from "../../assets/stylesheets/CharacterButton.module.css";

function CharactersDialog({ characters = [] }) {
  return characters ? (
    <div>
      <h2>Who&apos;s this?</h2>
      <div className={buttonStyles.button_wrapper}>
        {characters.map((character) => (
          <button key={character.name} className={buttonStyles.button}>
            <div>
              <img src={character.location} alt={character.name} />
            </div>
            <p>{character.name}</p>
          </button>
        ))}
      </div>
    </div>
  ) : null;
}

export default CharactersDialog;
