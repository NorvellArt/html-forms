import "./button.styles.scss";
import { connect } from "react-redux";
import { addItemInBox } from "../../redux/box-items/box-items.actions";

const Button = (props) => {
  
  const { name, addItemInBox } = props

  const onHandleClick = () => {
    addItemInBox(name)
  }

  return (
    <button className="button" onClick={onHandleClick}>
      {name}
      {console.log(props)}
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemInBox: name => dispatch(addItemInBox(name))
})

export default connect(null, mapDispatchToProps)(Button);
