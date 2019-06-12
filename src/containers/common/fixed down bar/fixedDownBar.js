import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Badge } from "react-bootstrap"
import ShoppingCart from "../../tunnel/shopping cart/shoppingCart"
import './fixedDownBar.css'
import ListCard from '../../productListe/productListViewer/grid/cards/listCard'
import DetailLight from '../../common/detailLight/index'
import {removeItemWishList} from '../../../store/actions/wishList'
import {removeItemComparateur} from '../../../store/actions/comparateur'

class FixedDownBar extends Component {
    state = {
        show: ""
    }
    render() {
        const { products,items,Comparateurproducts } = this.props
        return (
            <div className="FixedDownBar"  >
                <div className="FixedDownBarProductswishListe"  style={{ position: "relatif", display: this.state.show === "wishListe" ? "" : "none" }}>
                    <Badge  style={{position:"absolute",top:"0px",right:"0px",zIndex:"2"}} 
                            variant="danger" onClick={() => { this.setState({ show: "" }) }}>
                            X
                    </Badge>
                    {products.map((el,i) => {
                        return (
                            <DetailLight cardIndex={i} handleRemove={this.props.removeItemWishList} data={el} cardType="wishList" />
                        )
                    })}
                </div>
                <div className="FixedDownBarProductspanier"  style={{ position: "relatif", display: this.state.show === "panier" ? "" : "none" }}>
                    <Badge style={{position:"absolute",top:"0",right:"0",zIndex:"2"}} variant="danger" onClick={() => { this.setState({ show: "" }) }}>X</Badge>
                    {items.map((el,i) => {
                        return (
                            <DetailLight   data={el} cardIndex={i} cardType = "shoppingPannier" />
                        )
                    })}
                </div>
                <div className="FixedDownBarProductsComparateur"  style={{ position: "relatif", display: this.state.show === "comparateur" ? "" : "none" }}>
                    <Badge style={{position:"absolute",top:"0",right:"0",zIndex:"2"}} variant="danger" onClick={() => { this.setState({ show: "" }) }}>X</Badge>
                    {Comparateurproducts.map((el,i) => {
                        return (
                            <DetailLight handleRemove={this.props.removeItemComparateur}  data={el} cardIndex={i} cardType = "wishList" />
                        )
                    })}
                </div>
                <div className="FixedDownBarButtons" >
                    <div style={{ position: "relative" }} onClick={() => { this.setState({ show: this.state.show === "Derniers" ? "" : "Derniers" }) }}>
                        <h3>
                            Derniers produits vus
                            <Badge variant="danger">{0}</Badge>
                        </h3>
                    </div>
                    <div style={{ position: "relative" }}
                         onClick={() => { this.setState({ show: this.state.show === "wishListe" ? "" : "wishListe" }) }}>
                        <h3>
                            Ma liste d'envies
                            <Badge variant="danger">{this.props.wishListItemsNumber}</Badge>
                        </h3>
                    </div>
                    <div style={{ position: "relative" }} onClick={() => { this.setState({ show: this.state.show === "comparateur" ? "" : "comparateur" }) }}>
                        <h3>
                            comparateur
                            <Badge variant="danger">{this.props.comparateurItemsNumber}</Badge>
                        </h3>
                    </div>
                    <div style={{ position: "relative" }} onClick={() => { this.setState({ show: this.state.show === "panier" ? "" : "panier" }) }}>
                        <h3>
                            panier
                            <Badge variant="danger">{this.props.totalitems}</Badge>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.WishListReducer.products,
        wishListItemsNumber: state.WishListReducer.wishListItemsNumber,
        totalitems: state.ShoppingCartReducer.totalitems,
        items: state.ShoppingCartReducer.items,
        Comparateurproducts: state.ComparateurReducer.Comparateurproducts,
        comparateurItemsNumber: state.ComparateurReducer.comparateurItemsNumber,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItemWishList: (index) => dispatch(removeItemWishList(index)),
        removeItemComparateur: (index) => dispatch(removeItemComparateur(index)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FixedDownBar)