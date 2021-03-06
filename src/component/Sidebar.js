import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Root = styled.div`
  position: absolute;
  top: 0;
  right: ${(props) => (props.animate ? "0" : "-50%")};
  height: 100%;
  width: 50%;
  background-color: black;
  transition: all ease-in-out 0.5s;
  z-index: 200;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 10px;
  height: 20%;
  justify-content: space-between;
`;

const Button = styled(NavLink)`
  font-size: 1.5rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s;
  text-align: right;
  margin-right: 15px;
  text-decoration: none;

  &:hover {
    color: #ba102d;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export default class Sidebar extends Component {
  render() {
    return (
      <Root {...this.props}>
        <ButtonContainer>
          <Button
            activeStyle={{ color: "#ba102d" }}
            exact
            to="/"
            onClick={this.props.handleMenu}
          >
            HOME
          </Button>
          <Button
            activeStyle={{ color: "#ba102d" }}
            to="/about"
            onClick={this.props.handleMenu}
          >
            ABOUT
          </Button>
          <Button
            activeStyle={{ color: "#ba102d" }}
            to="/our-roster"
            onClick={this.props.handleMenu}
          >
            OUR ROSTER
          </Button>
          <Button
            activeStyle={{ color: "#ba102d" }}
            to="/contact"
            onClick={this.props.handleMenu}
          >
            CONTACT
          </Button>
        </ButtonContainer>
      </Root>
    );
  }
}
