import {ProductImagelist} from '../../testdata'
const initState ={
    ProductImagelist:[...ProductImagelist],
}
const ProductImagelistReducer = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default ProductImagelistReducer