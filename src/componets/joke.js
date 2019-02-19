import React from "react";
import JokeCard from "./JokeCard";

function Joke() {
  return (
    <div className="jokes">
      <JokeCard joke={{ question: "Guess what", punchline: "Chicken Butt" }} />
      <JokeCard joke={{ question: "Who's house?", punchline: "Run's House" }} />
      <JokeCard joke={{ punchline: "Mike Tyson" }} />
      <JokeCard joke={{ question: "Dance Yrself" }} />
      <JokeCard joke={{ punchline: "My Life" }} />
    </div>
  );
}

export default Joke;
