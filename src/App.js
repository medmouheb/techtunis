import React, { Component } from 'react';
import './App.css';

import {Route,BrowserRouter,Switch} from "react-router-dom";
import {Container} from 'react-bootstrap';

import Homepage from  './containers/homePage'
import Common from './containers/common'
import Tunnel from './containers/tunnel'
import Productdetail from './containers/productDetailsPage'
import ProductListe from './containers/productListe'
import DataTable from './containers/dataTable'

class App extends Component {

  render() {

return(
  <BrowserRouter>
    <Container>
  <Switch>
      
      <Route path="/Homepage" exact component={Homepage}/>
      <Route path="/DataTable" exact component={DataTable}/>
      <Route path="/productListe" exact component={ProductListe}/>
      <Route path="/Productdetail" exact component={Productdetail}/>
      <Route path="/tunnel" exact component={Tunnel}/>
      <Route path="/"   component={Homepage}/>
      </Switch>

    </Container>
  </BrowserRouter>
)
    
  }
}


export default App;
