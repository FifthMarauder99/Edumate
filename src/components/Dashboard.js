import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import { Layout, Menu, Card, Row, Col } from 'antd';
import './styles.css';
import { Router, Route, Switch } from 'react-router-dom';
import CalendarImplementation from './MyCalender';
const { Header, Content, Sider } = Layout;

const MainScreen = ( {subjects} ) => {
  console.log("subjects",subjects," type:",typeof(subjects))
  const courseData = subjects;
  const [searchQuery, setSearchQuery] = useState('');
  var filteredSubjects = courseData.filter((subject) =>
    subject.course_title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (filteredSubjects.length == 0){
    console.log(filteredSubjects.length)
    filteredSubjects = subjects;
    console.log(filteredSubjects)
  }

  /*const [searchQuery, setSearchQuery] = useState('');
const filteredSubjects = searchQuery
  ? subjects.filter((subject) =>
      subject.course_title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : subjects;*/

  console.log(filteredSubjects)
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
            <Card title={subject.course_title}>
              <p>Sub Code: {subject.course_id}</p>
              <p>Sem code: {subject.semester_id}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Sidebar = ({ subjects }) => {
  const courseData = subjects;
  console.log("In side bar:",courseData)
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
          {courseData.map((subject) => (
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



export default class Dashboard extends React.Component {
  attemptFetchCourses = async (url = '',uid) => {
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
  
   getSubjects = async(id)=>{
    try {
    return await this.attemptFetchCourses('http://localhost:9000/getCourses',id)
     .then((data) => {
      console.log(data)
     return data
  });
    } catch (e) {
      console.log(e)
      alert('not found');
      return false
    }
  }

render (){
  const courseData = []
    var id = this.props.location.state.detail;

  var x;
    try{
    this.getSubjects(id[1]).then(data=> {
      x = data;
      x.forEach(element => courseData.push(element))
    })
    
    }
    catch(e){
      console.log(e)
    }
  
    const subjects = [
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
          <Sidebar subjects={courseData} />
          <Content className="site-layout-background">
            <MainScreen subjects={courseData}/>
          </Content>
        </Layout>
      </Layout>
      )
    
  };
};
