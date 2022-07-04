import { useEffect, useState } from "react";
import { Restaurent } from "./Components/Restaurent";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [filterRating, setFilterRating] = useState(0);
  const [page, setPage] = useState(1);
  const [costForTwoOrder, setCostForTwoOrder] = useState("ASC");

  function getfetch({ page, filterRating, costForTwoOrder }) {
    return fetch(
      "https://stark-shore-90477.herokuapp.com/restaurants" +
        `?rating_gte=${filterRating}&_page=${page}&_limit=2&_sort=costForTwo&_order=${costForTwoOrder}`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);

        setData(res);
      })
      .catch((err) => {
        // console.log(err)
      });
  }

  useEffect(() => {
    getfetch({ page, filterRating, costForTwoOrder });
  }, [page, filterRating, costForTwoOrder]);

  // console.log(data)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        prev
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      <div>
        <button onClick={() => setFilterRating(4)}>Greater than 4</button>
        <button onClick={() => setFilterRating(3)}>Greater than 3</button>
        <button onClick={() => setFilterRating(2)}>Greater than 2</button>
        <button onClick={() => setFilterRating(1)}>Greater than 1</button>
        <button onClick={() => setFilterRating(0)}>Show All</button>
      </div>
      <button
        disabled={costForTwoOrder === "ASC"}
        onClick={() => setCostForTwoOrder("ASC")}
      >
        COST FOR TWO ASC
      </button>
      <button
        disabled={costForTwoOrder === "DESC"}
        onClick={() => setCostForTwoOrder("DESC")}
      >
        COST FOR TWO DESC
      </button>

      <div>
        {data.map((elem) => (
          <Restaurent key={elem.id} data={elem} />
        ))}
      </div>
    </div>
  );
}
