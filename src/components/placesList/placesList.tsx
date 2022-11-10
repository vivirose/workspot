import React from "react";
import PlaceCard from "../placeCard/placeCard";
import { StyledPlacesList } from "./placesList.styles";

function PlacesList() {
  return (
    <StyledPlacesList>
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
    </StyledPlacesList>
  );
}

export default PlacesList;
