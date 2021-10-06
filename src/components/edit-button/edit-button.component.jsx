import "./edit-button.styles.scss";



const EditButton = (props) => {
 
  return (
    <div className="edit-button" title="Edit" onClick={props.onHandleClick}>
      &#x270E;
    </div>
  );
};


export default EditButton;
