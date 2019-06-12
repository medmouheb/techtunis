import React,{Component} from 'react'
import GoodZoom from './goodzoom/GoodZoom'
import Sidebar from './sidebar/sidebar'
import { connect } from 'react-redux'
import NavBar from '../common/navbar/navbar'
import Footer from '../common/footer/footer'
import CategoriesNav from '../common/cleanNav/categoriesNav'
import FixedDownBar from '../common/fixed down bar/fixedDownBar'

class Productdetail extends Component{
    render(){
        const { sidemenu,ProductImagelist,CategorieTab,menu,footer} = this.props

        return(
            <div  >
                <NavBar data={menu}/>
                <CategoriesNav data={CategorieTab}/>
                <Sidebar data={sidemenu}/>
                <GoodZoom data={ProductImagelist}/>
                <Footer data={footer}/>
                <FixedDownBar/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      sidemenu:state.sidemenuReducer.sidemenu,
      ProductImagelist:state.ProductImagelistReducer.ProductImagelist,
      menu: state.menuReducers.menu,
        footer: state.FooterReducer.footer,
        CategorieTab:state.MegaMenuReducers.CategorieTab
    }
  } 
  export default connect(mapStateToProps)(Productdetail);