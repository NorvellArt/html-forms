const INITIAL_STATE = {
    sidebarConsole: {
        isHidden: true,
        name: '',
        id: ''
    }
}

const sidebarConsoleReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'OPEN_SIDEBAR_CONSOLE':
            return {
                ...state,
                sidebarConsole: {
                    isHidden: !state.sidebarConsole,
                    name: action.name,
                    id:action.id
                }
            }
        case 'CLOSE_SIDEBAR_CONSOLE':
            return{
                ...state,
                sidebarConsole: {
                    isHidden: !!state.sidebarConsole
                }
            }
        default:
            return state
    }
}

export default sidebarConsoleReduser;