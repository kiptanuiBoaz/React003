import React from "react";
import ReactDOM from "react-dom";

var greeting = "";
var style = {
  color: ""
};
const fullDate = new Date();
const fullTime = fullDate.getHours();

if (fullTime > 0 && fullTime < 12) {
  greeting = "morning";
  style.color = "green";
} else if (fullTime > 12 && fullTime < 18) {
  greeting = "afternoon";
  style.color = "blue";
} else {
  greeting = "evening";
  style.color = "red";
}
ReactDOM.render(
  <h1 className="heading" style={style}>
    Good {greeting}
  </h1>,
  document.getElementById("root")
);
