import styled from "styled-components";

export const InputWrapper = styled.input`
  width: 100%;
  padding: 1.5rem 1.5rem;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  border: ${({ color }) =>
    color ? `1px solid var(--color-onprimary)` : "none"};
  color: var(--color-onprimary);
  background-color: ${({ bg }) => (bg ? `var(--color-${bg})` : "transparent")};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--color-onprimary);
  }
  :-ms-input-placeholder {
    color: var(--color-onprimary);
  }
`;

export const Select = styled.select`
  width: 100%;
  font-size: 1.4rem;
  padding: 1.5rem 1.5rem;
  border-radius: 0.5rem;
  border: ${({ color }) =>
    color ? `1px solid var(--color-onprimary)` : "none"};
  color: ${({ color }) =>
    color ? `1px solid var(--color-onprimary)` : "none"};
  background-color: transparent;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
