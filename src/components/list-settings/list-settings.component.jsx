import "./list-settings.styles.scss";
import TextArea from "../text-area/text-area.component";
import { connect } from "react-redux";
import { handleChangeLabel } from "../../redux/box-items/box-items.actions";
import { handleChangeNumberOfElements } from "../../redux/box-items/box-items.actions";

const ListSettings = (props) => {
  const onHandleChangeLabel = (event) => {
    props.handleChangeLabel(props.boxItem.id, event.target.value);
  };
  const onHandleChangeNumberOfElements = (event) => {
    props.handleChangeNumberOfElements(props.boxItem.id, event.target.value);
  };
  const numberNote = <div className="note">You must enter a number</div>;

  return (
    <div>
      <div>
        Enter LABEL{" "}
        <TextArea func={onHandleChangeLabel} value={props.boxItem.label} />
      </div>
      <div>
        Enter NUMBER of ELEMETS{" "}
        <TextArea
          func={onHandleChangeNumberOfElements}
          value={props.boxItem.numberOfElements}
        />
        {Number(props.boxItem.numberOfElements) ||
        props.boxItem.numberOfElements === ""
          ? null
          : numberNote}
        {console.log(Number(props.boxItem.numberOfElements))}
      </div>
      <div>Is ORDERED LIST</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeLabel: (id, text) => dispatch(handleChangeLabel(id, text)),
    handleChangeNumberOfElements: (id, text) =>
      dispatch(handleChangeNumberOfElements(id, text)),
  };
};

export default connect(null, mapDispatchToProps)(ListSettings);
