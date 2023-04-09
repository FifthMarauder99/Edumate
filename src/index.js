import React from 'react'
import ReactDOM from 'react-dom'
import Registration from './components/Registration'
import * as dotenv from 'dotenv' 

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login'
import UsernameCheck from './components/UsernameCheck'
import './styles.css'
import SuccessfulLogin from './components/SuccessfulLogin'
import SecurityCheck from './components/SecurityCheck'
import PasswordReset from './components/PasswordReset'
import AdminView from './components/Admin'
import CanvasLMS from './components/CanvasLMS'

function App() {
  dotenv.config();
  console.log(process.env.REACT_APP_DATABASE_URL);


  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home" exact component={HomePage} />
            <Route path="/home/login" component={Login} />
            <Route path="/home/register" component={Registration} />
            <Route path="/home/successfulLogin" component={SuccessfulLogin} />
            <Route path="/home/logout" component={HomePage} />
            <Route path="/home/usernameCheck" component={UsernameCheck} />
            <Route path="/home/securityCheck" component={SecurityCheck} />
          <Route path="/home/passwordReset" component={PasswordReset} />
          <Route path="/home/Dashboard" component={CanvasLMS} />
          <Route path="/home/AdminAdd" component={AdminView} />
          </Switch>
        </Router>
      </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
