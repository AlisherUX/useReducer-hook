import React, { useReducer } from 'react';
import {reducer} from "../reducer";

const Counter = () => {
    const initialState = localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0;

    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <pre>{localStorage.getItem("count")}</pre>
        <h1>Count:{state}</h1>
        <button onClick={() => dispatch({type: "INC"})}>INCREMENT</button>
        <button onClick={() => dispatch({type: "DEC"})}>DECREMENT</button>
        <button onClick={() => dispatch({type: "MUL"})}>MULTI</button>
        <button onClick={() => dispatch({type: "RES"})}>RESET</button>
    </div>
    )
}

export default Counter;