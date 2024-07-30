import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, total }) => {
  const values = [1, 0, -1];

  const calculateAverageScore = (good, neutral, bad) => {
    if (total === 0) return 0;
    const goods = good * values[0];
    const neutrals = neutral * values[1];
    const bads = bad * values[2];
    const weightedTotal = goods + neutrals + bads;
    console.log(values[0], values[1], values[2]);
    console.log(good, bad, neutral);
    console.log(goods, neutrals, bads, total);
    const final = weightedTotal / total;
    return final;
  };

  const calculatePositivePercentage = (good, total) => {
    if (total === 0) {
      return 0;
    }
    const percentage = (good / total) * 100;
    return percentage;
  };

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"total"} value={total} />
      <StatisticLine
        text={"average"}
        value={calculateAverageScore(good, neutral, bad, total)}
      />
      <StatisticLine
        text={"positive"}
        value={calculatePositivePercentage(good, total)}
      />
    </div>
  );
};

export default Statistics;
