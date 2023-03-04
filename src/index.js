import React from "react";
import ReactDOM from "react-dom";
import Registration from "./components/Registration";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import MasterForm from "./components/MasterForm";
import UsernameCheck from "./components/UsernameCheck"
import SecurityCheck from "./components/SecurityCheck";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/home/login" component={Login} />
          <Route path="/home/register" component={Registration} />
          <Route path="/home/usernamecheck" component={UsernameCheck} />
          <Route path="/home/securitycheck" component={SecurityCheck} />
          <Route path="/home/password" component={PasswordReset} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
