import React, { useState } from "react";
const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      title: title,
    };
    addTodo(newTodo);
    setTitle("");
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      {" "}
      <input
        type="text"
        placeholder="New ToDo"
        value={title}
        onChange={e => handleChange(e)}
      />{" "}
      <button type="submit">Add</button>{" "}
    </form>
  );
};
export default Form;
