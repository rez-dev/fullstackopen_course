import { useState } from "react";

const PositivePercentage = ({ good, total }) => {
  // Calculate percentage of positives according to total
  const calculatePositivePercentage = (good, total) => {
    if (good === 0 || total === 0) {
      return 0;
    }
    const percentage = (good / total) * 100;
    return percentage;
  };

  return <p>positive: {calculatePositivePercentage(good, total)} %</p>;
};

export default PositivePercentage;
