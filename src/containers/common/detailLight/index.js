import React, { Component } from 'react'

import { Card, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addItem } from  '../../../store/actions/shoppingCart'
import { addToWishList } from '../../../store/actions/wishList'
import {removeItemWishList} from '../../../store/actions/wishList'
import {removeItemComparateur} from '../../../store/actions/comparateur'
import { removeItem, addSameItem, removeSameItem } from '../../../store/actions/shoppingCart'
import { Link } from "react-router-dom";
import {addToComparateur} from '../../../store/actions/comparateur'
const displayGrid = {
    margin: "20px",
    width: '13rem'
}
const displayCarousal = {
    position:"relative",
    minHeight: "100%",
    minWidth: "200px"
}
class DetailLight extends Component {
    render() {
        switch (this.props.cardType) {
            case "carousal":
                return (
                    <Card  style={displayCarousal}>
                        <div className="discountpercent">{this.props.data.discount || ""}</div>
                        <Link to={this.props.data.link || ""}><Card.Img variant="top" src={this.props.data.src} /></Link>
                        <Card.Body>
                            {this.props.data.name}
                            <Card.Text>
                                {this.props.data.price} DT <span className="discountprice" >{this.props.data.odldPrice ? <small className="text-muted">{this.props.data.odldPrice} DT</small> : ""}</span>
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            < Button onClick={() => {
                                this.props.addItem(this.props.data)
                            }} variant="primary">add to card</Button>
                            < Button onClick={() => {
                                this.props.addToComparateur(this.props.data)
                            }} variant="secondary">add to comparateur</Button>
                            <img src="https://image.flaticon.com/icons/svg/60/60993.svg" style={{ width: "20px" }}
                                onClick={(e) => {
                                    if(e.target.src === "https://image.flaticon.com/icons/svg/148/148836.svg"){
                                    e.target.src = "https://image.flaticon.com/icons/svg/60/60993.svg"    
                                    this.props.removeItemWishList(this.props.data);
                                    }else if(e.target.src === "https://image.flaticon.com/icons/svg/60/60993.svg"){
                                    e.target.src = "https://image.flaticon.com/icons/svg/148/148836.svg"
                                    this.props.addToWishList(this.props.data);
    
                                }
                                    
                                }} />
                        </Card.Footer>
                    </Card>
                )
            case "grid":
                return (
                    <Card style={displayGrid}>
                        <div className="discountpercent">{this.props.data.discount || ""}</div>
                        <Card.Img variant="top" src={this.props.data.src} />
                        <Card.Body>
                            {this.props.data.name}
                            <Card.Text>
                                {this.props.data.price} DT
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            {this.props.data.odldPrice ? <small className="text-muted">{this.props.data.odldPrice} DT</small> : ""}
                            < Button onClick={() => {
                                this.props.addItem(this.props.data)
                            }} variant="primary">add to card</Button>
                            < Button onClick={() => {
                                this.props.addToComparateur(this.props.data)
                            }} variant="secondary">add to comparateur</Button>
                            <img src="https://image.flaticon.com/icons/svg/60/60993.svg" style={{ width: "20px" }}
                                onClick={(e) => {
                                    if(e.target.src === "https://image.flaticon.com/icons/svg/148/148836.svg"){
                                    e.target.src = "https://image.flaticon.com/icons/svg/60/60993.svg"    
                                    this.props.removeItemWishList(this.props.data);
                                    }else if(e.target.src === "https://image.flaticon.com/icons/svg/60/60993.svg"){
                                    e.target.src = "https://image.flaticon.com/icons/svg/148/148836.svg"
                                    this.props.addToWishList(this.props.data);
    
                                }
                                    
                                }} />
                        </Card.Footer>
                    </Card>
                )
            case "simpleList":
                return (
                    <Card>
                        <div className="cardBody" >
                            <div>
                                <img src={this.props.data.src} />
                            </div>
                            <Card.Body>
                                <Card.Title>{this.props.data.name}</Card.Title>
                                <Card.Text>
                                    {this.props.data.description}<br />
                                    {this.props.data.price}dt
                                    </Card.Text>
                                <Button onClick={() => { this.props.addItem(this.props.data) }} variant="primary">add to card</Button>
                                < Button onClick={() => {
                                this.props.addToComparateur(this.props.data)
                            }} variant="secondary">add to comparateur</Button>
                            <img src="https://image.flaticon.com/icons/svg/60/60993.svg" style={{ width: "20px" }}
                                onClick={(e) => {
                                    if(e.target.src === "https://image.flaticon.com/icons/svg/148/148836.svg"){
                                    e.target.src = "https://image.flaticon.com/icons/svg/60/60993.svg"    
                                    this.props.removeItemWishList(this.props.data);
                                    }else if(e.target.src === "https://image.flaticon.com/icons/svg/60/60993.svg"){
                                    e.target.src = "https://image.flaticon.com/icons/svg/148/148836.svg"
                                    this.props.addToWishList(this.props.data);
    
                                }
                                    
                                }} />
                            </Card.Body>
                        </div>


                    </Card>
                )
                break;
            case "shipping":
                return (
                    <div className="shippingCards" >

                        <Card>
                            <div className="shippingCard" >
                                <div>
                                    <img width="200" src={this.props.data.src} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{this.props.data.name}</Card.Title>
                                    <Card.Text style={{ display: "flex" }}>
                                        <div>
                                            {this.props.data.description}
                                        </div>


                                    </Card.Text>
                                    <span>number of items : {this.props.itemsNumber[this.props.cardIndex]}</span>
                                    <div id="Shipping_by_product_Police">
                                        <Form>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>select shipping</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Australia Post</option>
                                                    <option>Canada Post</option>
                                                    <option>DHL Express</option>
                                                    <option>DHL Global Mail</option>
                                                    <option>FedEx</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </div>


                        </Card>
                    </div>
                )
                break;
            case "wishList":
                return (
                    <Card>
                        <div className="shippingCard" >
                            <div>
                                <img width="50" src={this.props.data.src} />
                            </div>
                            <Card.Body>
                                <Card.Title>{this.props.data.name}</Card.Title>
                                <Card.Text style={{ display: "flex" }}>
                                    {this.props.data.description}
                                </Card.Text>
                                <Button onClick={() => { this.props.addItem(this.props.data) }} variant="primary">add to card</Button>
                                <Button variant="danger" onClick={() => { this.props.handleRemove(this.props.data) }} >remove</Button>
                            </Card.Body>
                        </div>
                    </Card>
                )
                break;
            case "shopping":
                return (
                    <Card>
                        <div className="shippingCard" >
                            <div>
                                <img width="200" src={this.props.data.src} />
                            </div>
                            <Card.Body>
                                <Card.Title>{this.props.data.name}</Card.Title>
                                <Card.Text style={{ display: "flex" }}>
                                    <div>
                                        {this.props.data.description}
                                    </div>
                                    <div>
                                        <Button variant="danger" onClick={() => { this.props.handleShow(this.props.cardIndex) }} >remove</Button>
                                    </div>
                                </Card.Text>
                                <Button variant="primary" onClick={() => { this.props.addSameItem(this.props.cardIndex) }}>+</Button>
                                <span>{this.props.itemsNumber[this.props.cardIndex]}</span>
                                <Button variant="primary" onClick={() => { this.props.itemsNumber[this.props.cardIndex] == 1 ? this.props.handleShow(this.props.cardIndex) : this.props.removeSameItem(this.props.cardIndex) }}>-</Button>
                            </Card.Body>
                        </div>
                    </Card>
                )
                break;
            case "shoppingPannier":
                return (
                    <Card>
                        <div className="shippingCard" >
                            <div>
                                <img width="50" src={this.props.data.src} />
                            </div>
                            <Card.Body>
                                <Card.Title>{this.props.data.name}</Card.Title>
                                <Card.Text style={{ display: "flex" }}>
                                    <div>
                                        {this.props.data.description}
                                    </div>
                                    <div>
                                        <Button variant="danger" onClick={() => { this.props.removeItem(this.props.cardIndex) }} >remove</Button>
                                    </div>
                                </Card.Text>
                                <Button variant="primary" onClick={() => { this.props.addSameItem(this.props.cardIndex) }}>+</Button>
                                <span>{this.props.itemsNumber[this.props.cardIndex]}</span>
                                <Button variant="primary" onClick={() => { this.props.itemsNumber[this.props.cardIndex] == 1 ? this.props.handleShow(this.props.cardIndex) : this.props.removeSameItem(this.props.cardIndex) }}>-</Button>
                            </Card.Body>
                        </div>
                    </Card>
                )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.ShoppingCartReducer.items,
        itemsNumber: state.ShoppingCartReducer.itemsNumber,
        total: state.ShoppingCartReducer.total,
        totalitems: state.ShoppingCartReducer.totalitems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (data) => dispatch(addItem(data)),
        addToWishList: (data) => dispatch(addToWishList(data)),
        removeItem: (index) => dispatch(removeItem(index)),
        addSameItem: (index) => dispatch(addSameItem(index)),
        removeSameItem: (index) => dispatch(removeSameItem(index)),
        addToComparateur: (data) => dispatch(addToComparateur(data)),
        removeItemWishList: (data) => dispatch(removeItemWishList(data)),
        removeItemComparateur: (index) => dispatch(removeItemComparateur(index)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailLight)