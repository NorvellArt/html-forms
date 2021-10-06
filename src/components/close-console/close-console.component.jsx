import "./close-console.styles.scss";

const CloseConsole = (props) => {
  return <div className="close-console" onClick={props.onHandleCloseEditConsole}>&#215;</div>;
};

export default CloseConsole;
