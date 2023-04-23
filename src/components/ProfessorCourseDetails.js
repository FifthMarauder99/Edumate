import React from 'react'
import Sidebar from '../detail_components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chats from '../pages/Chats'
import AssignmentList from '../pages/Assignments'
import A1 from '../pages/overview/A1'
import A2 from '../pages/overview/A2'
import M1 from '../pages/Products/M1'
import Ass1 from '../pages/Assignments/Ass1'

const ProfessorCourseDetails = (props) => {
  const courseClicked = props.course;
  return (
    <Router>
      <Sidebar />
      <div style={{ marginTop: '100px', marginLeft: '400px' }}>
    <h1> Welcome to course</h1><br/>
    <p>Course Title : {courseClicked}</p>
    <p>Course Code : CSCI-P 565</p>
    </div>
      <Switch>
        <Route path="/Chats" exact component={Chats} />
        <Route path="/Assignments" exact component={AssignmentList} />
        <Route path="/overview/A1" exact component={A1} />
        <Route path="/overview/A2" exact component={A2} />
        <Route path="/Products/M1" exact component={M1} />
        <Route path="/Assignments/Ass1" exact component={Ass1} />

      </Switch>
      </Router>
  )
}

export default ProfessorCourseDetails
