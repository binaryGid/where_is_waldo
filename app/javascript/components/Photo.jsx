import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "../../assets/stylesheets/Photo.module.css";
import Characters from "./Characters";

function Photo() {
  const { id } = useParams();
  const [image, setImage] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetch(`/api/v1/show/${id}`)
      .then((response) => response.json())
      .then((results) => {
        if (!ignore) {
          setImage(results);
          console.log(results);
        }
      });
    return () => (ignore = true);
  }, []);

  return (
    <div>
      <div className={styles.titleBar}>
        <div>
          <p>{image.name}</p>
          <span className={styles.difficulty}>{image.difficulty}</span>
        </div>
        <Characters />
        <span>Timer</span>
      </div>
      <div className={styles.imgContainer}>
        <img src={image.image} alt={image.name} className={styles.img} />
      </div>
    </div>
  );
}

export default Photo;
