import styled from "styled-components";

export const StyledPlacesView = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: 35% 65%;
  height: 100vh;
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: 60% 40%;
  }
`;
