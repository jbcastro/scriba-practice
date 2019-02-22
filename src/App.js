import React from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: TodosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {

    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updateTodos
      }
    })

  }



  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}
export default App;



// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: TodosData
//     }
//   }

//   render() {
//     const todoItems = this.state.todos.map(item =>
//       <TodoItem key={item.id} item={item} />)
//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     )
//   }
// }



// export default App;

// import React from "react"

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0

//         }
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(){
//         this.setState(prevState=>{
//             return {
//                 count: prevState.count  + 1
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }

// export default App



// function myFunction(){
//   console.log("I be clicked")
// }
// function myFunction2(){
//   console.log("tickle tickle")
// }
// function App() {
//   return (
//       <div>
//           <img src="https://www.fillmurray.com/200/100" onMouseEnter={myFunction2}/>
//           <br />
//           <br />
//           <button onClick={myFunction}>Click me</button>
//       </div>
//   )
// }
