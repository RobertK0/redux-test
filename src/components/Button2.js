import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter2 } from "../store/slice";

const Button2 = () => {
  const dispatch = useDispatch();
  const counter2 = useSelector((state) => state.slice2.counter2);
  console.log("button2 rerendered");

  const incrementHandler = () => {
    dispatch(incrementCounter2());
  };
  return (
    <button onClick={incrementHandler}>Count is {counter2}</button>
  );
};

export default Button2;
