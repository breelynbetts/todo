import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <button class="secondary-content" onClick={()=> {deleteTodo(todo.id)}}>COMPLETE</button>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos' left! </p>
    )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos