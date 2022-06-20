import React from "react";

import { Wrapper } from "./Card.styles";

const Card = ({ children, type }) => {
  console.log(children);
  return <Wrapper type={type}>{children}</Wrapper>;
};

export default Card;
