export  const addItem = (data) => {
    return {
      type: 'ADD_ITEM',
      data
    }
  }
export  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
export  const addSameItem = (index) => {
    return {
      type: 'ADD_SAME_ITEM',
      index
    }
  }
export  const removeSameItem = (index) => {
    return {
      type: 'REMOVE _SAME_ITEM',
      index
    }
  }