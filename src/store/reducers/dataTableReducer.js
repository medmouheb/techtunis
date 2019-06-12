import {testTableData, testTableDataColumn} from '../../testdata.js'

const initState = {
    data: [...testTableData],
    column: [...testTableDataColumn]
}
const DataTableReducer = (state = initState, action) => {

    switch (action.type) {
        case 'MODIFIE_COLUM':
            let newData = action.newData
            let tab = state.data
            tab[action.index] = newData
            return {
                ...state,
                data: [...tab]
            }
            break;
        case 'DELETE_COLUM':
            let index = action.index
            let table = state.data
            table.splice(index, 1)
            return {
                ...state,
                data: [...table]
            }
            break;
        case 'ADD_COLUMN':
            let tabl = state.data
            tabl.push(action.newdata)
            return {
                ...state,
                data: [...tabl]
            }
            break;
        default:
            return {
                ...state,
            }
    }
}
export default DataTableReducer