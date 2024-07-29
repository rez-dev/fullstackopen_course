import { useState } from "react";
import Button from "./components/Button";
import PositiveCount from "./components/PositivePercentage";
import Average from "./components/Average";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  // const [average, setAverage] = useState[0];

  // const handleLeftClick = () =>
  //   setClicks({ ...clicks, left: clicks.left + 1 })

  // count feedback
  const values = { good: 1, neutral: 0, bad: -1 };

  // const averageCalculate = (good, neutral, bad, values) => {
  //   const goodCount = good * values[good];
  //   const neutralCount = neutral & values[neutral];
  //   const badCount = bad * values[bad];
  //   return goodCount + neutralCount + badCount;
  // };

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        setValue={setGood}
        setTotal={setTotal}
        value={good}
        text={"good"}
        total={total}
      />
      <Button
        setValue={setNeutral}
        setTotal={setTotal}
        value={neutral}
        text={"neutral"}
        total={total}
      />
      <Button
        setValue={setBad}
        setTotal={setTotal}
        value={bad}
        text={"bad"}
        total={total}
      />
      {/* <Button setValue={setNeutral} value={neutral} text={"neutral"} />
      <Button setValue={setBad} value={bad} text={"bad"} /> */}

      <h1>statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <Average good={good} neutral={neutral} bad={bad} total={total} />
      <PositiveCount good={good} total={total} />
    </div>
  );
};

export default App;
