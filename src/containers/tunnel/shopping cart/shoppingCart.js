import React, { Component } from 'react'
import { Modal, Button, Card, Badge } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link} from "react-router-dom";
import ListCard from '../../productListe/productListViewer/grid/cards/listCard'
import { removeItem, addSameItem, removeSameItem } from '../../../store/actions/shoppingCart'
import './shoppingCart.css'
import DetailLight from '../../common/detailLight'
class ShoppingCart extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            deleteindex: null
        };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow(i) {
        this.setState({ deleteindex: i })
        this.setState({ show: true });
    }

    render() {
        const removeModale = (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => { this.props.removeItem(this.state.deleteindex); this.setState({ deleteindex: null }); this.handleClose() }}>
                        remove
                     </Button>
                </Modal.Body>

            </Modal>
        )
        return (
            <div>
                <div className="shoppingCarts">
                    {removeModale}
                    <div >
                        {this.props.items.map((el, i) => {
                            return (
                                <DetailLight handleShow={this.handleShow}  data={el} cardIndex={i} cardType = "shopping" />
                            )
                        })}
                    </div>
                    <div className="shoppingIcons" >
                        <div class="cart">
                            <h1>Cart items<i class="	fa fa-shopping-cart"  ><Badge variant="light">{this.props.totalitems}</Badge></i><br /></h1>
                            <h1>Total price: <strong id="totalPrice"><i class="	fas fa-money-check-alt"  ><Badge variant="light">{this.props.total}</Badge></i></strong></h1>
                            <div >
                                <Button>Clear the cart</Button>
                                <Link to="/tunnel/Identification"> <Button onClick={() => { this.props.changeSate("Identification") }}>  Identification</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.ShoppingCartReducer.items,
        total: state.ShoppingCartReducer.total,
        itemsNumber: state.ShoppingCartReducer.itemsNumber,
        totalitems: state.ShoppingCartReducer.totalitems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (index) => dispatch(removeItem(index)),
        addSameItem: (index) => dispatch(addSameItem(index)),
        removeSameItem: (index) => dispatch(removeSameItem(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)