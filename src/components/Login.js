import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { Button, Container, Row, Col } from 'reactstrap'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loginUserName: '',
      loginPassword: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  
  attemptLogin = async (url = '') => {
    const response = await fetch(url, {
      method: 'POST',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.loginUserName
      })
    }
    );
    return response.json();
  }

  formSubmit = async () => {
    let response;
    try {
      response = await this.attemptLogin('http://localhost:9000/getCredentials');
      console.log(response);
    } catch (e) {
      console.log(e)
      alert('no account found with that username and/or password');
      return false
    }
    // let response_user = response.results[0].username;
    let response_password = (response === undefined) ? "" : response.password;
    console.log("response_password " + response_password);
    if (
      (this.state.loginUserName === 'admin' &&
        this.state.loginPassword === 'admin') || this.state.loginPassword === response_password
    ) {
      alert('credentials matched')
      this.props.history.push('/home/successfulLogin')
      return true
    } else {
      alert('invalid credentials')
      return false
    }
  }

  render () {
    const { loginUserName, loginPassword } = this.state
    return (
      <div>
        <div>
          <p className=" h4 text-center text-primary font-weight-bold font-italic">
            Login
          </p>
        </div>
        <AvForm onValidSubmit={this.formSubmit}>
          <Container>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <AvField
                  onChange={this.handleChange}
                  name="loginUserName"
                  label="User Name"
                  type="text"
                  validate={{
                    required: {
                      value: { loginUserName },
                      errorMessage: 'Please enter your user name'
                    },
                    pattern: {
                      value: '^[A-Za-z0-9]+$',
                      errorMessage:
                        'First Name must be composed only with letter and numbers'
                    },
                    minLength: {
                      value: 4,
                      errorMessage: 'User name must be b/w 4 to 16 characters'
                    },
                    maxLength: {
                      value: 16,
                      errorMessage: 'User name must be b/w 6 to 16 characters'
                    }
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <AvField
                  onChange={this.handleChange}
                  name="loginPassword"
                  label="Password"
                  type="password"
                  validate={{
                    required: {
                      value: { loginPassword },
                      errorMessage: 'Please enter your password'
                    },
                    pattern: {
                      value: '^[A-Za-z0-9]+$',
                      errorMessage:
                        'Password must be composed only with letter and numbers'
                    },
                    minLength: {
                      value: 5,
                      errorMessage:
                        'Password name must be b/w 5 to 16 characters'
                    },
                    maxLength: {
                      value: 16,
                      errorMessage:
                        'Password name must be b/w 6 to 16 characters'
                    }
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Button type="submit" color="primary">
                  Login
                </Button>
              </Col>
            </Row>
          </Container>
        </AvForm>
      </div>
    )
  }
}

// Login.propTypes = {

// }
