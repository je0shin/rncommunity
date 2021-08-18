const initialState = {
    chats: []
}

export const chats = ( state = initialState, action) => {
    return {
        ...state,
        chats: action.chats
    }
}   