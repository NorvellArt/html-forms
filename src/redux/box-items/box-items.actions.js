export const addItemInBox = (name) => ({
    type: 'ADD_ITEM_IN_BOX',
    payload: name
})

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
})

export const openEditItemConsole = (id) => ({
    type: 'OPEN_EDIT_ITEM_CONSOLE',
    payload: id
})

export const closeEditItemConsole = (id) => ({
    type: 'CLOSE_EDIT_ITEM_CONSOLE',
    payload: id
})

export const handleChangeLabel = (id, text) => ({
    type: 'HANDLE_CHANGE_LABEL',
    payload: { id, text },
})

export const handleChangeType = (id, text) => ({
    type: 'HANDLE_CHANGE_TYPE',
    payload: { id, text },
})

export const handleChangePlaceholder = (id, text) => ({
    type: 'HANDLE_CHANGE_PLACEHOLDER',
    payload: { id, text },
})

export const handleChangeNumberOfElements = (id, text) => ({
    type: 'HANDLE_CHANGE_NUMBER_OF_ELEMENTS',
    payload: { id, text },
})