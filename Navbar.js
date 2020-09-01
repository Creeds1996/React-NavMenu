import React from "react";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <header>
      <div className={`Navbar ${props.className}`}>
        {!props.children && !props.Links ? (
          <h2>No valid links!</h2>
        ) : (
          props.children
        )}
      </div>
    </header>
  );
};

export default Navbar;
