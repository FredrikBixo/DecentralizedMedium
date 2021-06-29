import React from "react";
import Image from "react-bootstrap/Image";
import CoverImage from "../../assets/images/icon_large.png";
import {
  CoverWrapper,
  ImageWrapper,
  ImageText,
  ImageTextWrapper,
} from "./styles";

function Cover() {
  return (
    <CoverWrapper>
      <ImageWrapper src={CoverImage} />
      <ImageTextWrapper>
        <ImageText>Pay As You</ImageText>
        <ImageText>Read</ImageText>
        <ImageText>Experience</ImageText>
      </ImageTextWrapper>
    </CoverWrapper>
  );
}

export default Cover;
