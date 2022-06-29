import React, { useState } from "react";
import "../css/Todo.css";

import EditTask from "./EditTask";
import EditCategory from "./EditCategory";

function Todo() {
  const [modeViewTodo, setmodeViewTodo] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [category, setCategory] = useState("All");
  const [categoryList, setCategoryList] = useState(["Work", "Life", "Family"]);

  return (
    <div className="todo">
      <div className="todo-header">
        <h1>Todo</h1>

        <div className="todo-options">
          <div className="todo-category">
            <label
              onClick={() => {
                setmodeViewTodo(true);
                setCategory("All");
              }}
              style={{
                backgroundColor:
                  modeViewTodo && category === "All" ? "white" : "transparent",
                color:
                  modeViewTodo && category === "All"
                    ? "rgb(255, 65, 65)"
                    : "white",
                opacity: modeViewTodo ? 1 : 0.5,
              }}
            >
              All
            </label>
            {categoryList.length > 0 ? (
              <select
                onChange={(e) => {
                  setmodeViewTodo(true);
                  setCategory(e.target.value);
                }}
                className="todo-category-select"
                style={{
                  backgroundColor:
                    modeViewTodo && category !== "All"
                      ? "white"
                      : "rgb(255, 65, 65)",
                  color:
                    modeViewTodo && category !== "All"
                      ? "rgb(255, 65, 65)"
                      : "white",
                  opacity: modeViewTodo ? 1 : 0.5,
                }}
              >
                {categoryList.map((el, i) => (
                  <option
                    key={i}
                    className="todo-category-option"
                    style={{
                      opacity: modeViewTodo ? 1 : 0.5,
                    }}
                  >
                    {el}
                  </option>
                ))}
              </select>
            ) : (
              <div></div>
            )}
          </div>
          <label
            onClick={() => {
              setmodeViewTodo(false);
            }}
            style={{
              backgroundColor: !modeViewTodo ? "white" : "transparent",
              color: !modeViewTodo ? "rgb(255, 65, 65)" : "white",
              opacity: !modeViewTodo ? 1 : 0.5,
              // height: "20px",
            }}
          >
            <i className="fa-solid fa-pencil"></i>
          </label>
        </div>
      </div>
      {modeViewTodo ? (
        <EditTask
          category={category}
          categoryList={categoryList}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ) : (
        <EditCategory
          categoryList={categoryList}
          setCategoryList={setCategoryList}
        />
      )}
      {/* <button
        onClick={() => {
          console.log(todoList);
        }}
      >
        click me
      </button> */}
    </div>
  );
}

export default Todo;
