import React,{Component} from 'react'
import {Button} from 'react-bootstrap'
import { Link} from "react-router-dom";

class Payment extends Component{
    render(){
        return(
            <div>
                moneeeeeeeeeeeeeeeeeeeey
                <Link to="/tunnel/Conformation"> <Button onClick={()=>{this.props.changeSate("Conformation")}}>  Conformation</Button></Link>

            </div>
        )
    }
}
export default Payment