import React,{Component} from 'react';

import {Form,Button} from 'react-bootstrap';



class GenericForme extends Component{
    state={
        table:this.props.data,
    }
    render() {
        const handleModalChange=(index,value)=>{

            let tab=this.state.table
            tab[index].value=value
            this.setState({table:tab})
        }
        const handlesubmit=()=>{
            let result=this.state.table.map(el=>{
                if(el.type==="checkbox"){
                    return{name:el.label,value:[...el.list.filter(elemen=>{return(elemen.checked)})].map(elemen=>{return(elemen.label)})}
                }
                else{
                    return{name:el.label,value:el.value}
                }
            })
            this.props.modifiefunction(result)
            console.log(result)
        }
        return (

            <Form>
                {this.state.table.map((element,index) => {
                    switch (element.type) {
                        case "input":
                            return (
                                <Form.Group >
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        type={element.inputType}
                                        name={element.name || ""}
                                        size={element.size || ""}
                                        readOnly={element.readOnly || false}
                                        maxLength={element.maxlength || ""}
                                        required={element.required || ""}
                                        pattern={element.pattern || ""}
                                        min={element.min || ""}
                                        max={element.max || ""}
                                        step={element.step || ""}
                                        placeholder={element.placeholder || ""}
                                        onChange={(e)=>{handleModalChange(index,e.target.value)}}
                                        value={element.value}
                                    />
                                </Form.Group>
                            )
                            break;
                            case "img":
                            return (
                                <Form.Group >
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        type={element.inputType}
                                        name={element.name || ""}
                                        readOnly={element.readOnly || false}
                                        maxLength={element.maxlength || ""}
                                        required={element.required || ""}
                                        onChange={(e)=>{handleModalChange(index,e.target.value)}}
                                        value={element.value}
                                    />
                                </Form.Group>
                            )
                            break;
                        case "select":
                            return (
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name={element.name || ""}
                                        size={element.size || 5}
                                        onChange={(e)=>{handleModalChange(index,e.target.options[e.target.selectedIndex].value)}}
                                    >
                                         <option >chose from list</option>
                                        {element.options.map((el, i) => { return <option selected={i === element.selected}>{el}</option> })}
                                    </Form.Control>
                                </Form.Group>
                            )
                            break;
                        case "textarea":
                            return (
                                <Form.Group >
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name={element.name || ""}
                                        maxLength={element.maxlength || ""}
                                        required={element.required || ""}
                                        placeholder={element.placeholder || ""}
                                        onChange={(e)=>{handleModalChange(index,e.target.value)}}
                                        value={element.value}

                                        
                                    />
                                </Form.Group>
                            )
                            break;
                        case "checkbox":
                            return (
                                <Form.Group >
                                    <Form.Label>{element.label}</Form.Label><br />
                                    {element.list.map((el,i) => {
                                        return (
                                            <Form.Check
                                                type="checkbox"
                                                inline
                                                disabled={el.disabled}
                                                checked={el.checked }
                                                label={el.label}
                                                onClick={()=>{let ted= this.state.table;ted[index].list[i].checked=!el.checked;this.setState({table:ted})}}
                                            />
                                        )
                                    })}
                                </Form.Group>
                            )
                    }
                })}
                <Button onClick={handlesubmit}> submit</Button>
            </Form>


        )

    }

}
export default GenericForme