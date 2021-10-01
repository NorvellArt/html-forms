import React from "react";
import "./main-page.styles.scss";
import DropArea from "../components/drop-area/drop-area.component";
import ItemsList from "../components/items-list/items-list.component";
import SidebarConsole from "../components/sidebar-console/sidebar-console.component";
import { connect } from "react-redux";

const MainPage = (props) => {
  const { sidebarConsole: {isHidden, name} } = props;

  return (
    <div className="main-page">
      <DropArea />
      <ItemsList />
      {isHidden ? null : <SidebarConsole name={name} />}
      {console.log(props.sidebarConsole.isHidden)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sidebarConsole: state.sidebarConsole.sidebarConsole
});

export default connect(mapStateToProps)(MainPage);
