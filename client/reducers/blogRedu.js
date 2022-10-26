import { SHOW_POST, ADD_POST, DEL_POST } from "../actions/blogAction";

const initalstate = []
function blogRedu(state = initalstate, action) {
const {type, payload} = action
switch (type) {
    case SHOW_POST:
        return payload
    case ADD_POST:
        return [...state, payload]
    case DEL_POST:
        return state.filter((post) => post.id !== payload)
    default:
        return state
}
}

export default blogRedu