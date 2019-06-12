export const addToWishList = (product) => {
  return {
    type: 'ADD_TO_WISHLIST',
    product
  }
}
export const removeItemWishList = (data) => {
  return {
    type: 'REMOVE_ITEM_WISHLIST',
    data
  }
}