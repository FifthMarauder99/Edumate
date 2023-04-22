import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { Layout, Menu, Card, Row, Col, Input } from 'antd';

import { Router, Route, Switch } from 'react-router-dom';
import CalendarImplementation from './MyCalender';
import Search from 'antd/es/transfer/search';
const { Header, Content, Sider } = Layout;




const attemptFetchCourses = async (url = '',uid) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: uid,
    })
  }
  );
  return response.json();
}

const MainScreen = ( {subjects} ) => {
  const history = useHistory();
  console.log("subjects",subjects," type:",typeof(subjects))
  const [courses,setCourses] = useState([]);
  useEffect(()=>{
    async function fetchCourses(){
      const response = await attemptFetchCourses('http://localhost:9000/getCourses',subjects);
      console.log(response)
      const resList = [];
            for (let i = 0; i < response.results.length; i++){
                resList.push({
                    course_id: response.results[i].course_id,
                    course_title: response.results[i].course_title,
                    semester_id: response.results[i].semester_id
                });
            }
            setCourses(resList);
    }
    fetchCourses();
  },[]);

  if(courses.length >0){
  console.log(courses)
  }
  function handleCardClick(){
    history.push('/home/courseDetails');
  }
  var courseData = [
    { course_title: 'English', course_id: 'ENG101',semester_id:"FA22" },
    { course_title: 'Mathematics', course_id: 'MATH101',semester_id:"FA22" },
    { course_title: 'History', course_id: 'HIST101',semester_id:"SP23" },
    { course_title: 'Science', course_id: 'SCI101',semester_id:"SP23" },
  ];
  console.log(courseData)
  
  const [searchQuery, setSearchQuery] = useState('');
  var filteredSubjects = courses.filter((subject) =>
    subject.course_title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search for a subject..."
      />
      <Row gutter={[16, 16]}>
        {filteredSubjects.map((subject) => (
          <Col span={8} key={subject.course_id}>
            <Card title={subject.course_title}
            onClick = {handleCardClick}>
              <p>Sub Code: {subject.course_id}</p>
              <p>Sem code: {subject.semester_id}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

  
  


const Sidebar = ({subjects} )=> {
  console.log("subjects",subjects," type:",typeof(subjects))
  const [courses,setCourses] = useState([]);
  useEffect(()=>{
    async function fetchCourses(){
      const response = await attemptFetchCourses('http://localhost:9000/getCourses',subjects);
      console.log(response)
      const resList = [];
            for (let i = 0; i < response.results.length; i++){
                resList.push({
                  course_title: response.results[i].course_title,
                  course_id: response.results[i].course_id,
                  semester_id: response.results[i].semester_id
                });
            }
            setCourses(resList);
    }
    fetchCourses();
  },[]);

  if(courses.length >0){
  console.log(courses)
  }
  const assignments = [
    { subject: 'English', title: 'Essay', deadline: 'March 15, 2023' },
    { subject: 'Mathematics', title: 'Problem Set 5', deadline: 'March 17, 2023' },
    { subject: 'History', title: 'Research Paper', deadline: 'March 20, 2023' },
    { subject: 'Science', title: 'Lab Report', deadline: 'March 22, 2023' },
  ];
  const students=[
    { Name: 'Atharva Pore', Sem: 'Second', Course: 'M1' },
    { Name: 'Akshada Bhandari', Sem: 'Second', Course: 'M2' },
    { Name: 'Aadesh Oak', Sem: 'Second', Course: 'M3' },
    { Name: 'Sophia Zhang', Sem: 'Second', Course: 'S1' },
    { Name: 'Sydney Searcy', Sem: 'Second', Course: 'M3' },

  ]
 
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.SubMenu key="sub1" title="Dashboard">
          <Menu.Item key="1">Overview</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2" title="Courses">
          {courses.map((subject) => (
            <Menu.Item key={subject.course_id}>{subject.course_title}</Menu.Item>
          ))}
        </Menu.SubMenu>
        <Menu.SubMenu key="sub3" title="Assignments">
        <Menu.SubMenu key="sub3-1" title="Upcoming">
          {assignments.map((assignment, index) => (
            <Menu.Item key={index}>
              {assignment.subject}: {assignment.title} (Due: {assignment.deadline})
            </Menu.Item>
          ))}
          </Menu.SubMenu>
          <Menu.Item key="4">Grades</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub4" title="Calender">
          <Menu.Item key="5">
            {/* <Router>
                <Route path='/calendar' Component={CalendarImplementation}>
                </Route>
            </Router> */}
              <CalendarImplementation />
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

const Calendar = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <p>View your upcoming events and due dates.</p>
    </div>
  );
};



const Dashboard = () => {

  const location = useLocation();
  const id = location.state.detail;
  console.log(id)
 
  

    var subjects = [
      { course_title: 'English', course_id: 'ENG101',semester_id:"FA22" },
      { course_title: 'Mathematics', course_id: 'MATH101',semester_id:"FA22" },
      { course_title: 'History', course_id: 'HIST101',semester_id:"SP23" },
      { course_title: 'Science', course_id: 'SCI101',semester_id:"SP23" },
    ];
   

    return(
      <Layout>
        <Header className="header">
          <div className="logo-container">
            <img
              src="https://dummyimage.com/50x50/f0f0f0/000000.png&text=LMS+Logo"
              alt="LMS Logo"
              className="logo"
            />
            <span className="title">Edumate Dashboard</span>
          </div>
        </Header>
        <Layout>
          <Sidebar subjects={id} />
          <Content className="site-layout-background">
            <MainScreen subjects = {id}/>
          </Content>
        </Layout>
      </Layout>
      )
    
  };
export default Dashboard;

