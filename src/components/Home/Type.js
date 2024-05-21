import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Employed at GHA Solutions",
          "Studied A-Levels at Burnley College",
          "Self-Taught C#, Python, Java & SQL",
          "Passion Driven",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
