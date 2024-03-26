import { useEffect, useState } from "react";
import "./counter.css";

function Num() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I am clicked");
  }, [nums]);
  return (
    <>
      <h1>{num}</h1>
      <button className="btn" onClick={() => setNum(num + 1)}>
        Num1
      </button>
      <h1>{nums}</h1>
      <button className="btn" onClick={() => setNums(nums - 1)}>
        Num2
      </button>
    </>
  );
}

export default Num;
