import React from "react";
import "./main-page.styles.scss";
import DropArea from "../components/drop-area/drop-area.component";
import ItemsList from "../components/items-list/items-list.component";

const MainPage = () => {
  return (
    <div className="main-page">
      <DropArea />
      <ItemsList />
    </div>
  );
};

export default MainPage;
