import React from "react";
import PlacesList from "../../components/placesList/placesList";
import Map from "../../components/map/map";
import { StyledPlacesView } from "./placesView.styles";

function PlacesView() {
  return (
    <StyledPlacesView>
      <PlacesList />
      <Map />
    </StyledPlacesView>
  );
}

export default PlacesView;
