import React, { useState } from "react";

function InputArray() {
  // Initialize state for the input value and the array of objects
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  // Function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Create a new item object with a unique id
    const newItem = {
      id: Date.now(),
      value: inputValue,
    };

    // Add the new item object to the array
    setItems([...items, newItem]);

    // Clear the input field
    setInputValue("");
  }

  // Function to handle deleting an item from the array
  function handleDelete(id) {
    console.log(id);
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h2>Input Array</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => {
          const { id, value } = item;
          console.log(id, "hi");
          return (
            <li key={id}>
              {value}
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InputArray;
