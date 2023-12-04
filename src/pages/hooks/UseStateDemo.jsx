import React, { useState } from "react";

const UseStateDemo = () => {
  const [number, setNumber] = useState(1);
  const [state, setState] = useState({
    like: 1,
    view: 1,
  });
  return (
    <div className="container">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <hr />
      <h3>
        Like : {state.like} - View: {state.view}
      </h3>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setState({
            ...state,
            like: state.like + 1,
          });
        }}
      >
        Like
      </button>
      <button
        className="btn btn-outline-success mx-2"
        onClick={() => {
          setState({
            ...state,
            view: state.view + 1,
          });
        }}
      >
        View
      </button>
      <hr />
    </div>
  );
};

export default UseStateDemo;
