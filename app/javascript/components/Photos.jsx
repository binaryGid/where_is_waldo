import React from "react";
const { useEffect, useState } = require("react");

function Photos() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    let ignore = false;
    const url = "/api/v1/photos/index";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (ignore) {
          setImage(res[0].image);
          console.log(res[0]);
        }
      });

    return () => (ignore = true);
  });

  return (
    <>
      <img src={image} alt="p" />
    </>
  );
}

export default Photos;
