const initState = {
    Comparateurproducts: [],
    comparateurItemsNumber: 0
}
const ComparateurReducer = (state = initState, action) => {
    if (action.type === "ADD_TO_COMPARATEUR" && state.Comparateurproducts.indexOf(action.product) == -1) {
        let tab = state.Comparateurproducts
        tab.push(action.product)
        return ({ Comparateurproducts: tab, comparateurItemsNumber: tab.length })
    }
    else if (action.type === "REMOVE_ITEM_COMPARATEUR") {
        let table = state.Comparateurproducts.filter((el,i) => { return (i !== action.index) })
        return {
            Comparateurproducts: table,
            comparateurItemsNumber: state.comparateurItemsNumber - 1
        }
    }
    else {
        return { ...state }
    }
}
export default ComparateurReducer