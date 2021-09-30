import shortid from 'shortid'

const INITIAL_STATE = {
    boxItemsList: []
};

const boxItemsReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM_IN_BOX':
            return {
                ...state,
                boxItemsList: [...state.boxItemsList, { id: shortid.generate(), name: action.payload }]
            }
        case 'REMOVE_ITEM':
            return{
                ...state,
                boxItemsList: state.boxItemsList.filter(boxItem => boxItem.id !== action.payload)
            }
        default:
            return state
    }
}

export default boxItemsReduser;