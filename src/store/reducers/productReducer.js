import {products} from '../../testdata'
const initState ={
    products:[...products]
}
const productReducer = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default productReducer