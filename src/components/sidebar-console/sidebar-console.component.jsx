import "./sidebar-console.styles.scss";
import CloseConsole from "../close-console/close-console.component";

const SidebarConsole = (props) => {
  return <div className="sidebar-console"><div className='sidebar-console-title'>{props.name}</div><CloseConsole /></div>;
};

export default SidebarConsole