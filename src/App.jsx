// App.js
import {
  increment,
  decrement,
  reset,
  //   StorInputvalue,
} from "./features/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
// import { response } from "express";

function App() {
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.counter.value);

  const [isdata, setIsData] = useState([]);

  const HandleAction = () => {
    fetch("http://localhost:3000/api/videos/genre/action")
      .then((response) => response.json())
      .then((data) => setIsData(data));
  };

  const HandleCrime = () => {
    fetch("http://localhost:3000/api/videos/genre/crime")
      .then((response) => response.json())
      .then((data) => setIsData(data));
  };

  return (
    <>
      {/* <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button> */}

      {/* <p>Count is {count}</p> */}
      {/* api */}
      <button onClick={HandleAction}>Action movies</button>
      <button onClick={HandleCrime}>Action Crime</button>

      {isdata.map((item) => (
        <div key={item.id} style={{backgroundColor: 'black'}}>
          <strong>{item.name}</strong>
        </div>
      ))}
    </>
  );
}

export default App;
