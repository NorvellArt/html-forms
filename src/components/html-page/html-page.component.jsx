import "./html-page.styles.scss";
import CloseConsole from "../close-console/close-console.component";
import { connect } from "react-redux";

const HtmlPage = (props) => {
  const html = (
    <span>{`
    <form>
     ${props.boxItemsList
       .map((item) => {
         if (item.name === "Text Input") {
           return `\t<label>${item.label} <input type="${item.type}" placeholder="${item.placeholder}" ${item.isRequired ? 'required': ''}></label>\n`;
         }
         if (item.name === "List") {
            if(item.isOrdered){
                return `\t<h3>${item.label}</h3>\n\t<ol>\n${'\t\t<li></li>\n'.repeat(item.numberOfElements)}\t</ol>\n`
            }
            if(item.isOrdered === false){
                return `\t<h3>${item.label}</h3>\n\t<ul>\n${'\t\t<li></li>\n'.repeat(item.numberOfElements)}\t</ul>\n`
            }
          }
          if (item.name === "Checkbox") {
            return `\t<label>${item.label} <input type="checkbox"></label>\n`;
          } 
         if (item.name === "Submit Button") {
           return `\t<input type="submit" value="${item.label}">\n`;
         }
         return null;
       })
       .join("")}   </form>
    `}</span>
  );

  return (
    <div className="html-page">
      <CloseConsole func={props.func} />
      <div className="html-container">{html}</div>
      {console.log(props)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.boxItems;
};

export default connect(mapStateToProps)(HtmlPage);
