import React, { Component } from 'react';
import "./footer.css"
class Footer extends Component {
    render() {
      return (
        <footer  class="page-footer font-small unique-color-dark">
          <br/>
          <br/>

        <div className="footerHeader" >
          <div class="container">
    
            <div class="row py-4 d-flex align-items-center">
    
              <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 class="mb-0">Get connected with us on social networks!</h6>
              </div>
    
              <div class="col-md-6 col-lg-7 text-center text-md-right">
                {this.props.data.map(el=>{
                    if(el.type==="socialMedia")
                    {
                        return el.list.map(element=>{
                            return(
                                <a href={element.link}>
                                <i class={element.iconClass}> </i>
                              </a> 
                            )
                        })
                    }
                })}

              </div>
    
            </div>
    
          </div>
        </div>
    
        <div class="container text-center text-md-left mt-5">
    
          <div class="row mt-3">
          {this.props.data.map(el=>{
                    if(el.type==="paragraf"){
                        return(
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase font-weight-bold">{el.name}</h6>
                                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto footerHr" />
                                <p>{el.content}</p>
                            </div>
                        )
                    }
                    else if(el.type==="listOfLinks"){
                        return(
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase font-weight-bold">{el.name}</h6>
                                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto footerHr"/>
                                {el.list.map(element=>{
                                    return(
                                        <p>
                                            <a href={element.link}>{element.name}</a>
                                        </p>
                                    )
                                })}
                            </div>
                        )
                    }
                    else if(el.type==="listOfIcons"){
                        return(
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase font-weight-bold">{el.name}</h6>
                                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto footerHr"/>
                                {el.list.map(element=>{
                                    return(
                                        <p><i class={element.iconClass}></i>{element.name}</p>
                                    )
                                })}
                            </div>
                        )
                    }
                })}
          </div>
    
        </div>
    
        <div class="footer-copyright text-center py-3">© 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
        </div>
    
      </footer>
      
      )
    }
}
export default Footer

