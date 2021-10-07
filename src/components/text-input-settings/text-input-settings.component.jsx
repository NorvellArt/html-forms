import "./text-input-settings.styles.scss";
import TextArea from "../text-area/text-area.component";
import { connect } from "react-redux";
import { handleChangeLabel } from "../../redux/box-items/box-items.actions";
import { handleChangeType } from "../../redux/box-items/box-items.actions";
import { handleChangePlaceholder } from "../../redux/box-items/box-items.actions";

const TextInputSettings = (props) => {
  const onHandleChangeLabel = (event) => {
    props.handleChangeLabel(props.boxItem.id, event.target.value);
  };
  const onHandleChangeType = (event) => {
    props.handleChangeType(props.boxItem.id, event.target.value);
  };
  const onHandleChangePlaceholder = (event) => {
    props.handleChangePlaceholder(props.boxItem.id, event.target.value);
  };


  const typeNote = (
    <div className="note">'Type must be: "text", "email", "tel", "number"'</div>
  );

  return (
    <div>
      <div>
        Enter LABEL{" "}
        <TextArea func={onHandleChangeLabel} value={props.boxItem.label} />
      </div>
      <div>
        Enter TYPE{" "}
        <TextArea func={onHandleChangeType} value={props.boxItem.type} />
        {props.boxItem.type === "text" || props.boxItem.type === "" || props.boxItem.type === "email" || props.boxItem.type === "tel" || props.boxItem.type === "number"
          ? null
          : typeNote}
      </div>
      <div>
        Enter PLACEHOLDER <TextArea func={onHandleChangePlaceholder} value={props.boxItem.placeholder}/>
      </div>
      <div>Is field REQUIRED</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeLabel: (id, text) => dispatch(handleChangeLabel(id, text)),
    handleChangeType: (id, text) => dispatch(handleChangeType(id, text)),
    handleChangePlaceholder: (id, text) => dispatch(handleChangePlaceholder(id, text)),
  };
};

export default connect(null, mapDispatchToProps)(TextInputSettings);
