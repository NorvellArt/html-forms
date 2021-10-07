import "./text-area.styles.scss";

const TextArea = (props) => {
  
  return <input value={props.value} onChange={props.func} />;
};

export default TextArea;
