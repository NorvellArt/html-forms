import "./remove-button.styles.scss";
import { connect } from "react-redux";
import { removeItem } from "../../redux/box-items/box-items.actions";

const RemoveButton = (props) => {

  const { id, removeItem } = props

  const onHandleClick = () => {
    removeItem(id)
  }

  return <div className="remove-button" onClick={onHandleClick} title='Remove'>&#215;</div>;
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: id => dispatch(removeItem(id))
})

export default connect(null, mapDispatchToProps)(RemoveButton);
