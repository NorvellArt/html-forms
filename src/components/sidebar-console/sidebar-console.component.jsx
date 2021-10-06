import "./sidebar-console.styles.scss";
import CloseConsole from "../close-console/close-console.component";

const SidebarConsole = (props) => {
  return <div className="sidebar-console"><h2>{props.boxItem.name}</h2></div>;
};

export default SidebarConsole