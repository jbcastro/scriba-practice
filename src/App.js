import React from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"


class App extends React.Component {
  render() {
    const todoItems = TodosData.map(item => (
      <TodoItem key={item.id} todo={item} />
    ))
    return (
      <div>{todoItems}</div>
    )
  }
}


// class App extends React.Component {
//   yourMethod() {

//   }
//   render() {
//     this.yourMethod()

//     return (
//       <div>Yo</div>
//     )
//   }
// }

// function App() {
//   const todoItems = TodosData.map(item => (
//     <TodoItem key={item.id} todo={item} />
//   ))
//   return (<div className="todo-list">
//     {todoItems}
//   </div>
//   )
// }



export default App






// import React from "react";
// import JokesData from "./componets/JokesData";
// import Joke from "./componets/Joke";


// function App() {
//   const jokeComponents =
//     JokesData.map(joke => <Joke key={joke.id}
//       question={joke.question} punchline={joke.punchline} />)

//   return (
//     <div>
//       {jokeComponents}
//     </div>
//   );
// }
// export default App;
