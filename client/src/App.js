import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import Home from "./Home.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import Program from "./Program.js";
import Bootcamp from "./Bootcamp.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/program">
              <Program />
            </Route>
            <Route exact path="/bootcamp">
              <Bootcamp />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
