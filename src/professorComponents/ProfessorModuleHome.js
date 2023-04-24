import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const getCourseIdForCourse = async (course_title) => {
  const response = await fetch('http://localhost:9000/getCourses/courseTitle', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      course_title
    })
  }
  )
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}

const getModules = async (course_title) => {
  const url = 'http://localhost:9000/getModules'
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      course_title
    })
  }
  )
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}

const ProfessorModuleHome = () => {
  const [courseTitle, setCourseTitle] = useState(window.history.state.selectedCourse)
  const [courseId, setCourseId] = useState('')
  const [modules, setModules] = useState([])

  console.log('modules home ' + courseTitle)
  console.log('modules home ' + courseId)

  useEffect(() => {
    async function fetchCourseId () {
      const response = await getCourseIdForCourse(courseTitle)
      setCourseId(response.results[0].course_id)
      return response
    }
    async function fetchModules () {
      console.log('sinside fetch modules' + courseId)
      const response = await getModules(courseTitle)
      console.log(response)
      const resList = []
      for (let i = 0; i < response.results.length; i++) {
        resList.push({
          module_id: response.results[i].module_id,
          course_id: response.results[i].course_id,
          module_title: response.results[i].module_title,
          module_text: response.results[i].module_text
          // todo: add in the module file later
        })
      }
      setModules(resList)
      return response
    }
    fetchCourseId()
    fetchModules()
  }, [])

  // sample data for 5 assignments
  //   const [assignments, setAssignments] = useState([
  //     { name: 'Assignment 1', maxMarks: 20, marks: 18 },
  //     { name: 'Assignment 2', maxMarks: 20, marks: 16 },
  //     { name: 'Assignment 3', maxMarks: 20, marks: 14 },
  //     { name: 'Assignment 4', maxMarks: 20, marks: 19 },
  //     { name: 'Assignment 5', maxMarks: 20, marks: 15 }
  //   ])

  //   const totalMarks = assignments.reduce((sum, item) => sum + item.marks, 0)
  //   const totalMaxMarks = assignments.reduce((sum, item) => sum + item.maxMarks, 0)
  //   const totalGrades = ((totalMarks / totalMaxMarks) * 100).toFixed(2)

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
          {modules.map((item, index) => (
            <tr key={index}>
              <td>{item.module_title}</td>
              <td><button>View the assignment</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProfessorModuleHome
