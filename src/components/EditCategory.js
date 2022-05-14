import React, { useState } from "react";
import ViewCategory from "./ViewCategory";

function EditCategory({ categoryList, setCategoryList }) {
  const [text, setText] = useState("");

  const handleAddCategory = () => {
    if (!text) {
      return;
    }
    setText("");
    setCategoryList([...categoryList, text]);
  };
  return (
    <>
      {categoryList.length > 1 && (
        <span className="todo-dndMessage">
          Drag and Drop to change the order
        </span>
      )}
      <div className="todo-list">
        <ViewCategory
          categoryList={categoryList}
          setCategoryList={setCategoryList}
        />
      </div>
      <div className="todo-addTask">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddCategory();
          }}
          style={{ width: "100%" }}
        >
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            className="todo-addTask-input"
            placeholder="Add category here"
          ></input>
          <input type="submit" style={{ display: "none" }} />
        </form>
        <button
          type="submit"
          onClick={handleAddCategory}
          style={{
            marginLeft: "10px",
            background: "none",
            color: "white",
            border: "1px solid white",
            borderRadius: "50%",
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default EditCategory;
