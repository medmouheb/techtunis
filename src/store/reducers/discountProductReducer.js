import {discountProduct} from '../../testdata'
const initState ={
  discountProduct:[...discountProduct],
}
const discountProductReducer = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default discountProductReducer