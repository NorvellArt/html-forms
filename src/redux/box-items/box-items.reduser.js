import shortid from 'shortid'
import produce from 'immer'

const INITIAL_STATE = {
    boxItemsList: []
};

const boxItemsReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM_IN_BOX':
            switch (action.payload) {
                case 'Text Input':
                    return {
                        ...state,
                        boxItemsList: [...state.boxItemsList, {
                            id: shortid.generate(),
                            name: action.payload,
                            isRequired: false,
                            label: '',
                            type: '',
                            placeholder: '',
                            sidebarIsHidden: true,
                        }]
                    }
                case 'List':
                    return {
                        ...state,
                        boxItemsList: [...state.boxItemsList, {
                            id: shortid.generate(),
                            name: action.payload,
                            isRequired: false,
                            label: '',
                            isOrdered: 'true',
                            numberOfElements: null,
                            sidebarIsHidden: true,
                        }]
                    }
                case 'Checkbox':
                    return {
                        ...state,
                        boxItemsList: [...state.boxItemsList, {
                            id: shortid.generate(),
                            name: action.payload,
                            isRequired: false,
                            label: '',
                            sidebarIsHidden: true,
                        }]
                    }
                case 'Submit Button':
                    return {
                        ...state,
                        boxItemsList: [...state.boxItemsList, {
                            id: shortid.generate(),
                            name: action.payload,
                            value: '',
                            sidebarIsHidden: true,
                        }]
                    }
                default:
                    return {
                        state
                    }
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                boxItemsList: state.boxItemsList.filter(boxItem => boxItem.id !== action.payload)
            }
        case 'OPEN_EDIT_ITEM_CONSOLE':
            const index = state.boxItemsList.findIndex(item => item.id === action.payload);
            /* const newArray = [...state.boxItemsList];
            newArray[index].sidebarIsHidden = !state.boxItemsList[index].sidebarIsHidden */
            console.log(index)
            const newArray = produce(state.boxItemsList, draftState =>{
                draftState[index].sidebarIsHidden = !state.boxItemsList[index].sidebarIsHidden
            })
            console.log(newArray)
            return {
                ...state,
                boxItemsList: newArray,
            }
        default:
            return state
    }
}

export default boxItemsReduser;