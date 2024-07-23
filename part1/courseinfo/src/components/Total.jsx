const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].quantity +
        props.parts[1].quantity +
        props.parts[2].quantity}
    </p>
  );
};

export default Total;
