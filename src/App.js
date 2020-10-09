import React, { Component } from "react";
import styled from "styled-components";

import Header from "./component/Header";
import Slider from "./component/Slider";
import Sidebar from "./component/Sidebar";

const Root = styled.div`
overflow: hidden;
position: relative;
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      menu: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleMenu = this.handleMenu.bind(this)
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

  handleMenu() {
    this.setState({menu: !this.state.menu})
  }

  render() {
    return (
      <Root>
        <Header scrolled={this.state.scrolled} menu={this.state.menu} handleMenu={this.handleMenu} />
        <Slider />
        <Sidebar menu={this.state.menu} handleMenu={this.handleMenu} />
      </Root>
    );
  }
}
