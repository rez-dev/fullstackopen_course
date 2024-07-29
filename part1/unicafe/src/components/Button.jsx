const Button = ({ setValue, setTotal, total, text, value }) => {
  const handleClick = () => {
    const updated = value + 1;
    const updatedTotal = total + 1;
    // console.log("before", value);
    setValue(updated);
    setTotal(updatedTotal);
    // console.log("after", value);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
