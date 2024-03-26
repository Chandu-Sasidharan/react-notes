import { useEffect, useState } from "react";
import Spinner from "./Spinner";
// import Spinner from "./Spinner";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error));
    }, 3000);
  }, []);
  return (
    <>
      <h2>Fetching data from API</h2>
      <p>{data.length > 0 ? "data" : <Spinner />}</p>

      <ul>
        {data.map((item, i) => (
          <div key={i}>
            <li>Title is:{item.title}</li>
            <li>Body description:{item.body}</li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default FetchData;
