import React from "react";
import './header.scss';
import logo from '../../assets/logo.gif';
function Header({ addHandle }) {
  return (
    <div className="menu-header">
      <div className="menu-header__menu-inner">
        <div>
          <img
            alt="logo"
            src={logo}
            width="80"
            height="50"
            className="d-inline-block align-top"/>
          <div>REACT CRUD</div>
        </div>
        <button onClick={() => addHandle()}>Add</button>
      </div>
    </div>
  );
}

export default Header;
