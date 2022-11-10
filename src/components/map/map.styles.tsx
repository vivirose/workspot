import styled from "styled-components";

export const StyledMap = styled.div`
  background-color: gray;
  grid-column: 2;
  width: 100%;
  @media (max-width: 600px) {
    grid-column: 1;
    grid-row: 1;
  }
`;
