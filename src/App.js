import React, { Component } from "react";
import styled from "styled-components";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import About from "./component/About";

const Root = styled.div``;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (!this.state.scrolled) {
      if (window.pageYOffset > 0) {
        this.setState({ scrolled: true });
      }
    }
    if (window.pageYOffset === 0) {
      this.setState({ scrolled: false });
    }
  }

  render() {
    return (
      <Root>
        <Header scrolled={this.state.scrolled} />
        <Slider />
        <About />
        {/* <Footer /> */}
      </Root>
    );
  }
}
