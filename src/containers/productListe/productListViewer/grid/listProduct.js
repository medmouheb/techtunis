import React, { Component } from 'react'
import ListCard from './cards/listCard'
import './listProduct.css'
import DetailLight from "../../../common/detailLight"

class ListOfProducts extends Component {
    render() {
        return (
            <div >
                {this.props.data.map(el => {
                    return (
                        <DetailLight cardType="simpleList" data={el} />
                    )
                })}
            </div>
        )
    }
}



export default ListOfProducts