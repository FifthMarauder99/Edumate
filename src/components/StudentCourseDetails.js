import React from 'react'
import { useState } from 'react'
import Sidebar from '../studentComponents/Sidebar'
import Home from '../studentPages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chats from '../studentPages/Chats'
import AssignmentList from '../studentPages/Assignments'
import A1 from '../studentPages/overview'
import M1 from '../studentPages/Products/M1'
import Ass1 from '../studentPages/Assignments/Ass1'
import Ass2 from '../studentPages/Assignments/Ass2'

const StudentCourseDetails = (props) => {
  const courseClicked = props.courseTitle;
  const courseID = props.courseID;

  return (
    <div>

    <Router>
      <Sidebar />
      <Switch>
      <Route path="/Home" exact render={() => <Home course={courseClicked} courseID = {courseID} />} />
        <Route path="/Chats" exact component={Chats} />
        <Route path="/Assignments" exact component={AssignmentList} />
        <Route path="/A1" exact component={A1} />
        <Route path="/Products/M1" exact component={M1} />
        <Route path="/Assignments/Ass1" exact component={Ass1} />
        <Route path="/Assignments/Ass2" exact component={Ass2} />
        </Switch>
    </Router>
    </div>
  )
}


export default StudentCourseDetails
