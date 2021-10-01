import "./edit-button.styles.scss";
import { connect } from "react-redux";
import { openSidebarConsole } from "../../redux/sidebar-console/sidebar-console.actions";

const EditButton = (props) => {
  const { name, openSidebarConsole } = props;

  const onHandleClick = () => {
    openSidebarConsole(name)
  }

  return (
    <div className="edit-button" title="Edit" onClick={onHandleClick}>
      &#x270E;
      {console.log(props)}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openSidebarConsole: name => dispatch(openSidebarConsole(name))
});

export default connect(null, mapDispatchToProps)(EditButton);
