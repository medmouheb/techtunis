import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap"
import { connect } from 'react-redux'
import { userLogin } from '../../store/actions/login'
class LoginComponenet extends Component {
    state = {
        email: "",
        password: ""
    }
    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" onClick={() => { this.props.userLogin(this.state) }}>
                    Submit
                </Button>
            </Form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => dispatch(userLogin(user))
    }
}
export default connect(null, mapDispatchToProps)(LoginComponenet)
