import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  //   const handleOnClick = () => {
  //     setNum(num + 1);
  //   };
  useEffect(() => {
    console.log("initial count is:", count);
    setCount(count + 1);
  }, []);
  return (
    <>
      <h1>I have rendered {count} times</h1>
      {/* <button onClick={handleOnClick}>Count</button> */}
    </>
  );
}

export default Counter;
