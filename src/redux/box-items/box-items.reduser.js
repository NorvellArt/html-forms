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
                            label: '',
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
            const newArray = produce(state.boxItemsList, draftState =>{
                draftState[index].sidebarIsHidden = !state.boxItemsList[index].sidebarIsHidden
            })
            return {
                ...state,
                boxItemsList: newArray,
            }
        case 'CLOSE_EDIT_ITEM_CONSOLE':
            const index1 = state.boxItemsList.findIndex(item => item.id === action.payload);
            const newArray1 = produce(state.boxItemsList, draftState =>{
                draftState[index1].sidebarIsHidden = !state.boxItemsList[index1].sidebarIsHidden
            })
            return {
                ...state,
                boxItemsList: newArray1,
            }
        case 'HANDLE_CHANGE_LABEL':
            const index2 = state.boxItemsList.findIndex(item => item.id === action.payload.id);
            const newArray2 = produce(state.boxItemsList, draftState =>{
                draftState[index2].label = action.payload.text
            })
            return {
                ...state,
                boxItemsList: newArray2,
            }
        default:
            return state
    }
}

export default boxItemsReduser;