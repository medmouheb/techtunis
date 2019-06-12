import React,{Component} from 'react'
import {Button} from 'react-bootstrap'
import { Link} from "react-router-dom";

class Identification extends Component{
    render(){
        return(
            <div>
                are you you
                <Link to="/tunnel/Shipping"> <Button onClick={()=>{this.props.changeSate("Shipping")}}>  Shipping</Button></Link>

            </div>
        )
    }
}
export default Identification