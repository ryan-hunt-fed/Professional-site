import { SHOW_POST } from "../actions/blogAction";

const initalstate = []
function blogRedu(state = initalstate, action) {
const {type, payload} = action
switch (type) {
    case SHOW_POST:
        return payload

    default:
        return state
}
}

export default blogRedu