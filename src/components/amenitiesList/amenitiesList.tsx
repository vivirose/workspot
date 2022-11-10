import React from "react";
import { SubTitle } from "../title/title.styles";
import { StyledAmenitiesList } from "./amenitiesList.styles";

function AmenitiesList() {
  return (
    <>
      <SubTitle>Amenities:</SubTitle>
      <StyledAmenitiesList>
        <li>✅ Laptop-friendly</li>
        <li>✅ Power Outlets</li>
        <li>❌ Wifi</li>
      </StyledAmenitiesList>
    </>
  );
}

export default AmenitiesList;
