import React from 'react'

export default class UsernameCheck extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            loginUserName: '',
            securityQuestion: '',
            securityAnswer: '',
        }
    }
    
    handleUserChange = event => {
        event.preventDefault();
        this.setState({
            loginUserName: event.target.value,
        })
        console.log(this.state)
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    // TODO: check username with database
    confirmUser = () => {
        return this.state.loginUserName === 'zhanso'; // returns boolean
    }

    userNameFormSubmit = (event) => {
        event.preventDefault();
        if (this.confirmUser()) {
            this.setState({
                securityQuestion: "lmao",
            });
            alert("username found");
        } else {
            alert("username does not exist");
        }
    }

    // questionFormSubmit = () => {
        
    // }

    render() {
        return (
            <div className="menu p-md-5 p-sm-0 min-vh-100">
                <div className="mx-auto py-5 bg-light loginreg w-25 rounded">
                    <form onSubmit={this.userNameFormSubmit} className="p-4">
                        <label>Enter Username: </label>
                        <input
                            onChange={this.handleUserChange}
                            className="ml-3"
                            name="loginUserName"
                        />
                        <br />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
                    <form onSubmit={this.formSubmit} className="p-4">
                        <br />
                        <br />
                        <label>Your Security Question:  </label>
                        <input
                            onChange={this.handleChange}
                            className="ml-3"
                            name="securityQuestion"
                            value={this.state.securityQuestion}
                            disabled={true}
                        />
                        <br />
                        <br />
                        <label>Enter Security Question Answer:  </label>
                        <input
                            onChange={this.handleChange}
                            className="ml-3"
                            name="securityAnswer"
                            value={ this.state.securityAnswer}
                        />
                        <br />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        );   
    }
}