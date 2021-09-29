import "./items-list.styles.scss";
import Button from "../button/button.component";
import { connect } from "react-redux";


const ItemsList = ({items}) => {
  return (
    <div className="items-list">
      {items.map((item) => (
        <Button name={item.name} key={item.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({

  items: state.items.listItems

})

export default connect(mapStateToProps)(ItemsList);
