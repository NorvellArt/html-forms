import "./drop-area-item.styles.scss";
import RemoveButton from "../remove-button/remove-button.component";

const DropAreaItem = (props) => {
  return <div className="drop-area-item">{props.name}<RemoveButton id={props.id} /></div>;
};

export default DropAreaItem;
