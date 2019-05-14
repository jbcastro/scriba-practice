import React from "react"
// import TodosData from "./TodosData"


function TodoItem(props) {
    if (props.item.cool === true) {
        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    checked={props.item.completed}
                    onChange={() => props.handleChange(props.item.id)}
                />
                <p>{props.item.text}</p>
                <img src={props.item.photo} />

            </div>
        )
    }
    else {
        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    checked={props.item.completed}
                    onChange={() => props.handleChange(props.item.id)}
                />
                <p>{props.item.text}</p>


            </div>
        )
    }
}



// function TodoItem(props) {

//     return (
//         <div className="todo-item">
//             <input type="checkbox" checked={props.item.completed} onChange={() => console.log("nice")} />
//             <p>Text={props.item.text}</p>
//         </div>
//     )
// }

export default TodoItem