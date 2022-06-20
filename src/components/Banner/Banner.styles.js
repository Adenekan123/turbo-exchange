import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.type === "large" ? "center" : "space-between"};
  align-items: center;
  height: ${(props) => (props.type === "large" ? "75vh" : "auto")};

  background-color: ${(props) => (props.bg ? props.bg : "inherit")};
  color: var(--color-white);
  padding: 4rem 8rem;
  margin: 0 !important;
  margin-top: 2rem !important;

  @media (max-width: 750px) {
    justify-content: ${(props) =>
      props.type === "large" ? "center" : "center"};
  }

  .content {
    text-align: center;

    h1 {
      font-size: var(--heading1);
      text-transform: uppercase;
      width: 70%;
      margin: 0 auto;

      @media (max-width: 750px) {
        width: 100%;
      }

      span {
        color: var(--color-secondary);
      }
    }
  }
`;
