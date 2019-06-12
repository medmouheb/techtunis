const modifieColum = (newData,index) => {
    return {
        type: 'MODIFIE_COLUM',
        newData,
        index
    }
}
const deleteColum  = (index) => {
    return {
        type: 'DELETE_COLUM',
        index
    }
}
const addColumn=(newdata)=>{
    return{
        type:"ADD_COLUMN",
        newdata
    }
}
export {modifieColum,deleteColum,addColumn}