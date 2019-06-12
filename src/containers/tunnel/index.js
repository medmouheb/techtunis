import React, { Component } from 'react'
import { Route, Link, BrowserRouter } from "react-router-dom";
import QuestionFormat from './genericForm/genericform'
import { ProgressBar } from 'react-bootstrap';
import LoginComponenet from './login'
import SignupComponenet from './signUP'
import ShoppingCart from './shopping cart/shoppingCart'
import Shipping from './shopping cart/shipping/shipping'
import Identification from './idetification/identification'
import Payment from './payment/payment'
import Conformation from './conformation/conformation'
import { connect } from 'react-redux'
import NavBar from '../common/navbar/navbar'
import Footer from '../common/footer/footer'
import FixedDownBar from '../common/fixed down bar/fixedDownBar'

import './tunnel.css'
class Tunnel extends Component {
    state={
        show:"ShoppingCart"
    }
    render() {
        const {menu,footer} = this.props
        const changeSate=(newshow)=>{
            this.setState({show:newshow})
        }
        return (
            <div>
            <NavBar data={menu}/>
            <BrowserRouter>
                    <Link to="/tunnel/QuestionFormat"> <button>  QuestionFormat</button></Link>
                    <Link to="/tunnel/LoginComponenet"> <button>  LoginComponenet</button></Link>
                    <Link to="/tunnel/SignupComponenet"> <button>  SignupComponenet</button></Link>
                    <ProgressBar>
                        <ProgressBar id="ProgressBar" label="ShoppingCart"  striped variant={this.state.show==="ShoppingCart"?"danger":"secondary"} now={20} key={1} />
                        <ProgressBar id="ProgressBar" label="Identification"  striped variant={this.state.show==="Identification"?"danger":"secondary"} now={20} key={3} />
                        <ProgressBar id="ProgressBar" label="Shipping"  striped variant={this.state.show==="Shipping"?"danger":"secondary"} now={20} key={2} />
                        <ProgressBar id="ProgressBar" label="Payment"  striped variant={this.state.show==="Payment"?"danger":"secondary"} now={20} key={4} />
                        <ProgressBar id="ProgressBar" label="Conformation"  striped variant={this.state.show==="Conformation"?"danger":"secondary"} now={20} key={5} />
                    </ProgressBar>

                    <Route path="/tunnel/QuestionFormat"  component={QuestionFormat}  />
                    <Route path="/tunnel/LoginComponenet"  component={LoginComponenet}  />
                    <Route path="/tunnel/SignupComponenet"  component={SignupComponenet}  />

                    <Route path="/tunnel/ShoppingCart"  component={()=><ShoppingCart  changeSate={changeSate} />}  />
                    <Route path="/tunnel/Identification"  component={()=><Identification  changeSate={changeSate}/>} />
                    <Route path="/tunnel/Shipping" component={()=><Shipping changeSate={changeSate}  />}  />
                    <Route path="/tunnel/Payment"  component={()=><Payment  changeSate={changeSate}/>}  />
                    <Route path="/tunnel/Conformation"  component={()=><Conformation  /> }/>
                    <Route exact path="/tunnel/" component={()=><ShoppingCart  changeSate={changeSate} />}  />
                  
                    
            </BrowserRouter>
            <FixedDownBar/>

            <Footer data={footer}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        menu: state.menuReducers.menu,
        footer: state.FooterReducer.footer,
    }
  }
export default connect(mapStateToProps)(Tunnel)