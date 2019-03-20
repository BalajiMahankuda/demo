import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";
import UserRegistrationPage from "./login/UserRegistration";
import Dashboard from "./components/PageNotFound";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            path="/UserRegistrationPage"
            component={UserRegistrationPage}
          />
          <Route path="/Dashboard" component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
