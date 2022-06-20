import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-radius: 0.8rem;
  padding: 2rem;
  margin-top: 6rem;
  font-size: 2.4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0;
    border: 0px;
  }
`;
