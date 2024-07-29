const Average = ({ good, neutral, bad, total }) => {
  const values = [{ good: 1 }, { neutral: 0 }, { bad: -1 }];
  // console.log(values[0].good, values[1].neutral, values[2].bad);

  const calculateAverageScore = (good, neutral, bad) => {
    if (total === 0) return 0;
    const goods = good * values[0].good;
    const neutrals = neutral * values[1].neutral;
    const bads = bad * values[2].bad;
    const weightedTotal = goods + neutrals + bads;
    console.log(values[0].good, values[1].neutral, values[2].bad);
    console.log(good, bad, neutral);
    console.log(goods, neutrals, bads, total);
    const final = weightedTotal / total;
    return final;
  };
  return <p>average: {calculateAverageScore(good, neutral, bad, total)}</p>;
};

export default Average;
