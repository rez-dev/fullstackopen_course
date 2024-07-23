const Content = (props) => {
  return (
    <div>
      <p>
        {props.parts[0].part} {props.parts[0].quantity}
      </p>
      <p>
        {props.parts[1].part} {props.parts[1].quantity}
      </p>
      <p>
        {props.parts[2].part} {props.parts[2].quantity}
      </p>
    </div>
  );
};

export default Content;
