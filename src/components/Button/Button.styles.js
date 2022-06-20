import styled from "styled-components";

export const Wrapper = styled.button`
  outline: none;
  border: 0px;
  border-radius: 0.8rem;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  font-size: ${(props) => (props.type === "large" ? "1.6rem" : "1.4rem")};
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 6rem;
  padding: ${(props) => (props.type === "large" ? "24px 56px" : "16px 24px")};
  background-color: ${({ bg }) => "var(--color-" + bg + ")"};
  color: ${({ bg }) =>
    bg === "secondary" ? "var(--color-primary)" : "var(--color-white)"};

  svg {
    margin-left: 1.6rem;
    width: ${(props) => (props.type === "large" ? "32px" : "24px")};
    height: ${(props) => (props.type === "large" ? "32px" : "24px")};
    fill: ${({ fillicon }) => (fillicon ? fillicon : "var(--color-primary)")};
  }

  &:not(:last-of-type) {
    margin-right: 1.6rem;
  }
`;
