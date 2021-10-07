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