import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import MenuItem from "./MenuItem";
import "./SubMenu.css";

const SubMenu = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu(true);
  };

  const closeMenuHandler = () => {
    setOpenMenu(false);
  };

  return (
    <div
      className={`SubMenu ${openMenu ? "active" : ""}`}
      onMouseEnter={openMenuHandler}
      onMouseLeave={closeMenuHandler}
      onClick={closeMenuHandler}
    >
      <MenuItem Title={props.Title} Url={props.Url} />

      <CSSTransition
        in={openMenu}
        classNames="MenuCSS"
        timeout={200}
        unmountOnExit
        mountOnEnter
      >
        <div className="SubMenu__content">{props.children}</div>
      </CSSTransition>
    </div>
  );
};

export default SubMenu;
