import React from 'react'
import { Card } from 'react-bootstrap' // import the Bootstrap Card component

function AssignmentList (props) {
  // define a list of assignments
  const assignments = [
    { title: 'Introduction', description: 'Introduction' },
    { title: 'Lecture Summary 1', description: 'Week 1 Lecture Summary' },
    { title: 'Lecture Summary 2', description: 'Week 2 Lecture Summary' }
  ]

  // handle click event
  const handleClick = (assignment) => {
    window.open(
      `https://example.com/assignments/${assignment.title}`,
      '_blank'
    )
  }

  return (
    <div>
      {assignments.map((assignment, index) => (
        <Card
          key={index}
          style={{ marginBottom: '10px' }}
          onClick={() => handleClick(assignment)}
        >
          <Card.Body>
            <Card.Title>{assignment.title}</Card.Title>
            <Card.Text>{assignment.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default AssignmentList
