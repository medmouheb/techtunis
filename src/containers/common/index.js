import React,{Component} from 'react'
import { connect } from 'react-redux'
import NavBar from './navbar/navbar'
import Footer from './footer/footer'
import CategoriesNav from './cleanNav/categoriesNav'
class Common extends Component{
    render(){
        const {CategorieTab,menu,footer} = this.props
        return(
            <div className="Common">
                <NavBar data={menu}/>
                <CategoriesNav data={CategorieTab}/>
                {this.props.wrappedComponent}
                <Footer data={footer}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        menu: state.menuReducers.menu,
        footer: state.FooterReducer.footer,
        CategorieTab:state.MegaMenuReducers.CategorieTab
    }
  }
export default connect(mapStateToProps)(Common)
