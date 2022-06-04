import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import ".././styles.css";

export default function ReduxExperiment() {
  const { count } = useSelector((state) => state.counter);
  const { song } = useSelector((state) => state.song);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>
          Increment by 33
      </button>
    </div>
  );
} 