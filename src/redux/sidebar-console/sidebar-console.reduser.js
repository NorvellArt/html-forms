const INITIAL_STATE = {
    sidebarConsole: {
        isHidden: true,
        name: ''
    }
}

const sidebarConsoleReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'OPEN_SIDEBAR_CONSOLE':
            return {
                ...state,
                sidebarConsole: {
                    isHidden: !state.sidebarConsole,
                    name: action.payload
                }
            }
        default:
            return state
    }
}

export default sidebarConsoleReduser;