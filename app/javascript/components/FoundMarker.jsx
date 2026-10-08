import React from "react";

function FoundMarker({ x, y }) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${y - 4}px`,
        left: `${x - 6}px`,
        background: "black",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 64 64"
        style={{ fill: "#FA5252" }}
      >
        <path d="M50.385,50.385c-10.153,10.153-26.616,10.153-36.77,0s-10.153-26.616,0-36.77s26.616-10.153,36.77,0	S60.538,40.231,50.385,50.385z M43.314,40.485L36.243,32l7.071-8.485l-2.828-2.828L32,27.757l-8.485-7.071l-2.828,2.828L27.757,32	l-7.071,8.485l2.828,2.828L32,36.243l8.485,7.071L43.314,40.485z"></path>
      </svg>
    </div>
  );
}

export default FoundMarker;
