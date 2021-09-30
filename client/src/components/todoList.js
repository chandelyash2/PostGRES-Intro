import React, { useState, useEffect } from "react";
import EditTodo from "./editTodo";
function TodoList() {
  const [getTodo, setGetTodo] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const deleteTodo = async (id) => {
    try {
      const result = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setGetTodo(getTodo.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const getList = async () => {
    await fetch("http://localhost:5000/todos")
      .then((response) => response.json())
      .then((data) => setGetTodo(data));
  };

  return (
    <div className="container d-flex  flex-column  align-items-center mt-5">
      <h1 className="text text-align-center">List</h1>
      <div
        className="d-flex w-100"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ listStyle: "none" }}>
          {getTodo.map((d) => (
            <div
              kety={d.todo_id}
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                margin: "1rem",
                borderBottom: "2px solid gray",
              }}
            >
              <div
                style={{
                  margin: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <li> {d.description}</li>
                <div style={{display:'flex', alignItems:'center'}}>
                  <li style={{ marginLeft: "10px" }}>
                    <EditTodo todo={d} />
                  </li>
                  <li style={{ marginLeft: "10px" }}>
                    <button
                      className="btn-danger"
                      onClick={() => {
                        deleteTodo(d.todo_id);
                      }}
                      style={{height:'40px',borderRadius:'5px'}}
                    >
                      Delete
                    </button>
                  </li>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
