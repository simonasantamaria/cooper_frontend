import React from 'react'

export default function Todo({ todo,toggleTodo }) {
  function handleAddTodoClick() {
    toggleTodo(todo.id)
  }
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleAddTodoClick}/>
        {todo.name}
      </label>
    </div>
  )
}
