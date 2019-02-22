import React from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"



// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggenIn: false
    }
  }
  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggenIn ? 'IN' : 'OUT'}</h1>
      </div>
    )
  }
}



// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: "Steve",
//       age: "55",
//       butt: "Large"
//     }

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     const ass = this.state.butt
//     console.log({ ass })

//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age} years old</h3>
//         <button onClick={this.handleClick}>Push</button>
//         <h1>{this.state.butt}</h1>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       answer: "Yes"
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     const todoItems = TodosData.map(item => (
//       <TodoItem key={item.id} todo={item} />
//     ))
//     return (
//       <div>{todoItems}</div>
//     )
//   }
// }


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
