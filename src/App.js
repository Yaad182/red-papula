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
      animate: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    if (this.state.menu) {
      this.setState({ animate: false });
      setTimeout(() => this.setState({ menu: false }), 500);
    } else {
      this.setState({ menu: true });
      setTimeout(() => this.setState({ animate: true }), 1);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Header
          menu={this.state.menu}
          handleMenu={this.handleMenu}
          animate={this.state.animate}
        />
        {this.state.menu && (
          <Sidebar
            menu={this.state.menu}
            handleMenu={this.handleMenu}
            animate={this.state.animate}
          />
        )}
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
