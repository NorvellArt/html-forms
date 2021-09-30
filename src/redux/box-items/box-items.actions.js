export const addItemInBox = (name) => ({
    type: 'ADD_ITEM_IN_BOX',
    payload: name
})

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
})