import React, { Component } from 'react';

import './sidebar.css';



class Sidebar extends Component{
    state={
        menuWidth:"0px",
        parent:0,
        child:0,
        grandchild:0
    }
    render(){

        const handleOpen=()=>{
            this.setState({menuWidth:"250px"})
        }
        const handleClose=()=>{
            this.setState({menuWidth:"0px"})
        }

        const showMenu=()=>{
            if (this.state.parent===0){
                return this.props.data.map((element,index)=>{
                  return element.chiledrens.length ? <a href="#" onClick={()=>{this.setState({parent:1,child:index})}}>{element.name}</a>: <a href="#">{element.name}</a> 
                })
            }
            else if(this.state.parent===1){
                return this.props.data[this.state.child].chiledrens.map((element,index)=>{
                    return element.chiledrens.length ? <a href="#" onClick={()=>{this.setState({parent:2,grandchild:index})}}>{element.name}</a>: <a href="#">{element.name}</a> 
                })
            }
            else{
                return this.props.data[this.state.child].chiledrens[this.state.grandchild].chiledrens.map(element=>{
                    return <a href="#">{element.name}</a>
                })
            }
        }
        const hnndleBack=()=>{
            let t=this.state.parent
            if(this.state.parent!==0){
                this.setState({parent:t-1})
            }
        }
        return(
            <div >
                <div style={{width:this.state.menuWidth}} id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onClick={handleClose}>&times;</a>
                    <br/>
                    <button onClick={hnndleBack}>back</button>
                    {showMenu()}

                </div>
                    <h2>Animated Sidenav Example</h2>
                    <p>Click on the element below to open the side navigation menu.</p>
                    <span className="openSpan"  onClick={handleOpen}>&#9776; open</span>
            </div>

            

        )
    }
}

export default Sidebar