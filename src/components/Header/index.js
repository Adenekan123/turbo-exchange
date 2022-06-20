import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

import { BiMenuAltRight, BiX } from "react-icons/bi";

import { Wrapper, Nav } from "./Header.styles";

const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <Wrapper>
      <img src={logo} alt="" />
      <Nav show={toggleMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
        <li>
          <Link to="/signin">Sign up</Link>
        </li>
      </Nav>
      {!toggleMenu ? (
        <BiMenuAltRight
          className="toggler-menu"
          onClick={() => setToggleMenu()}
        />
      ) : (
        <BiX className="toggler-menu" onClick={() => setToggleMenu()} />
      )}
    </Wrapper>
  );
};

export default Header;
