import "./sidebar-console.styles.scss";
import CloseConsole from "../close-console/close-console.component";
import SettingsArea from "../settings-area/settings-area.component";
import { connect } from "react-redux";
import { closeEditItemConsole } from "../../redux/box-items/box-items.actions";

const SidebarConsole = (props) => {
  const onHandleCloseEditConsole = () => {
    props.closeEditItemConsole(props.boxItem.id);
  };

  return (
    <div className="sidebar-console">
      <h2 className="sidebar-console-title">{props.boxItem.name}</h2>
      <CloseConsole onHandleCloseEditConsole={onHandleCloseEditConsole} />
      <SettingsArea boxItem={props.boxItem} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeEditItemConsole: (id) => dispatch(closeEditItemConsole(id)),
});

export default connect(null, mapDispatchToProps)(SidebarConsole);
