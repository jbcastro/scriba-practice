import React from "react";
import Todo from "./componets/Todo";
import DateTime from "./componets/DateTime";
import JokeCard from "./componets/JokeCard";
// function App() {
//   return (
//     <div>
//       <DateTime />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />
//       <Todo />s
//     </div>
//   );
// }

function App() {
  return (
    <div className="jokes">
      <JokeCard joke={{ question: "Guess what", punchline: "Chicken Butt" }} />
      <JokeCard joke={{ question: "Who's house?", punchline: "Run's House" }} />
      <JokeCard joke={{ punchline: "Mike Tyson" }} />
      <JokeCard joke={{ question: "Dance Yrself", punchline: "Clean" }} />
      <JokeCard joke={{ punchline: "My Life" }} />
    </div>
  );
}
export default App;
