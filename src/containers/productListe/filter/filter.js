import React, { Component } from 'react';
import { connect } from 'react-redux'
// import {init2slider} from './fun'

import './filter.css'
import { Form, Button, Fade } from 'react-bootstrap';
import { filterProduct } from '../../../store/actions/product'
const list = [
    {
        label: "categories",
        fade: true,
        variety: [
            "nokia",
            "apple",
            "sumsung"
        ],
    },
    {
        label: "products",
        fade: true,
        variety: [
            "phone",
            "pc",
            "labtop"
        ]
    },
    {
        label: "stockage",
        fade: true,
        variety: [
            "8G",
            "16G",
            "32G"
        ]
    },
    {
        label: "prices",
        fade: true,
        variety: [
            "Under $25",
            "$25 to $50",
            "$50 to $100",
            "$100 to $200",
            "$200 & Above"
        ]
    }
]

class Filter extends Component {
    state = {
        priceFrom: 0,
        priceTo: 100,
        condition: list.map(el => { return { ...el, variety: [] } }),
        fadeBoolean: list.map(el => { return el.fade })
    }

    render() {


        const handleFilter = (event, ind, el) => {
            if (event.target.checked) {
                this.state.condition[ind].variety.push(el)
                this.props.filterProduct(this.state.condition)
            }
            else {
                let tab = this.state.condition[ind].variety.filter(element => { return element !== el })
                this.state.condition[ind].variety = tab
                this.props.filterProduct(this.state.condition)
            }
        }
        return (
            <div className="sidefilter">
                {list.map((element, ind) => {
                    return (
                        <div>
                            <Button
                                block
                                onClick={() => { let tab = this.state.fadeBoolean; tab[ind] = !tab[ind]; this.setState({ fadeBoolean: tab }) }}
                                aria-controls="example-fade-text"
                            >
                                {element.label}
                            </Button>
                            <div style={{ display: this.state.fadeBoolean[ind] ? "block" : "none" }} >
                                <Fade in={this.state.fadeBoolean[ind]}>
                                    <div style={{textAlign:"center"}} id="example-fade-text">
                                        {element.variety.map(el => {
                                            return (
                                                <Form.Check onClick={(event) => { handleFilter(event, ind, el) }} type='checkbox' label={el} />
                                            )
                                        })}
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    )
                })}

                <div className="price-slider" >
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <div>
                            {this.state.priceFrom<this.state.priceTo?this.state.priceFrom:this.state.priceTo}£
                        </div>
                        <div>
                            {this.state.priceFrom>this.state.priceTo?this.state.priceFrom:this.state.priceTo}£
                        </div>
                    </div>
                    <input onChange={(e)=>{this.setState({priceFrom:e.target.value})}} defaultValue={0} min={0} max={100} step="1" type="range" oninput="updatePriceLabels()" />
                    <input onChange={(e)=>{this.setState({priceTo:e.target.value})}} defaultValue={100} min={0} max={100} step="1" type="range" oninput="updatePriceLabels()" />
                </div>
            </div>
        )

    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        filterProduct: (data) => dispatch(filterProduct(data))
    }
}
export default connect(null, mapDispatchToProps)(Filter)