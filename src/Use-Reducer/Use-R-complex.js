import React, { useReducer, useState } from "react";
import "./useR.css";

const reducer = (todos, action) => {
  switch (action.type) {
    case "ADD-TODO":
      if (action.payload.name){
      return [
        ...todos,
        { id: Date.now(), name: action.payload.name, complete: false },
      ];
    } return todos
    case "TOGGLE-TODO":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case "REMOVE-TODO":
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};

export default function UserRComplex() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD-TODO", payload: { name: name } });
    setName("");
  };

  return (
    <>
      <div className="container">
        <div className="row" style={{textAlign:"left"}}>
          This requirement can be easily created by using the useReducer Hook. <br/>
          Below is a todo list generator: It has toggle and remove funcationality built using the useReducer. Enter any todo in the text box
          </div>
          <br/>
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </div>
      </div>
    </>
  );
}

const Todo = ({ todo, dispatch }) => {
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "10px"}}>
          <div className="col-md-4">
          <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
            {todo.name}
          </span>
          </div>
          <div className="col-md-4">
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "TOGGLE-TODO", payload: todo })}
          >
            Toggle
          </button>
          </div>
          <div className="col-md-4">
          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "REMOVE-TODO", payload: todo })}
          >
            Delete
          </button>
          </div>
        </div>
      </div>
    </>
  );
};
