import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import "./styles.css";
import Home from "./views/Home";
import About from "./views/About";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import OurRoster from "./views/OurRoster";
import Contact from "./views/Contact";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    return (
      <BrowserRouter>
        <Header menu={this.state.menu} handleMenu={this.handleMenu} />
        <Sidebar menu={this.state.menu} handleMenu={this.handleMenu} />
        <Route
          render={({ location }) => {
            return (
              <PageTransition
                preset="fadeLeftFadeRight"
                transitionKey={location.pathname}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/our-roster" component={OurRoster} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </PageTransition>
            );
          }}
        />
      </BrowserRouter>
    );
  }
}
