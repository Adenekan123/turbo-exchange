import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  border: ${(props) => (props.type === "bordered" ? "1px solid" : "0px")};
  background-color: ${(props) =>
    props.type === "bordered" ? "transparent" : "var(--color-primaryinverse)"};
  font-size: 1.4rem;

  svg {
    height: 40rem;
    width: 40rem;
    fill: white;
  }

  .header {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid var(--color-secondary);
    text-transform: uppercase;
    text-align: center;
    color: #fff;
  }

  .body {
    padding: 3rem;
  }
`;
