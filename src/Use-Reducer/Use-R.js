import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseR() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            
          <button
            className="btn btn-primary btn-block"
            onClick={() => dispatch({ type: "increment" })}
          >
            Plus
          </button>
          <p className="lead" style={{marginTop: "16px"}}>{state.count}</p>
          <button
            className="btn btn-primary btn-block"
            onClick={() => dispatch({ type: "decrement" })}
          >
            Minus
          </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
}
