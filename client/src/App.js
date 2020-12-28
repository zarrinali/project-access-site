import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import "./App.css";
import Home from './Home.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Confirm from './Confirm.js';
import Success from './Success.js';
import PreBootcampCourse from './PreBootcampCourse.js';
import Bootcamp from './Bootcamp.js';
import Program from './Program.js';
import ModuleOne from './ModuleOne.js';
import ModuleTwo from './ModuleTwo.js';
import ModuleThree from './ModuleThree.js';
import ModuleFour from './ModuleFour.js';
import ModuleFive from './ModuleFive.js';
import ModuleSix from './ModuleSix.js';
import StudentAccount from './StudentAccount.js';
import Dashboard from './Dashboard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
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
            <Route exact path="/bootcamp">
              <Bootcamp />
            </Route>
            <Route exact path="/program">
              <Program />
            </Route>
            <Route exact path="/confirm">
              <Confirm />
            </Route>
            <Route exact path="/success">
              <Success />
            </Route>
            <Route exact path="/prebootcampcourse">
              <PreBootcampCourse />
            </Route>
            <Route exact path="/module1">
              <ModuleOne />
            </Route>
            <Route exact path="/module2">
              <ModuleTwo />
            </Route>
            <Route exact path="/module3">
              <ModuleThree />
            </Route>
            <Route exact path="/module4">
              <ModuleFour />
            </Route>
            <Route exact path="/module5">
              <ModuleFive />
            </Route>
            <Route exact path="/module6">
              <ModuleSix />
            </Route>
            <Route exact path="/studentaccount">
              <StudentAccount />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
