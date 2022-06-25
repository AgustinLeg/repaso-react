import "./boton.css";

const Boton = (props) => {
  console.log(props);
  return <button className={`btn ${props.class}`}> {props.texto} </button>;
};
export default Boton;
