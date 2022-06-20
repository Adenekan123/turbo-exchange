import React from "react";
import { Wrapper } from "./Banner.styles";
import {} from "../Button";

const Banner = ({ type, content: Content, bg }) => {
  return (
    <Wrapper className="container" type={type} bg={bg}>
      <Content />
    </Wrapper>
  );
};

export default Banner;
