import React, {useState} from "react";
import "./main-page.styles.scss";
import DropArea from "../components/drop-area/drop-area.component";
import ItemsList from "../components/items-list/items-list.component";
import HtmlButton from "../components/html-button/html-button.component";
import HtmlPage from "../components/html-page/html-page.component";


const MainPage = () => {

  const [htmlPageHidden, setHtmlPageHidden] = useState(true);

  return (
    <div className='main-page-container'>
      <div className="main-page">
        <DropArea />
        <ItemsList />
      </div>
      {htmlPageHidden? null: <HtmlPage />}
      <HtmlButton func={() => (setHtmlPageHidden(!htmlPageHidden))} />
    </div>
  );
};

export default MainPage;
