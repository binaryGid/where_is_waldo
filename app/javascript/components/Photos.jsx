import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import styles from "../../assets/stylesheets/Photos.module.css";
import { Link } from "react-router";

function Photos() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    let ignore = false;
    const url = "/api/v1/photos/index";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setImages((prev) => [...prev, ...data]);
        }
      })
      .catch((error) => {
        throw new Error(error);
      });

    return () => (ignore = true);
  }, []);

  if (!images) {
    return <p>Trouble sourcing images</p>;
  }

  return (
    <section>
      <div className={styles.container}>
        {images.map((image) => (
          <Link to={`/photo/${image.id}`} key={image.image}>
            <Card
              src={image.image}
              name={image.name}
              difficulty={image.difficulty}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Photos;
