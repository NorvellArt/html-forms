import "./submit-button-settings.styles.scss";
import TextArea from "../text-area/text-area.component";
import { connect } from "react-redux";
import { handleChangeLabel } from "../../redux/box-items/box-items.actions";

const SubmitButtonSettings = (props) => {
  const onHandleChangeLabel = (event) => {
    props.handleChangeLabel(props.boxItem.id, event.target.value);
  };

  return (
    <div>
      <div>
        Enter VALUE of BUTTON <TextArea func={onHandleChangeLabel} value={props.boxItem.label} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeLabel: (id, text) => dispatch(handleChangeLabel(id, text)),
  };
};

export default connect(null, mapDispatchToProps)(SubmitButtonSettings);
