import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

import { Wrapper } from "./Footer.styles";
import { Nav } from "../Header/Header.styles";

const Footer = () => (
  <Wrapper>
    <div className="chain">
      <div className="ring-7-md">
        <div className="d-flex">
          <img src={logo} alt="logo" />
          <Nav>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </Nav>
        </div>
      </div>
      <div className="ring-5-md">
        &copy 2022 turbo exchange. All Rights Reserved
      </div>
    </div>
  </Wrapper>
);

export default Footer;
