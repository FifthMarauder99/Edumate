import React, { useState } from 'react'
import './A1.css'

const A1 = () => {
  // sample data for 5 assignments
  const [assignments, setAssignments] = useState([
    { name: 'Introduction', maxMarks: 20, marks: 18 },
    { name: 'Lecture Summary 1', maxMarks: 30, marks: '' },
    { name: 'Lecture Summary 2', maxMarks: 30, marks: '' },
  ])

  const totalMarks = assignments.reduce((sum, item) => sum + item.marks, 0)
  const totalMaxMarks = assignments.reduce((sum, item) => sum + item.maxMarks, 0)
  const totalGrades = ((totalMarks / totalMaxMarks) * 100).toFixed(2)

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Maximum Marks</th>
            <th>Marks Gotten</th>
            <th>View Assignment</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
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

export default A1
