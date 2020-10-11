import React, { Component } from "react";
import styled from "styled-components";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import messenger from "../assets/messenger.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import spotify from "../assets/spotify.svg";

const Root = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 5%;
  width: 5px;
  left: 5px;

  @media only screen and (max-width: 768px) {
    bottom: 20%;
  }
`;

// const Icon = styled(ReactLogo)`
//   height: 40px;
//   fill: white;
// `;

const Facebook = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-image: url(${facebook});
  transition: all 0.2s;
  margin: 5px 20px;

  &:hover {
    filter: invert(17%) sepia(60%) saturate(3031%) hue-rotate(336deg)
      brightness(109%) contrast(103%);
    cursor: pointer;

    margin-left: 30px;
  }
`;

const Instagram = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-image: url(${instagram});
  transition: all 0.2s;
  margin: 5px 20px;

  &:hover {
    filter: invert(17%) sepia(60%) saturate(3031%) hue-rotate(336deg)
      brightness(109%) contrast(103%);
    cursor: pointer;

    margin-left: 30px;
  }
`;

const Messenger = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-image: url(${messenger});
  transition: all 0.2s;
  margin: 5px 20px;

  &:hover {
    filter: invert(17%) sepia(60%) saturate(3031%) hue-rotate(336deg)
      brightness(109%) contrast(103%);
    cursor: pointer;

    margin-left: 30px;
  }
`;

const Twitter = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-image: url(${twitter});
  transition: all 0.2s;
  margin: 5px 20px;

  &:hover {
    filter: invert(17%) sepia(60%) saturate(3031%) hue-rotate(336deg)
      brightness(109%) contrast(103%);
    cursor: pointer;

    margin-left: 30px;
  }
`;

const Spotify = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-image: url(${spotify});
  transition: all 0.2s;
  margin: 5px 20px;

  &:hover {
    filter: invert(17%) sepia(60%) saturate(3031%) hue-rotate(336deg)
      brightness(109%) contrast(103%);
    cursor: pointer;

    margin-left: 30px;
  }
`;

const Youtube = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-image: url(${youtube});
  transition: all 0.2s;
  margin: 5px 20px;

  &:hover {
    filter: invert(17%) sepia(60%) saturate(3031%) hue-rotate(336deg)
      brightness(109%) contrast(103%);
    cursor: pointer;

    margin-left: 30px;
  }
`;

export default class Socials extends Component {
  render() {
    return (
      <Root>
        <a href="https://www.instagram.com/redpapula" target="_blank">
          <Instagram />
        </a>
        <a href="https://www.facebook.com/redpapula" target="_blank">
          <Facebook />
        </a>
        <a href="https://www.twitter.com/redpapula" target="_blank">
          <Twitter />
        </a>
        <a
          href="https://open.spotify.com/playlist/18n28HnDHWEidFLw5rH8sd?si=EVcBK2pyQqq_dzQZMEmHJQ"
          target="_blank"
        >
          <Spotify />
        </a>
        <a
          href="https://www.youtube.com/channel/UCb2LBQr9ojb55n640rudUOQ?sub_confirmation=1"
          target="_blank"
        >
          <Youtube />
        </a>
      </Root>
    );
  }
}
