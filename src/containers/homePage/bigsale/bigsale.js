import React, { Component } from 'react'
import './bigsale.css'
import { Container, Row, Col } from 'react-bootstrap';

class BigSale extends Component {
    render() {
        return (
            <Container>
                {this.props.data.map(element => {
                    return (
                        <Row>
                            {element.map(el => {
                                return (
                                    <Col xs={12 / element.length}>
                                        <a href={el.link}>
                                            <img className="bigSaleImg" src={el.src} />
                                        </a>
                                    </Col>
                                )
                            })}
                        </Row>
                    )
                })}
            </Container>
        )
    }
}
export default BigSale