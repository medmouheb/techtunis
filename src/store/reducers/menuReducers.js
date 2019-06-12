import {menu} from '../../testdata'
const initState ={
    menu:[...menu]
}
const menuReducers = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default menuReducers