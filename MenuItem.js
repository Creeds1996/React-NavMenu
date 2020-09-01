import React from "react";
import { NavLink } from "react-router-dom";

import './MenuItem.css';

const MenuItem = (props) => {
  return (
    <NavLink to={props.Url || '/'} className={`MenuItem ${props.className}`}>
      <h3>{props.Title}</h3>
    </NavLink>
  );
};

export default MenuItem;
