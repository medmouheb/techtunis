import {CategorieTab} from '../../testdata'
const initState ={
    CategorieTab:[...CategorieTab]
}
const MegaMenuReducers = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default MegaMenuReducers