import {sidemenu} from '../../testdata'
const initState ={
    sidemenu:[...sidemenu]
}
const sidemenuReducer = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default sidemenuReducer