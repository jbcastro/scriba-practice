import React from "react";

function JokeCard(props) {
  if (props.joke.question == null) {
    return (
      <div>
        <h1>Greatest: {props.joke.punchline}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Question: {props.joke.question}</h1>
        <h2>Punchline: {props.joke.punchline}</h2>
      </div>
    );
  }
}

export default JokeCard;
