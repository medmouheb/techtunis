export const addToComparateur = (product) => {
    return {
        type: 'ADD_TO_COMPARATEUR',
        product
    }
}
export const removeItemComparateur = (index) => {
    return {
        type: 'REMOVE_ITEM_COMPARATEUR',
        index
    }
}