import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import TourList from "./components/TourList/TourList";
import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/tours" component={TourList} />
            <Route path="/home" component={Home} />
            <Redirect from="/tourlist" to="/tours" />
            <Route path="not-found" component={NotFound} />
            <Route path="/" exact component={TourList} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
