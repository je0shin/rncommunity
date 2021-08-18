import { combineReducers } from "redux"
import { user } from './user'
import { chats } from "./chats";

const Reducers = combineReducers({
    userState: user,
    chatsState: chats
})

export default Reducers;