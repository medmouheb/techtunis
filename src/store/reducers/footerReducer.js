import {footer} from '../../testdata'
const initState ={
    footer:[...footer],
}
const footerReducer = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default footerReducer