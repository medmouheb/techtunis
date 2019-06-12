import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import './categoriesNav.css'
class CategoriesNav extends Component {
    state={
        show:null
    }
    render() {
        const handleShow=(i)=>{
            this.setState({show:i})
        }
        const handleHide=()=>{
            this.setState({show:null})
        }
        return (
            <div className="CategoriesNav">
                {this.props.data.map((element,i) => {
                    return (
                        <div className="CategoriesNavColumn" onMouseOver={()=>{handleShow(i)}} onMouseOut={handleHide}>
                            <div className="btnCategories"   onClick={()=>{handleShow(i)}} >
                            {element.name}
                            </div>
                            <div className="CategoriesLists" style={{display:this.state.show===i?"":"none"}}>
                                    {element.category.map((el) => {

                                        return (
                                            <div className="CategoriesColumn" >
                                                <h3>{el.name}</h3>
                                                {el.list.map(elem => {
                                                    return (<a href={elem.liink}>{elem.name}</a>)
                                                })}
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default CategoriesNav