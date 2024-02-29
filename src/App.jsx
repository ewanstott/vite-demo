import React from "react";
import { useSelector, useDispatch } from "react-redux";
//useDispatch - to send action

const App = () => {
  const count = useSelector((state) => {
    return state.count;
  }); // send a function to request state

  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MINUS" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        RESET
      </button>
      <p>Count: {count}</p>
    </>
  );
};

export default App;
