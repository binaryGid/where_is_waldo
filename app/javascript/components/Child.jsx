import React from "react";

export default function Child({ mm }) {
  return (
    <div>
      <h2>Child</h2>
      <button onClick={() => mm("hi")}>click</button>
    </div>
  );
}
