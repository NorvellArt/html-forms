import "./drop-area.styles.scss";
import DropAreaItem from "../drop-area-item/drop-area-item.component";
import { connect } from "react-redux";

const DropArea = ({ boxItems }) => {
  return (
    <div className="drop-area">
      {boxItems.map((boxItem) => (
        <DropAreaItem  key={boxItem.id} boxItem={boxItem}/>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  boxItems: state.boxItems.boxItemsList,
});

export default connect(mapStateToProps)(DropArea);
