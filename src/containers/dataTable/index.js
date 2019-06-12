import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteColum, modifieColum,addColumn } from '../../store/actions/dataTable'
import { Form,  Modal } from 'react-bootstrap';
import GenericForme from './genericForm/genericform'
import NavBar from '../common/navbar/navbar'
import Footer from '../common/footer/footer'
import CategoriesNav from '../common/cleanNav/categoriesNav'
import './dataTable.css'
class DataTable extends Component {
    state = {
        selectedLigne: null,
        modifieLigne: null,
        searchResult: "",
        searchColumn: 0,
        filteredTable: [],
        showmodale: false,
        showAdd:false,
        modalTable:[]
    }
    render() {
        const { data, column,CategorieTab,menu,footer } = this.props
        const handleSelect = (i) => {
            this.setState({ selectedLigne: i })
        }
        const actualSelect=(el)=>{
            this.setState({ modifieLigne: data.indexOf(el) })
        }
        const handleSearchSelect = (event) => {
            this.setState({ searchColumn: event.target.options[event.target.selectedIndex].value })
        }

        const showResultLignes = () => {
            let tab = data.filter((el) => {return (el[this.state.searchColumn].includes(this.state.searchResult))})
            this.setState({ filteredTable: tab })
        }
        const handleSearch = (event) => {
            this.setState({ searchResult: event.target.value })
            setTimeout(showResultLignes, 300)
        }
        const handleClose = () => {
            this.setState({ showmodale: false });
        }
        const handleCloseAdd = () => {
            this.setState({ showAdd: false });
        }

        const handleShow = () => {
            this.setState({ showmodale: true });
        }
        const handleShowAdd = () => {
            this.setState({ showAdd: true });
        }
        const handleModalChange=(index,value)=>{
            let tab=this.state.modalTable
            tab[index]=value
            this.setState({modalTable:tab})
        }
        const handleModifie=(newdata)=>{
            this.props.modifieColum(newdata.map(el=>{return(el.value)}),this.state.modifieLigne)
            handleClose()
        }
        const handleAdd=(newdata)=>{
            this.props.addColumn(newdata.map(el=>{return(el.value)}))
            handleCloseAdd()
        }
        return (
            <div>
                <NavBar data={menu}/>
                <CategoriesNav data={CategorieTab}/>

                <Modal  show={this.state.showmodale} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modifie Ligne</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modaleBody" >
                    <GenericForme modifiefunction={handleModifie}  data={column.map((el,i)=>{return{...el,value:data[this.state.modifieLigne||0][i]}})}  />

                    </Modal.Body>

                </Modal>
                <Modal  show={this.state.showAdd} onHide={handleCloseAdd}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modifie Ligne</Modal.Title>
                    </Modal.Header>
                    <Modal.Body  id="modaleBody" >
                    <GenericForme  data={column} modifiefunction={handleAdd} />

                    </Modal.Body>

                </Modal>
                
                <div>
                    <Form>
                        <Form.Row>
                            <span>
                                <Form.Label>serach bar : </Form.Label>
                            </span>
                            <span>
                                <Form.Control onChange={(event) => { handleSearch(event); }} />
                            </span>
                            <span>
                                <Form.Label>select witch colum : </Form.Label>
                            </span>
                            <span>
                                <Form.Control as="select" onChange={(event) => { handleSearchSelect(event) }}>
                                    {
                                        column.map((el, i) => {
                                            return (<option value={i}>{el.label}</option>)
                                        })
                                    }
                                </Form.Control>
                            </span>
                        </Form.Row>
                    </Form>
                </div>
                <table width="100%" className="table table-striped table-bordered" id="example" cellSpacing={0}>
                    <thead>
                        <tr>
                            {column.map((el) => {
                                return (<th>{el.label}</th>)
                            })}
                            <th >Add row <button onClick={handleShowAdd} className="btn btn-success btn-xs dt-add" type="button" data-func="dt-add">+
                            </button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter((el) => {return (el[this.state.searchColumn].toLowerCase().includes(this.state.searchResult.toLowerCase()))}).map((el, i) => {
                            return (
                                <tr style={{ backgroundColor: this.state.selectedLigne === i ? "gray" : "" }} onClick={() => { handleSelect(i);actualSelect(el) }}>
                                    {el.map((el0, i) => {
                                        if(column[i].type==="img"){return(<td><img style={{height:"40px",width:"40px"}} src={el0}/></td>)}
                                        else if(column[i].inputType==="url"){return(<td><a href={el0}>{el0}</a></td>)}
                                        return (<td>{el0}</td>)
                                    })}
                                    <td>
                                        <span>
                                            <button id="addRowButton" onClick={handleShow} className="btn btn-primary btn-xs dt-edit"  type="button">
                                                <span>&#9998;</span>
                                            </button>
                                        </span>
                                        <span>
                                            <button onClick={() => { this.props.deleteColum(data.indexOf(el)) }} className="btn btn-danger btn-xs dt-delete" type="button">
                                                <span>&times;</span>
                                            </button>
                                        </span>


                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
                {/* Modal */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                            <div className="modal-header">
                                <button className="close" type="button" data-dismiss="modal">×</button>
                                <h4 className="modal-title">Row information</h4>
                            </div>
                            <div className="modal-body">
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-default" type="button" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer data={footer}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.DataTableReducer.data,
        column: state.DataTableReducer.column,
        menu: state.menuReducers.menu,
        footer: state.FooterReducer.footer,
        CategorieTab:state.MegaMenuReducers.CategorieTab
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteColum: (index) => dispatch(deleteColum(index)),
        modifieColum: (newData,index) => dispatch(modifieColum(newData,index)),
        addColumn:(newdata)=>dispatch(addColumn(newdata))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
