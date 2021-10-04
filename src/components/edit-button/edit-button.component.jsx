import "./edit-button.styles.scss";
import { connect } from "react-redux";
import { openSidebarConsole } from "../../redux/sidebar-console/sidebar-console.actions";

const EditButton = (props) => {
  const { name, id, openSidebarConsole } = props;

  const onHandleClick = () => {
    openSidebarConsole(name, id)
  }

  return (
    <div className="edit-button" title="Edit" onClick={onHandleClick}>
      &#x270E;
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openSidebarConsole: (name, id)=> dispatch(openSidebarConsole(name, id))
});

export default connect(null, mapDispatchToProps)(EditButton);
