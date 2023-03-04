import React, { useContext } from "react"
import SecurityCheck from "./SecurityCheck";

export default class UsernameCheck extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            loginUserName: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.setState({ username: this.context.username });
        console.log(this.state)
    }

    // TODO: check username with database
    confirmUser = () => {
        return this.state.loginUserName === 'zhanso'; // returns boolean
    }

    formSubmit = () => {
        if (this.confirmUser()) {
            alert("username found");
            this.props.history.push('/home/securityCheck');
        } else {
            alert("username does not exist");
        }
    }

    render() {
        return (
            <div className="menu p-md-5 p-sm-0 min-vh-100">
                <div className="mx-auto py-5 bg-light loginreg w-25 rounded">
                    <form onSubmit={this.formSubmit} className="p-4">
                        <label>Enter Username: </label>
                        <input
                            onChange={this.handleChange}
                            className="ml-3"
                            name="loginUserName"
                        />
                        <br />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
                    <SecurityCheck />
                </div>
            </div>
        );   
    }
}