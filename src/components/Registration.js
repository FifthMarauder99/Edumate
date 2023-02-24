import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { Button, Container, Row, Col } from 'reactstrap'
// import { Client } from 'pg'
// import * as dotenv from 'dotenv'


export default class Registration extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      apiResponse: '',
      userName: '',
      lastName: '',
      mobile: '',
      emailId: '',
      password: '',
      confirmPassword: '',
            // adding role for later
      role: 'Educator',
      formValues: [],
      showDetails: false
    }
  }

  callAPI() {
    // most likely going to change
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
  
  handleChange = (event) => {
    // dotenv.config({ path: ../../.env' });
    // console.log(process.env.DATABASE_URL);
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  formSubmit = async () => {
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post: this.state.post }),
      });
      const body = await response.text();

    if (this.state.password !== this.state.confirmPassword) {
      alert('passwords do not matched')
      return false
    } else {
      alert('Form Submitted Successfully')
      this.setState({
        formValues: [
          this.state.userName,
          this.state.mobile,
          this.state.emailId,
          this.state.password,
          this.state.role,
        ],
        showDetails: true
      });
      // inserting into the database the info
      // const database_url = "postgres://akeiblbxtugmjc:499dbdfb81e68eafb1996d0833e3127bd558b166ddb4e247104c8dc26701fdbd@ec2-3-217-251-77.compute-1.amazonaws.com:5432/dev7840n5hhvvt"
      // const client = new Client({
      //   connectionString: database_url,
      //   ssl: true,
      // });
      // client.connect();
      // const query = `INSERT INTO 'users' (email, username, password, user_role, mobile) VALUES (${this.state.emailId}, ${this.state.userName}, ${this.state.password}, ${this.state.role}, ${this.state.mobile})`;
      // client.query(query, (err, res) => {
      //   if (err) {
      //     console.log("didn't register" + err);
      //     throw err;
      //   }
      //   console.log('inserted into users');
      //   for (let row of res.rows) {
      //     console.log(JSON.stringify(row));
      //   }
      //   client.end();
      // });
      console.log(this.state.formValues)
      this.props.history.push({
        pathname: '/home/employeelist',
        data: this.state.formValues
      })
      return true
    }
  }

  render () {
    const { userName, emailId, mobile, password, confirmPassword} = this.state
    return (
      <div>
        <p className="AppAPIResp">{this.state.apiResponse}</p>
        <div>
          <p className="h4 text-center text-primary font-weight-bold font-italic">
            Sign-Up
          </p>
        </div>
        <AvForm onValidSubmit={this.formSubmit}>
          <Container>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <AvField
                  onChange={this.handleChange}
                  name="userName"
                  label="User Name"
                  type="text"
                  validate={{
                    required: {
                      value: { userName },
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
                  name="mobile"
                  label="Mobile No"
                  type="text"
                  validate={{
                    required: {
                      value: { mobile },
                      errorMessage: 'Please enter your mobile number'
                    },
                    pattern: {
                      value: '^[0-9]+$',
                      errorMessage:
                        'Mobile Number must be composed only with numbers'
                    },
                    minLength: {
                      value: 10,
                      errorMessage:
                        'Your mobile number must be composed of 10 digits'
                    },
                    maxLength: { value: 10 }
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <AvField
                  onChange={this.handleChange}
                  name="emailId"
                  label="Email id"
                  type="email"
                  errorMessage="Invalid email id"
                  validate={{
                    required: {
                      value: { emailId },
                      errorMessage: 'Please enter your email address'
                    }
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <AvField
                  onChange={this.handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  validate={{
                    required: {
                      value: { password },
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
                        'Password name must be b/w 5 to 16 characters'
                    }
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <AvField
                  onChange={this.handleChange}
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  validate={{
                    required: {
                      value: { confirmPassword },
                      errorMessage: 'Please enter your confirm password'
                    },
                    pattern: {
                      value: '^[A-Za-z0-9]+$',
                      errorMessage:
                        'Confirm Password must be composed only with letter and numbers'
                    },
                    minLength: {
                      value: 5,
                      errorMessage:
                        'Password name must be b/w 5 to 16 characters'
                    },
                    maxLength: {
                      value: 16,
                      errorMessage:
                        'Password name must be b/w 5 to 16 characters'
                    }
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </AvForm>
        <div>
          {this.state.showDetails && (
            <div className="mt-5">
              <>
                <p className="text-secondary h5 font-weight-bold font-italic">
                  Submitted form values
                </p>
              </>
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      color: 'grey'
                    }}
                  >
                    User Name:{' '}
                  </span>
                  {this.state.userName}
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      color: 'grey'
                    }}
                  >
                    Mobile No:{' '}
                  </span>
                  {this.state.mobile}
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      color: 'grey'
                    }}
                  >
                    Mail Address:{' '}
                  </span>
                  {this.state.emailId}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
