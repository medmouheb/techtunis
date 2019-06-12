import React, { Component } from 'react'
import './SimpleProduct.css'
import GridCard from "./cards/gridCard"
import DetailLight from "../../../common/detailLight"
class SimpleProduct extends Component {
    render() {
        return (
            <div className="SimpleProduct" >
                {this.props.data.map(el => {
                    return (
                        <DetailLight cardType="grid" data={el}/>
                    )
                })}
            </div>
        )
    }
}


export default SimpleProduct