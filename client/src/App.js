import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Feedback from './Feedback.js';
import StudentAccount from './StudentAccount.js';
import Dashboard from './Dashboard.js';
import AdminDashboard from './AdminDashboard.js';
import CreateAssignments from './CreateAssignments.js';
import PublicRoute from './PublicRoute.js';
import PrivateRoute from './PrivateRoute.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <PublicRoute restricted={false} component={Home} path="/" exact />
            <PublicRoute restricted={false} component={Bootcamp} path="/bootcamp" exact />
            <PublicRoute restricted={false} component={Program} path="/program" exact />
            <PublicRoute restricted={false} component={Confirm} path="/confirm" exact />
            <PublicRoute restricted={false} component={Success} path="/confirm/:verificationToken" exact />
            <PublicRoute restricted={true} component={SignUp} path="/signup" exact />
            <PublicRoute restricted={true} component={Login} path="/login" exact />
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
            <PrivateRoute component={StudentAccount} path="/studentaccount" exact />
            <PrivateRoute component={PreBootcampCourse} path="/prebootcampcourse" exact />
            <PrivateRoute component={ModuleOne} path="/module1" exact />
            <PrivateRoute component={ModuleTwo} path="/module2" exact />
            <PrivateRoute component={ModuleThree} path="/module3" exact />
            <PrivateRoute component={ModuleFour} path="/module4" exact />
            <PrivateRoute component={ModuleFive} path="/module5" exact />
            <PrivateRoute component={ModuleSix} path="/module6" exact />
            <PrivateRoute component={Feedback} path="/feedback" exact />
            <PrivateRoute component={AdminDashboard} path="/admin_dashboard" exact />
            <PrivateRoute component={CreateAssignments} path="/create_assignments" exact />

            {/* <Route exact path="/">
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
            <Route path="/confirm/:verificationToken">
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
            <Route exact path="/feedback">
              <Feedback />
            </Route>
            <Route exact path="/studentaccount">
              <StudentAccount />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/admin_dashboard">
              <AdminDashboard />
            </Route>
            <Route exact path="/create_assignments">
              <CreateAssignments />
            </Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
