import React, { useEffect, useState, useRef } from 'react';
import { Layout, Menu, Table, Select, Input } from 'antd';
import './styles.css';

const { Header, Content, Sider } = Layout;
const { Option } = Select;
const { Search } = Input;


const courses = [
  { name: 'English', code: 'ENG101', students: [], professors: [] },
  { name: 'Mathematics', code: 'MATH101', students: [], professors: [] },
  { name: 'History', code: 'HIST101', students: [], professors: []  },
  { name: 'Science', code: 'SCI101', students: [], professors: []  },
  // ... add more courses here
];
const getStudents = async (url='http://localhost:9000/getStudents') => {
// const getStudents = async ({ url}) => {
    const response = await fetch(url, {
        method: 'get',
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        }
    }
    );
    if (!response.ok) throw new Error(response.statusText)
    return response.json();
}

const getProfessors = async (url='http://localhost:9000/getProfessors') => {
// const getStudents = async ({ url}) => {
    const response = await fetch(url, {
        method: 'get',
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        }
    }
    );
    if (!response.ok) throw new Error(response.statusText)
    return response.json();
}

const CourseList = () => {
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [studentOptions, setStudents] = useState(getStudents());
    const [profOptions, setProfs] = useState([]);

    const refStudent = useRef(true);
    const refProfessor = useRef(true);

    const useFirstRenderStudent = () => {
        const firstRender = refStudent.current;
        refStudent.current = false;
        return firstRender;
    }

    const useFirstRenderProf = () => {
        const firstRender = refProfessor.current;
        refProfessor.current = false;
        return refProfessor;
    }

    
  const handleSearch = (value) => {
    const filtered = courses.filter((course) =>
      course.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleAssign = (code, students) => {
    const courseIndex = courses.findIndex((course) => course.code === code);
    courses[courseIndex].students = students;
    setFilteredCourses([...courses]);
  };

    const handleAssignAdmin = (code, professors) => {
    const courseIndex = courses.findIndex((course) => course.code === code);
    courses[courseIndex].professors = professors;
    setFilteredCourses([...courses]);
  };

  const handleSave = () => {
    // Do something with the updated courses, e.g. send to server
    console.log('Updated courses:', courses);
  };
  const columns = [
    {
      title: 'Course Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Course Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Number of Students',
      dataIndex: 'students',
      key: 'students',
      render: (students) => students.length,
    },
    {
      title: 'Assign Students',
      dataIndex: 'assign',
      key: 'assign',
      render: (_, record) => {
          const { students, code } = record;
//           async function fetchStudents() {
//               const response = await getStudents();
//                 console.log(response);
//                 const resList = [];
//                 for (let i = 0; i < response.length; i++) {
//                   resList.push(response[i]);
//                 }
//               if (JSON.stringify(resList) != JSON.stringify(studentOptions)) {
//                   setStudents(resList);
// ;                  console.log("DIFFERENT");
//                   console.log("student options " + studentOptions);
//               }
//               return response;
//           }
        //   if(refStudent) fetchStudents();
        //   refStudent = false;
        const handleChange = (value) => {
          handleAssign(code, value);
        };
        return (
          <Select
            mode="multiple"
            placeholder="Select students"
            style={{ minWidth: 200 }}
            onChange={handleChange}
            value={students}
            filterOption={(inputValue, option) =>
              option.children.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
            }
            optionFilterProp="children"
            showSearch
            >
            <Option value="all">Select All Students</Option>
            {studentOptions.map((student) => (
              <Option value={student.user_id}>{student.username}</Option>
            ))}
          </Select>
        );
          },
      },
        {
      title: 'Assign Professors',
      dataIndex: 'assign',
      key: 'assign',
      render: (_, record) => {
          const { professors, code } = record;
//           async function fetchProfs() {
//               const response = await getProfessors();
//                 console.log(response);
//                 const resList = [];
//                 for (let i = 0; i < response.length; i++) {
//                   resList.push(response[i]);
//                 }
//               if (JSON.stringify(resList) != JSON.stringify(profOptions)) {
//                   setProfs(resList);
// ;                  console.log("DIFFERENT");
//                   console.log("professor options " + profOptions);
//               }
//               return response;
//           }
//           if (refProfessor) fetchProfs();
//           refProfessor = false;
        const handleChangeAdmin = (value) => {
          handleAssignAdmin(code, value);
        };
        return (
          <Select
            mode="multiple"
            placeholder="Select professors"
            style={{ minWidth: 200 }}
            onChange={handleChangeAdmin}
            value={professors}
            filterOption={(inputValue, option) =>
              option.children.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
            }
            optionFilterProp="children"
            showSearch
            >
            <Option value="all">Select All Professors</Option>
            {profOptions.map((prof) => (
              <Option value={prof.user_id}>{prof.username}</Option>
            ))}
          </Select>
        );
      },},
    // {
    //   title: 'Assign Professor',
    //   dataIndex: 'assign',
    //   key: 'assign',
    //   render: async (_, record) => {
    //       const { professors, code } = record;
    //     //   const response = await getStudents();
    //     //   console.log(response);
    //     const handleChangeAdmin = (value) => {
    //       handleAssignAdmin(code, value);
    //     };
    //     return (
    //       <Select
    //         mode="multiple"
    //         placeholder="Select professor"
    //         style={{ minWidth: 200 }}
    //         onChange={handleChangeAdmin}
    //         value={professors}
    //         filterOption={(inputValue, option) =>
    //           option.children.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
    //         }
    //         optionFilterProp="children"
    //         showSearch
    //         >
    //         <Option value="all">Select All Professors</Option>
    //         <Option disabled>Professors</Option>
    //         <Option value="professor1">Professor 1</Option>
    //         <Option value="professor2">Professor 2</Option>
    //         <Option value="professor3">Professor 3</Option>
    //         {/* ... add more students here */}
    //       </Select>
    //     );
    //   },
    // },
  ];

  return (
    <div className="course-list-container">
      <h1>All Courses</h1>
      <Search placeholder="Search courses" onSearch={handleSearch} style={{ width: 200 }} />
      <Table className="course-list-table" columns={columns} dataSource={filteredCourses} />

      {filteredCourses.map((course) => (
        <div key={course.code}>
          <h2>{course.name} ({course.code})</h2>
          <ul>
            {course.students.map((student) => (
              <li key={student}>{student}</li>
            ))}
            {course.professors.map((professor) => (
              <li key={professor}>{professor}</li>
            ))}
              </ul>
      </div>
      
      ))}

      <button className="save-button" onClick={handleSave}>Save changes</button>
    </div>
  );
};



const Sidebar = () => {
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
          <Menu.Item key="2">All Courses</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub3" title="Assignments">
          <Menu.Item key="3">Upcoming</Menu.Item>
          <Menu.Item key="4">Grades</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub4" title="Calendar">
          <Menu.Item key="5">View Calendar</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};
const AdminView = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo-container">
          <img
            src="https://dummyimage.com/50x50/f0f0f0/000000.png&text=LMS+Logo"
            alt="LMS Logo"
            className="logo"
          />
          <span className="title">Learning Management System</span>
        </div>
      </Header>
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <CourseList />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default AdminView;