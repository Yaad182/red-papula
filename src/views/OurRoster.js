import React, { Component } from "react";
import styled from "styled-components";

import Naaz from "../assets/naaz-2.jpg";
import Mia from "../assets/girl2.jpg";
import Hoger from "../assets/hoger-artist.jpg";
import Roster from "../component/Roster";

const Root = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1``;

const RosterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  max-width: 1000px;
  overflow: auto;

  @media only screen and (max-width: 1380px) {
    width: 90%;
  }

  @media only screen and (max-width: 890px) {
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 70vh;
  }
`;

export default class OurRoster extends Component {
  render() {
    return (
      <Root>
        <Title>OUR ROSTER</Title>
        <RosterContainer>
          <Roster image={Naaz} name="Naaz" />
          <Roster image={Mia} name="Mia" />
          <Roster image={Hoger} name="Hoger" />
        </RosterContainer>
      </Root>
    );
  }
}
