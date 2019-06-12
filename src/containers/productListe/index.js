import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Container,Row} from 'react-bootstrap';
import ProductListViewer from './productListViewer/productListViewer'
import NavBar from '../common/navbar/navbar'
import Footer from '../common/footer/footer'
import CategoriesNav from '../common/cleanNav/categoriesNav'
import FixedDownBar from '../common/fixed down bar/fixedDownBar'
import CarousalProduct from '../homePage/Carousel/CarausalProduct'
class ProductListe extends Component {
    render() {
        const {discountProduct,CategorieTab,menu,footer} = this.props
        return(
            <Container>
                <NavBar data={menu}/>
                <CategoriesNav data={CategorieTab}/>
                <Row>
                    <ProductListViewer/>
                    <FixedDownBar/>
                </Row>
                <CarousalProduct data={discountProduct} />

                <Footer data={footer}/>
            </Container>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        discountProduct: state.discountProductReducer.discountProduct,
        menu: state.menuReducers.menu,
        footer: state.FooterReducer.footer,
        CategorieTab:state.MegaMenuReducers.CategorieTab
    }
}
export default connect(mapStateToProps)(ProductListe)