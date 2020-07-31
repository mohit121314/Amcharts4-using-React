import React, { Component } from "react";
import "./App.css";
import Amchartprac from "./Amchartprac";
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Prac from "./Prac";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/am" component={Amchartprac} />
        <Route exact path="/" component={Prac} />
      </Router>
    );
  }
}
