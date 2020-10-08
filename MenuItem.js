import React from "react";
import { NavLink } from "react-router-dom";

import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <NavLink to={props.Url || "/"} className={`MenuItem ${props.className}`}>
      <span className="MenuItem-Title">{props.Title}</span>
    </NavLink>
  );
};

export default MenuItem;
