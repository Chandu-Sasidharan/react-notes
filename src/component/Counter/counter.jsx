import { useState } from "react";
import "./counter.css";

function Counter() {
  //current value of count:0;
  //const [count, setCount] = useState(0);
  const [name, setName] = useState("upasana");
  const [age, setAge] = useState(20);

  //let count = 0;

  const handleOnClick = () => {
    //setCount(count + 1);
    // count = count + 1;
    // console.log(count);
    setName("Anusha");
    setAge(21);
  };
  return (
    <>
      <h2>
        My name is {name} and I am {age}y old
      </h2>
      <button className="btn" onClick={handleOnClick}>
        Click me
      </button>
    </>
  );
}

export default Counter;
