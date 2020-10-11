import React, { Component } from "react";
import styled from "styled-components";
import Hoger from "../assets/hoger-1.jpg";

const Root = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-image: url(${Hoger});
  background-position: center;
  justify-content: center;
  background-size: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 100px;
  overflow: auto;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Text = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-family: "Monument";

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default class About extends Component {
  render() {
    return (
      <Root>
        <TextContainer>
          <Text>
            Red Papula is a young independent Record Label, Publishing Company
            and Artists Management founded in 2018.
          </Text>
          <Text>
            Together in partnership with Sony / ATV Music Publishing, we support
            and develop songwriters and producers. This is where things behind
            the music happen. Our goal is to write and produce your next
            favorite song performed by your favorite artists.
          </Text>
          <Text>
            Together in partnership with Warner Music / ADA, we support,
            develop, distribute and promote artists.This is where we focus on
            the music of tomorrow. It's important to distinguish yourself from
            others and we believe that we do so by treating everybody as family
            and focus on fairness.
          </Text>
          <Text>
            At Red Papula everybody get's paid. Even songwriters (subtle wink to
            the rest of the music industry) ;).
          </Text>
          <Text>
            Papula comes from the Kurdisch language, which means "butterfly".
            It's an ode to Hoger's father whom uses that specific word to call
            his loved ones. Therefore Red Papula is a company where the main
            importance is for people to feel at home and create as a family.
          </Text>
        </TextContainer>
      </Root>
    );
  }
}
