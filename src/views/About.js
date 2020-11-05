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
  justify-content: center;
  width: 40%;
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;

  @media only screen and (max-width: 768px) {
    /* margin-top: 80px; */
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
