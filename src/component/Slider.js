import React, { Component } from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";

import Socials from "./Socials";

// IMAGES
import Naaz from "../assets/naaz-2.jpg"
import NaazMobile from "../assets/naaz-mobile.jpg"
import Girl from "../assets/girl2.jpg"
import GirlMobile from "../assets/girl-mobile.jpg"

const Root = styled.div`
  position: relative;
`;

const Image = styled.div`
background-image: url(${props => props.image});
background-size: cover;
background-position: center;
width: 100%;
height: 100%;

@media only screen and (max-width: 768px) {
  background-size: auto 100%;
background-image: url(${props => props.imageMobile});

  }
`


const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000
};

const ImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
`;

export default class Slider extends Component {
  render() {
    return (
      <Root>
        <Carousel {...settings} >
          <ImageContainer>
            <Image
              image={Naaz}
              imageMobile={NaazMobile}
              alt="Naaz"
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              image={Girl}
              imageMobile={GirlMobile}
              alt={"lol"}
            />
          </ImageContainer>
        </Carousel>
        <Socials />
      </Root>
    );
  }
}
