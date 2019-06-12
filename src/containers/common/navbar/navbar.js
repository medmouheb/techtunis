import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar'
import GenericForme from '../../dataTable/genericForm/genericform'
import { Modal, DropdownButton, Dropdown, Badge, Navbar, Form, Button, Nav, NavDropdown, OverlayTrigger, Overlay } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import './navbar.css'
import { userLogin } from '../../../store/actions/login'
import { userSignup } from '../../../store/actions/signup'

let signupData = [
  {
    type: "input",
    inputType: "email",
    label: "email"
  },
  {
    type: "input",
    inputType: "password",
    label: "password"
  },
  {
    type: "input",
    inputType: "password",
    label: "conform password"
  }
]
let loginData = [
  {
    type: "input",
    inputType: "email",
    label: "email"
  },
  {
    type: "input",
    inputType: "password",
    password: "password"
  }
]
class NavBar extends Component {
  state = {
    showSignUP: false,
    showLogIn: false,
  }


  render() {

    const { showLogIn, showSignUP } = this.state;

    const LoginPopover = (
      <Modal show={showLogIn} onHide={() => { this.setState({ showLogIn: false }) }}>
        <GenericForme modifiefunction={(data) => { this.props.userLogin(data); this.setState({ showLogIn: false }) }} data={loginData} />
        <Modal.Footer>
          <Button onClick={()=>{this.setState({ showLogIn: false })}} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    )
    const signupPopover = (
      <Modal show={showSignUP} onHide={() => { this.setState({ showSignUP: false }) }}>
        <GenericForme modifiefunction={(data) => { this.props.userSignup(data); this.setState({ showSignUP: false }) }} data={signupData} />
        <Modal.Footer>
          <Button onClick={()=>{this.setState({ showSignUP: false })}} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    )
    const WhenConnected = (
      <Form inline style={{ display: !this.props.isConnected ? "" : "none" }}>
        <Button
          variant="danger"
          className="signUpButton"
          size="sm"
          variant="outline-primary"
          onClick={() => this.setState({ showSignUP: true })}
        >
          Sign up
        </Button>
        {signupPopover}

        <Button
          variant="outline-success"
          size="sm"
          onClick={() => this.setState({ showLogIn: true })}
        >
          Log in
        </Button>
        {LoginPopover}

      </Form>
    )
    const WhenDisconnected = (
      <Form inline style={{ display: this.props.isConnected ? "" : "none" }}>
        <Link className="ShoppingCartIcon" to="ShoppingCart"><i class='fas fa-shopping-cart'></i>
          <Badge className="ShoppingCarBadge" variant="danger">{this.props.totalitems}</Badge></Link>
        <Link className="identificationIcon"><i class='far fa-address-card'></i></Link>
      </Form>
    )
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  >
          <Nav >
            {this.props.data.map(el => {
              if (el.type === "link") {
                return (
                  <Nav.Link>
                    <Link style={{ textDecoration: "none" }} to={el.adresee}>   {el.name}</Link>
                  </Nav.Link>
                )
              }
              else if (el.type === "dropdown") {
                return (
                  <NavDropdown title={el.name} id="basic-nav-dropdown">
                    {el.childrens.map(element => {
                      return <NavDropdown.Item href={element.adresee}>{element.name}</NavDropdown.Item>
                    })}
                  </NavDropdown>
                )
              }
              // else if (el.type === "secenddropdown") {
              //   return (
              //     <DropdownButton drop="down"  variant="secondary" title={el.name}>
              //       {el.childrens.map(element => {
              //         if (element.type == "normal") { return <Dropdown.Item href={element.adresee} >{element.name}</Dropdown.Item> }
              //         else {

              //           return (
              //             <DropdownButton drop="right" variant="secondary" title={element.name}> 
              //               {element.grandChildrens.map(element0 => { return (<Dropdown.Item href={element.adresee0} >{element0.name}</Dropdown.Item>) })}
              //               </DropdownButton>
              //           )
              //         }
              //       })}
              //    </DropdownButton>
              //   )
              // }
              else if (el.type === "logo") {
                return (
                  <Navbar.Brand  ><Link to="/"> <img alt={el.name} src={el.src} width="20" /></Link></Navbar.Brand>
                )
              }
              else if (el.type === "icon") {
                return (<div> <img src={el.src} width="20" /> <h6><Badge variant="secondary">{el.name}</Badge></h6></div>)
              }
            })}
          </Nav>
          <Searchbar />
          <div className="navbarButtons" >
            {WhenConnected}
            {WhenDisconnected}
          </div>

        </Navbar.Collapse>
      </Navbar>

    )

  }
}
const mapStateToProps = (state) => {
  return {
    isConnected: state.currentUserReducer.isConnected,
    totalitems: state.ShoppingCartReducer.totalitems,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user) => dispatch(userLogin(user)),
    userSignup: (newuser) => dispatch(userSignup(newuser))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);