import "./drop-area-item.styles.scss";
import RemoveButton from "../remove-button/remove-button.component";
import EditButton from "../edit-button/edit-button.component";

const DropAreaItem = (props) => {
  return (
    <div className="drop-area-item">
      {props.name}
      <div className="buttons-block">
        <EditButton name={props.name} id={props.id}/>
        <RemoveButton id={props.id} />
      </div>
    </div>
  );
};

export default DropAreaItem;
