const initState = {
    items: [],
    itemsNumber:[],
    total:0,
    totalitems:0
}
const ShoppingCartReducer = (state = initState, action) => {
    let tableOfItems=state.items
    let itemsNumberstable=state.itemsNumber
    let totelnumberOfItems=state.totalitems
    let totalpriceOfItems=state.total
    switch(action.type){
        case 'ADD_ITEM':
        if(state.items.indexOf(action.data)!==-1){
            return{
                ...state
            }
        }
        else{
        tableOfItems.push(action.data)
        itemsNumberstable.push(1)
        totelnumberOfItems+=1
        totalpriceOfItems+=action.data.price
        
        return{
            items: tableOfItems,
            itemsNumber:itemsNumberstable,
            total:totalpriceOfItems,
            totalitems:totelnumberOfItems
        }
        }
        
        break;
        case 'REMOVE_ITEM':
        totelnumberOfItems-=itemsNumberstable[action.index]
        totalpriceOfItems-=itemsNumberstable[action.index]*state.items[action.index].price
        tableOfItems=tableOfItems.filter((el,i)=>{return(i!==action.index)})
        itemsNumberstable=itemsNumberstable.filter((el,i)=>{return(i!==action.index)})
        return{
            items: tableOfItems,
            itemsNumber:itemsNumberstable,
            total:totalpriceOfItems,
            totalitems:totelnumberOfItems
        }
        
        break;
        case 'ADD_SAME_ITEM':
        itemsNumberstable[action.index]+=1
        totelnumberOfItems+=1
        totalpriceOfItems+=state.items[action.index].price
        return{
            ...state,
            itemsNumber:itemsNumberstable,
            total:totalpriceOfItems,
            totalitems:totelnumberOfItems
        }
        break;
        case 'REMOVE _SAME_ITEM':
        console.log('hey')
        totelnumberOfItems-=itemsNumberstable[action.index]?1:0
        totalpriceOfItems-=itemsNumberstable[action.index]?state.items[action.index].price:0
        itemsNumberstable[action.index]-=itemsNumberstable[action.index]?1:0

        return{
            ...state,
            itemsNumber:itemsNumberstable,
            total:totalpriceOfItems,
            totalitems:totelnumberOfItems
        }
        break;
        default:
        return {
          ...state,  
        }
      }
}
export default ShoppingCartReducer