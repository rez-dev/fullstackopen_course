import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part} quantity={props.parts[0].quantity} />
      <Part part={props.parts[1].part} quantity={props.parts[1].quantity} />
      <Part part={props.parts[2].part} quantity={props.parts[2].quantity} />
    </div>
  );
};

export default Content;
