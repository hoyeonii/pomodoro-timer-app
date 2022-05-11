import React, { useEffect, useState } from "react";
import "../css/Todo.css";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragnDrop from "./DragnDrop.js";
function Todo() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);
  const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item, monitor) => {
      const moveTo = Math.floor(
        (monitor.getSourceClientOffset().y -
          monitor.getInitialSourceClientOffset().y) /
          42
      );
      handleDrop(item.todo, moveTo);
      console.log(todoList);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  }));
  const handleDrop = (todo, moveTo) => {
    let curIndex = todoList.indexOf(todo);
    // let moveIndex = moveTo < 0 ? moveTo + 1 : moveTo;
    let index = curIndex + moveTo;
    console.log(todoList);
    console.log(moveTo);
    console.log(curIndex);
    console.log(index);
    let copyTodoList = [...todoList];
    copyTodoList.splice(curIndex, 1);

    console.log([
      ...copyTodoList.slice(0, index),
      todo,
      ...copyTodoList.slice(index, copyTodoList.length + 1),
    ]);
    setTodoList([
      ...copyTodoList.slice(0, index),
      todo,
      ...copyTodoList.slice(index, copyTodoList.length + 1),
    ]);
  };
  const handleAddTask = () => {
    if (!text) {
      return;
    }
    setText("");
    // let copyTodoList = todoList.push({ task: text, done: false });
    // setTodoList(copyTodoList);
    setTodoList([
      ...todoList,
      { id: todoList.length, task: text, done: false },
    ]);
    console.log(todoList);
    console.log([
      ...todoList,
      { id: todoList.length, task: text, done: false },
    ]);
  };
  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo">
      <div className="todo-header">Todo</div>
      <div className="todo-list" ref={drop}>
        {todoList.length !== 0 ? (
          todoList.map((todo, i) => (
            <DragnDrop
              todo={todo}
              i={i}
              // id={i}
              todoList={todoList}
              setTodoList={setTodoList}
              handleDelete={handleDelete}
            />
            // <div key={i} className="todo-task">
            //   <input
            //     className="checkbox"
            //     type="checkbox"
            //     id={`checkbox${i}`}
            //     onChange={() => {
            //       const list = [];
            //       todoList.map((todo, index) => {
            //         index == i
            //           ? list.push({ ...todo, done: !todo.done })
            //           : list.push(todo);
            //       });
            //       setTodoList(list);
            //     }}
            //   ></input>
            //   <label className="todo-check" for={`checkbox${i}`}>
            //     ✔
            //   </label>

            //   <div
            //     style={{
            //       width: "100%",
            //       textAlign: "left",
            //       padding: "0px 10px",
            //     }}
            //   >
            //     {todo.task}
            //   </div>
            //   <button
            //     style={{
            //       background: "none",
            //       border: "none",
            //       color: "white",
            //       cursor: "pointer",
            //     }}
            //     onClick={() => handleDelete(todo.id)}
            //   >
            //     x
            //   </button>
            // </div>
          ))
        ) : (
          <div className="todo-message">You don't have any task yet</div>
        )}
      </div>
      <div className="todo-addTask">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(e.target[0].value);
            handleAddTask();
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
            placeholder="Add your task here"
          ></input>
          <input type="submit" style={{ display: "none" }} />
        </form>
        <button
          type="submit"
          onClick={handleAddTask}
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
      Task {todoList.filter((todo) => todo.done == true).length}/
      {todoList.length} complete
    </div>
    // </DndProvider>
  );
}

export default Todo;
