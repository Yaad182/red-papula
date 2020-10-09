import React, { Component } from "react";
import styled, { css } from "styled-components";

import { HamburgerCollapse } from 'react-animated-burgers'

import Logo from "../assets/logo.png";

const Root = styled.div`
  position: fixed;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  transition: all 0.5s;


  /* ${(props) =>
    props.scrolled &&
    css`
      background-color: white;
    `} */
`;

const Image = styled.img`
  height: 40%;
  margin-left: 5%;
  transition: all 0.3s;
  z-index: 0;

  @media only screen and (max-width: 768px) {
    height: auto;
    width: 50%;
  }
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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
z-index: 200;

@media only screen and (min-width: 768px) {
  display: none;
  }
`
export default class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menu: false
    }
  }
  
  render() {
    return (
      <>
      <Root scrolled={this.props.scrolled}>
        <Image src={Logo} />
        <ButtonsContainer>
          <Button>ABOUT</Button>
          <Button>OUR ROSTER</Button>
          <Button>CONTACT</Button>
        </ButtonsContainer>
        <HamburgerContainer>
          <HamburgerCollapse isActive={this.props.menu} onClick={this.props.handleMenu}
          buttonStyle={{transition: "all 1s ease-in-out", color: "white"}}
          barColor={this.props.menu ? "white" : "black"}
          
          />
        </HamburgerContainer>
      </Root>
      </>
    );
  }
}
