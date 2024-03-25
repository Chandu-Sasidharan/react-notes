import { useState } from "react";

function ArrayState() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);

  const handleOnClick = () => {
    //length of array = 6
    //index is 0 - 5
    //console.log(arr[arr.length - 1] + 1);//7
    const newArr = arr[arr.length - 1] + 1;
    setArr([...arr, newArr]);
  };
  return (
    <>
      <h2>Array State</h2>
      <button className="btn" onClick={handleOnClick}>
        Increment
      </button>
      <ul>
        {arr.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ArrayState;
