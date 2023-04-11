import React, { useState } from 'react';
import { Layout, Menu, Card, Row, Col } from 'antd';
import './styles.css';
import { Router, Route, Switch } from 'react-router-dom';
import CalendarImplementation from './MyCalendar';
const { Header, Content, Sider } = Layout;

const Dashboard = ({ subjects }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
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
          <Col span={8} key={subject.code}>
            <Card title={subject.name}>
              <p>Subject Code: {subject.code}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Sidebar = ({ subjects }) => {
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
          {subjects.map((subject) => (
            <Menu.Item key={subject.code}>{subject.name}</Menu.Item>
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

const CanvasLMS = () => {
  const subjects = [
    { name: 'English', code: 'ENG101' },
    { name: 'Mathematics', code: 'MATH101' },
    { name: 'History', code: 'HIST101' },
    { name: 'Science', code: 'SCI101' },
  ];

  return (
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
        <Sidebar subjects={subjects} />
        <Content className="site-layout-background">
          <Dashboard subjects={subjects}/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CanvasLMS;