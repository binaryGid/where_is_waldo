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
          console.log(data);
        }
      });

    return () => (ignore = true);
  }, []);

  function getCoordinates(e) {
    const target = e.target;
    const x = e.pageX - target.offsetLeft;
    const y = e.pageY - target.offsetTop;
    const z = e.pageY - target.offsetTop;

    const width = (x / target.width) * 100;
    const height = (y / target.height) * 100;

    console.log(width, height);
    console.log(target.width, target.height);
  }

  if (!images) {
    return <p>Trouble sourcing images</p>;
  }

  return (
    <section>
      <div className={styles.container}>
        {images.map((image) => (
          <Link to={`/photo/${image.id}`}>
            <Card
              key={image.image}
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
