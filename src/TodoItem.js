import React from "react"
import TodosData from "./TodosData"

function TodoItem(props) {

    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todo.completed} />
            <p>Text={props.todo.text}</p>
        </div>
    )
}

export default TodoItem