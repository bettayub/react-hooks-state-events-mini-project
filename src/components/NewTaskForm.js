import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]); // Default to the first category

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onTaskFormSubmit callback with the task data
    onTaskFormSubmit({ text, category });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskText">Details:</label>
        <input
          type="text"
          id="taskText"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label htmlFor="taskCategory">Category:</label>
        <select
          id="taskCategory"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
