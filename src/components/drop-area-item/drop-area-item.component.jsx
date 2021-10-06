import "./drop-area-item.styles.scss";
import RemoveButton from "../remove-button/remove-button.component";
import EditButton from "../edit-button/edit-button.component";
import { connect } from "react-redux";
import {openEditItemConsole} from '../../redux/box-items/box-items.actions'
import SidebarConsole from '../sidebar-console/sidebar-console.component'

const DropAreaItem = (props) => {

  const onHandleClick = () =>{
    props.openEditItemConsole(props.boxItem.id)
  }

  return (
    <div className="drop-area-item">
      {props.boxItem.name}
      <div className="buttons-block">
        <EditButton onHandleClick={onHandleClick} />
        <RemoveButton id={props.boxItem.id} />
        {props.boxItem.sidebarIsHidden ? null : <SidebarConsole boxItem={props.boxItem}/>}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openEditItemConsole: id => dispatch(openEditItemConsole(id))
})

export default connect(null, mapDispatchToProps)(DropAreaItem);
