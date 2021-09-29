const INITIAL_STATE = {
    listItems: [
        { id: 1, name: "Text Input" },
        { id: 2, name: "List" },
        { id: 3, name: "Checkbox" },
        { id: 4, name: "Submit Button" },
    ]
}



const itemsReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default itemsReduser;