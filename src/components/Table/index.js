import React from "react";

import { Wrapper } from "./Table.styles";

const Table = ({ content: TableContent }) => (
  <Wrapper>
    <TableContent />
  </Wrapper>
);

export default Table;
