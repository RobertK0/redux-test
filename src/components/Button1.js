import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter1 } from "../store/slice";

const Button1 = () => {
  const dispatch = useDispatch();
  const { counter1 } = useSelector((state) => state.slice2);
  console.log("button1 rerendered");

  const incrementHandler = () => {
    dispatch(incrementCounter1());
  };
  return (
    <button onClick={incrementHandler}>Count is {counter1}</button>
  );
};

export default Button1;
