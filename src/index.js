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
import Dashboard from './components/Dashboard'
import CourseDetails from './components/CourseDetails'


import Chats from "./pages/Chats";
import AssignmentList from "./pages/Assignments";
import A1 from "./pages/overview/A1";
import A2 from "./pages/overview/A2";
import M1 from "./pages/Products/M1";
import Ass1 from './pages/Assignments/Ass1'

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
            <Route path="/home/dashboard" component={Dashboard}/>
            <Route path="/home/courseDetails" component={CourseDetails}/>




            <Route path="/home/courseDetails/Chats" exact component={Chats} />
            <Route path="/home/courseDetails/Assignments" exact component={AssignmentList} />
            <Route path="/home/courseDetails/overview/A1" exact component={A1} />
            <Route path="/home/courseDetails/overview/A2" exact component={A2} />
            <Route path="/home/courseDetails/Products/M1" exact component={M1} />
            <Route path="/home/courseDetails/Assignments/Ass1" exact component={Ass1} />
          </Switch>
        </Router>
      </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
