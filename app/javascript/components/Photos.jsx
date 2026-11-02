import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import styles from "../../assets/stylesheets/Photos.module.css";
import { Link } from "react-router";

function Photos() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    const url = "/api/v1/photos/index";
    fetch(url)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error. Please refresh");
        }
        return response.json();
      })
      .then((data) => {
        if (!ignore) {
          setImages((prev) => [...prev, ...data]);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    return () => (ignore = true);
  }, []);

  if (error) return <p>A network error was encounted. Please refresh</p>;
  if (loading) return <p>Loading...</p>;

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
