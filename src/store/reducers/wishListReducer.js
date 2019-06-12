const initState={
    products:[],
    wishListItemsNumber:0
}
const WishListReducer = (state = initState, action) => {
    if(action.type==="ADD_TO_WISHLIST" && state.products.indexOf(action.product)==-1){
        let tab=state.products
        tab.push(action.product)
        return({products:tab,wishListItemsNumber:tab.length})
    }
    else if (action.type === "REMOVE_ITEM_WISHLIST") {
        let table = state.products.filter((el,i) => { return (el !== action.data) })
        console.log('product : ',action.data)
        return {
            products: table,
            wishListItemsNumber: table.length
        }
    }
    else{
        return{...state}
    }
}
export default WishListReducer