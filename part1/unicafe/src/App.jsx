import { useState } from "react";
import Button from "./components/Button";
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const handleLeftClick = () =>
  //   setClicks({ ...clicks, left: clicks.left + 1 })

  return (
    <div>
      <h1>give feedback</h1>
      <Button setValue={setGood} value={good} text={"good"} />
      <Button setValue={setNeutral} value={neutral} text={"neutral"} />
      <Button setValue={setBad} value={bad} text={"bad"} />

      <h1>statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  );
};

export default App;
