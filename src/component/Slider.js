import React, { Component } from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";

import Socials from "./Socials";

const Root = styled.div`
  height: 100vh;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  height: 100vh;
  width: auto !important;
`;

const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export default class Slider extends Component {
  render() {
    return (
      <Root>
        <Carousel {...settings}>
          <ImageContainer>
            <Image
              src="https://universalmusic.nl/wp-content/uploads/2019/04/Taylor-Swift.jpg"
              alt={"lol"}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="https://universalmusic.nl/wp-content/uploads/2020/02/Remme.png"
              alt={"lol"}
            />
          </ImageContainer>
        </Carousel>
        <Socials />
      </Root>
    );
  }
}
