import styled from "styled-components";

export const Wrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  text-transform: capitalize;

  th,
  td {
    padding: 2rem;
  }

  tr {
    border-bottom: 1.6rem solid var(--color-primary);
    background-color: var(--color-primaryinverse);

    td:last-of-type {
      color: var(--color-secondary);
    }
  }
  thead tr {
    background-color: var(--color-onprimary);
    color: var(--color-primary);
    font-size: 1.6rem;
  }
`;
