import {BigSaleSRC} from '../../testdata'
const initState ={
    BigSaleSRC:[...BigSaleSRC],
}
const BigSaleSRCReducer = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default BigSaleSRCReducer