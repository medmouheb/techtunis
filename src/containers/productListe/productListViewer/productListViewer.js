import React, { Component } from 'react'
import SimpleProduct from './grid/SimpleProduct'
import ListOfProducts from './grid/listProduct'
import { Container, Row, Col, Form, Pagination, ButtonGroup, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import Filter from '../filter/filter'
import './productListViewer.css'
class ProductListViewer extends Component {
    state = {
        currentPage: 1,
        itemNumber: 4,
        triMethod: "",
        display: "grid",
        pages: [],
        sort: ""
    }
    componentWillMount() {
        let tab = []
        for (let i = 0; i < Math.ceil(this.props.products.length / this.state.itemNumber); i++) {
            tab.push(i + 1)
        }
        this.setState({ pages: tab })
    }

    render() {
        const { products } = this.props
        const SortingArray = () => {
            switch (this.state.sort) {
                case "De A à Z":
                    return (products.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
                    break;
                case "De Z à A":
                    return (products.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0)))
                    break;
                case "Le moins cher":
                    return (products.sort((a, b) => a.price - b.price))
                    break;
                case "Le plus cher":
                    return (products.sort((a, b) => b.price - a.price))
                    break;
            }
            return products
        }
        const sortedProducts = SortingArray()
        const currentProducts = sortedProducts.filter((el, i) => {
            return (i < this.state.currentPage * this.state.itemNumber && i > this.state.currentPage * this.state.itemNumber - this.state.itemNumber - 1)
        })
        const handlePage = (i) => {
            this.setState({ currentPage: i + 1 })
        }
        const handleItems = (event) => {
            this.setState({ itemNumber: event.target.options[event.target.selectedIndex].value })
            let tab = []
            for (let i = 0; i < Math.ceil(this.props.products.length / event.target.options[event.target.selectedIndex].value); i++) {
                tab.push(i + 1)
            }
            this.setState({ pages: tab })
        }

        return (
            <Container>
                
                <Row>
                    
                    <Col >
                        {window.screen.width >= 1000 ? <Col sm><Filter /></Col> : ""}
                    </Col>

                    <Col sm={9}>
                    <Row className="ProductListViewer" >
                    <Form>
                        <div  style={{display:"flex",alignItems:"baseline"}}>
                        <Form.Label >nomber of items</Form.Label>
                        <Form.Control style={{width:"auto"}} onChange={(event) => { handleItems(event) }} as="select">
                            <option>4</option>
                            <option >8</option>
                            <option >12</option>
                            <option >16</option>
                            <option >20</option>
                        </Form.Control>
                        </div>
                    </Form>
                    <Pagination>
                        {this.state.pages.map((el, i) => {
                            return (
                                <Pagination.Item onClick={() => { handlePage(i) }} active={this.state.currentPage === i + 1 ? true : false}  >{el}</Pagination.Item>
                            )
                        })}
                    </Pagination>
                    <ButtonGroup  aria-label="First group">
                        <Button onClick={() => { this.setState({ display: 'grid' }) }} variant="secondary">GRID</Button>
                        <Button onClick={() => { this.setState({ display: 'list' }) }} variant="secondary">LIST</Button>
                    </ButtonGroup>
                    <Form>
                        <div style={{display:"flex",alignItems:"baseline"}} >
                            <Form.Label style={{marginRight:"20px"}} >sort</Form.Label>
                            <Form.Control style={{width:"auto"}} onChange={(event) => { this.setState({ sort: event.target.options[event.target.selectedIndex].value }) }} as="select">
                                <option>--</option>
                                <option>Le moins cher</option>
                                <option>Le plus cher</option>
                                <option>De A à Z</option>
                                <option>De Z à A</option>
                            </Form.Control>
                        </div>
                    </Form>
                </Row>
                        {window.screen.width <= 1000 ? <Col sm><Filter /></Col> : ""}
                        {this.state.display === 'grid' ? <SimpleProduct data={currentProducts} /> : <ListOfProducts data={currentProducts} />}
                    </Col>
                </Row>

            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
    }
}
export default connect(mapStateToProps)(ProductListViewer)
