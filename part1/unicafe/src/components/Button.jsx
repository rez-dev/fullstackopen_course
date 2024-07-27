const Button = ({ setValue, text, value }) => {
  const handleClick = () => {
    const updated = value + 1;
    // console.log("before", value);
    setValue(updated);
    // console.log("after", value);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
