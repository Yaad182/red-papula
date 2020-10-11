import React, { Component } from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: auto 100%;
  height: 300px;
  width: 45%;
  margin-bottom: 50px;
  cursor: pointer;
  min-width: 400px;
  max-width: 500px;

  /* @media only screen and (max-width: 1380px) {
    width: 100%;
  } */
`;

const Color = styled.div`
  background-color: #ba102d;
  width: ${(props) => (props.hover ? "100%" : "10%")};
  opacity: ${(props) => (props.hover ? "40%" : "100%")};
  height: 100%;
  transition: all 0.5s ease-in-out;
  -webkit-clip-path: ${(props) =>
    !props.hover
      ? "polygon(0% 0%, 50% 0%, 100% 100%, 0% 100%)"
      : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};
  clip-path: ${(props) =>
    !props.hover
      ? "polygon(0% 0%, 50% 0%, 100% 100%, 0% 100%)"
      : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};
`;

export default class Roster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  render() {
    console.log(this.state.hover);
    return (
      <Root
        {...this.props}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <Color hover={this.state.hover} />
      </Root>
    );
  }
}
