import React from 'react'
import { Link } from 'react-router-dom'
export default class SuccessfulLogin extends React.Component {
  render () {
    return (
      <div>
        <p className=" h1 text-center text-secondary font-weight-bold font-italic mt-5">
          Successful login!!!
        </p>
        <Link
          to="/home/logout"
          className="btn btn-primary float-left  ml-5 mt-5"
        >
          Logout
        </Link>
      </div>
    )
  }
}
