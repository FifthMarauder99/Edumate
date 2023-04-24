import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import './M1.css'

const getModule = async (course_id, module_title) => {
  const url = 'http://localhost:9000/getModules/specificModule'
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      course_id,
      module_title
    })
  }
  )
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}

function ModuleContent () {
  const { state } = useLocation()

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  // todo: file stuff later
  const [file, setFile] = useState(null)

  useEffect(() => {
    async function fetchModule () {
      const response = await getModule(state.courseId, state.moduleTitle)
      setTitle(response.results[0].module_title)
      setText(response.results[0].module_text)
      // todo: file stuff
      return response
    }
    fetchModule()
  }, [])

  console.log('in modulecontent ' + title)
  console.log('in modulecontent text ' + text)

  return (
        <div>
            <h2 className={{ textAlign: 'center' }}>{title}</h2>
            <p>{text}</p>
          { file ? <img src={file} /> : <p> No file included </p>}
      </div>
  )
}

export default ModuleContent
