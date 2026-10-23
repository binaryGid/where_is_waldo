import React from "react";
import styles from "../../assets/stylesheets/CharactersDialog.module.css";
import buttonStyles from "../../assets/stylesheets/CharacterButton.module.css";

function CharactersDialog({
  characters = [],
  width,
  height,
  photo_id,
  mark,
  alert,
  isComplete,
  parent,
}) {
  const checkResult = (e, id) => {
    e.preventDefault();
    const url = "/api/v1/answers/create";
    const body = {
      width: width,
      height: height,
      photo_id: photo_id,
      character_id: id,
    };
    const token = document.querySelector("meta[name='csrf-token']").content;

    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.found) {
          mark(result.character_id);
          isComplete();
        } else {
          alert();
        }
        parent.current.hidePopover();
      });
  };
  return characters ? (
    <div>
      <div className={styles.titleWrapper}>
        <h2>Who&apos;s this?</h2>
        <button type="button" onClick={() => parent.current.hidePopover()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="28"
            height="28"
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
      </div>
      <div className={buttonStyles.button_wrapper}>
        {characters.map((character) => (
          <button
            key={character.id}
            className={buttonStyles.button}
            disabled={character.found}
            onClick={(e) => checkResult(e, character.id)}
          >
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
