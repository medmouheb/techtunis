const initState ={
    isConnected: false

}
const currentUserReducer = (state = initState, action) => {
switch(action.type){
  case 'LOGIN_USER':
  let user=action.user
    return {
        isConnected:true,  
        ...user
      }
  break;
  default:
  return {
    ...state,  
  }
}

}
export default currentUserReducer