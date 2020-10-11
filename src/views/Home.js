import React, { Component } from "react";
import styled from "styled-components";

import Slider from "../component/Slider";

const Root = styled.div`
  position: relative;
`;

export default class Home extends Component {
  render() {
    return (
      <Root>
        <Slider />
      </Root>
    );
  }
}
