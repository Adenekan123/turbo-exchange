import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  font-size: var(--body1);

  svg {
    position: fixed;
    right: 2rem;
    top: 3.5rem;
    z-index: 2;
  }

  @media (max-width: 750px) {
    padding: 0 2rem;
    padding-top: 2rem;
  }

  img {
    height: 8rem;
  }
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  transition: width 0.3s;

  li:not(:last-of-type) {
    margin-right: 5rem;
    @media (max-width: 750px) {
      margin: 0px;
      margin-bottom: 3rem;
      width: 100%;
    }
  }
  li a {
    color: inherit;
    text-decoration: none;
    @media (max-width: 750px) {
      display: block;
      padding: 1.5rem 3rem;
    }
  }

  @media (max-width: 750px) {
    z-index: 1;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    text-align: left;
    ${"" /* background-color: var(--color-primaryinverse); */}
    height: 100vh;
    width: ${(props) => (props.show ? "100%" : "0px")};
    background: linear-gradient(
      to right,
      #02072e 60%,
      #02072e 50%,
      rgba(0, 0, 0, 0.7) 30%
    );
    overflow: hidden;
    overflow-y: auto;
    padding: 3rem 0;
    font-size: 2em;
  }
`;
