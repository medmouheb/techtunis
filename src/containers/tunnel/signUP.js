import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap"
import { connect } from 'react-redux'
import { userSignup } from '../../store/actions/signup'
class SignupComponenet extends Component {
    state = {
        fullName: "",
        borthDate: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>full name</Form.Label>
                    <Form.Control onChange={(e) => { this.setState({ fullName: e.target.value }) }} placeholder="Enter full name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>burth date</Form.Label>
                    <Form.Control type="date" onChange={(e) => { this.setState({ borthDate: e.target.value }) }} placeholder="enter borth date" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>phone number</Form.Label>
                    <Form.Control type="number" onChange={(e) => { this.setState({ phone: e.target.value }) }} placeholder="Enter phone number" />
                </Form.Group>
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
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>confirm Password</Form.Label>
                    <Form.Control onChange={(e) => { this.setState({ confirmPassword: e.target.value }) }} type="password" placeholder="confirm Password" />
                </Form.Group>

                <Button variant="primary" onClick={() => { this.props.userSignup(this.state) }}>
                    Submit
                </Button>
            </Form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userSignup: (newuser) => dispatch(userSignup(newuser))
    }
}
export default connect(null, mapDispatchToProps)(SignupComponenet)
