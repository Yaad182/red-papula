import React, { Component } from "react";
import styled, { css } from "styled-components";

import Logo from "../assets/logo.png";
import Background from "../assets/background.png";

const Root = styled.div`
  position: fixed;
  /* background-image: url(${Background}); */
  /* background-color: black; */
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  /* border-bottom: 5px solid ; */
  transition: all 0.5s;


  ${(props) =>
    props.scrolled &&
    css`
      background-color: white;
    `}
`;

const Image = styled.img`
  height: 40%;
  margin-left: 5%;
  transition: all 0.3s;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
`;

const Button = styled.a`
  font-size: 1.2rem;
  color: black;
  font-weight: 500;
  transition: all 0.3s;

  &:hover {
    color: #ba102d;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Root scrolled={this.props.scrolled}>
        <Image src={Logo} />
        <ButtonsContainer>
          <Button>About</Button>
          <Button>Songwriters & Artists</Button>
          <Button>Contact</Button>
        </ButtonsContainer>
      </Root>
    );
  }
}
