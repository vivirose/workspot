import React from "react";
import AmenitiesList from "../amenitiesList/amenitiesList";
import StarRating from "../starRating/starRating";
import { Line, SubTitle, Title } from "../title/title.styles";
import { StyledPlaceCard } from "./placeCard.styles";

function PlaceCard() {
  return (
    <StyledPlaceCard>
      <Title>The Monkey Cup</Title>
      <SubTitle>Coffee Shop</SubTitle>
      <StarRating></StarRating>
      <Line />
      <AmenitiesList />
    </StyledPlaceCard>
  );
}

export default PlaceCard;
