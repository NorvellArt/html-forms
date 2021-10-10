import "./checkbox-settings.styles.scss";
import TextArea from "../text-area/text-area.component";
import { connect } from "react-redux";
import { handleChangeLabel } from "../../redux/box-items/box-items.actions";

const CheckboxSettings = (props) => {
  const onHandleChangeLabel = (event) => {
    props.handleChangeLabel(props.boxItem.id, event.target.value);
  };

  return (
    <div>
      <div>
        Enter LABEL: <TextArea func={onHandleChangeLabel} value={props.boxItem.label} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeLabel: (id, text) => dispatch(handleChangeLabel(id, text))
  };
};

export default connect(null, mapDispatchToProps)(CheckboxSettings);
