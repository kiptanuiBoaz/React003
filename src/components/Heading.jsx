import React from "react";

function Heading() {
  let greeting = "";
  let style = {
    color: ""
  };
  const fullDate = new Date();
  const fullTime = fullDate.getHours();

  if (fullTime < 12) {
    greeting = "morning";
    style.color = "green";
  } else if (fullTime < 18) {
    greeting = "afternoon";
    style.color = "blue";
  } else {
    greeting = "evening";
    style.color = "red";
  }
  return (
    <h1 className="heading" style={style}>
      Good {greeting}
    </h1>
  );
}

export default Heading;
