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
        "X-CSRF_Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.found) {
          mark(result.character_id);
        } else {
          alert();
        }
        parent.current.hidePopover();
      });
  };
  return characters ? (
    <div>
      <h2>Who&apos;s this?</h2>
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
