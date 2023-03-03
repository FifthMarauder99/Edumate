import React from 'react'
import { Link } from 'react-router-dom'
export default class HomePage extends React.Component {
  render () {
    return (
      <div className="menu p-md-5 p-sm-0 min-vh-100">
        <div className="mx-auto py-5 bg-light loginreg w-25 h-50 rounded">
          <p className=" h1 text-center text-secondary font-weight-bold font-italic">
            Login/Signup Portal
          </p>
          <Link
            to="/home/login" 
            className="btn btn-primary float-left  ml-5 mt-5"
          >
            Login
          </Link>
          <Link
            to="/home/register"
            className="btn btn-primary float-right mr-5 mt-5"
          >
            Sign Up
          </Link>
        </div>
      </div>
    )
  }
}
