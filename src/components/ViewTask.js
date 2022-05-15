import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ViewTask({ category, todoList, setTodoList }) {
  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    let updatedList = [...todoList];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setTodoList(updatedList);
  };

  const handleUpdate = (id) => {
    let updatedList = [...todoList];
    updatedList.forEach((todo) => {
      if (todo.id === id) {
      }
    });
  };
  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Droppable droppableId="list-container">
        {(provided) => (
          <div
            className="list-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todoList
              .filter((el) =>
                category === "All" ? true : el.category === category
              )
              .map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={"draggable-" + item.id}
                  index={index}
                  isDragDisabled={category === "All" ? false : true}
                >
                  {(provided) => (
                    <div
                      className="item-container"
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <div key={index} className="todo-task">
                        <input
                          className="checkbox"
                          type="checkbox"
                          id={`checkbox${index}`}
                          onChange={() => {
                            const list = [];
                            // const indexofTodo = todoList.indexof(
                            //   todoList.find((el) => el.id === item.id)
                            // );
                            const indexofTodo = todoList
                              .map((el) => el.id)
                              .indexOf(item.id);

                            todoList.map((todo, i) => {
                              indexofTodo == i
                                ? list.push({ ...todo, done: !todo.done })
                                : list.push(todo);
                            });
                            setTodoList(list);
                          }}
                        ></input>
                        <label
                          className="todo-check"
                          for={`checkbox${index}`}
                          style={{
                            visibility: `${item.done ? "visible" : "hidden"}`,
                            color: "red",
                          }}
                        >
                          ✔
                        </label>

                        <div
                          style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "0px 10px",
                          }}
                        >
                          {item.task}
                        </div>
                        <button
                          style={{
                            background: "none",
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                          }}
                          onClick={() => handleUpdate(item.id)}
                        >
                          <i class="fa-solid fa-pen"></i>
                        </button>
                        <button
                          style={{
                            background: "none",
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDelete(item.id)}
                        >
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ViewTask;
