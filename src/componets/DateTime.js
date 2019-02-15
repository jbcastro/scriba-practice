import React from "react";

function DateTime() {
  const date = new Date();
  const hours = date.getHours();
  const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00"
  };
  let timeOfDay;
  const firstName = "Joseph";
  const lastName = "Castro";
  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "red";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "blue";
  } else {
    timeOfDay = "night";
    styles.color = "yellow";
  }

  return (
    <h1 style={styles}>
      Good {timeOfDay} {firstName} {lastName}
    </h1>
  );
}
export default DateTime;
