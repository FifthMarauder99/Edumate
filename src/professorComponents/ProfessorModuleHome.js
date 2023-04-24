import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const getModules = async (data = {}) => {
  const url = 'http://localhost:9000/getModules'
  console.log(data)
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      course_id: data.course_id
    })
  }
  )
  if (!response.ok) throw new Error(response.statusText)
  return response
}

const ProfessorModuleHome = () => {
  const [courseId, setCourseId] = useState(window.history.state.selectedCourse)
  console.log('modules home ' + courseId)
  // sample data for 5 assignments
  const [assignments, setAssignments] = useState([
    { name: 'Assignment 1', maxMarks: 20, marks: 18 },
    { name: 'Assignment 2', maxMarks: 20, marks: 16 },
    { name: 'Assignment 3', maxMarks: 20, marks: 14 },
    { name: 'Assignment 4', maxMarks: 20, marks: 19 },
    { name: 'Assignment 5', maxMarks: 20, marks: 15 }
  ])

  const totalMarks = assignments.reduce((sum, item) => sum + item.marks, 0)
  const totalMaxMarks = assignments.reduce((sum, item) => sum + item.maxMarks, 0)
  const totalGrades = ((totalMarks / totalMaxMarks) * 100).toFixed(2)

  // const [modules, setModules] = useState([])

  // useEffect(() => {
  //     async function fetchModules() {
  //        const response = await getModules()
  //    }
  // })

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Module</th>
            <th>View Module</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>y
              <td>{item.maxMarks}</td>
              <td>{item.marks}</td>
              <td><button>View the assignment</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grades-container">
        <span>Total Grades:</span>
        <span>{totalGrades}%</span>
      </div>
    </div>
  )
}

export default ProfessorModuleHome
