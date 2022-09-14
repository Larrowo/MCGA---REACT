import React from "react";

const TodoItem = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="task-container">
      {todo ? (
        <>
          <input type="checkbox" onClick={() => completeTodo(todo.id)} />

          <h2
            style={
              todo.completed
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {todo.title}
          </h2>

          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoItem;
