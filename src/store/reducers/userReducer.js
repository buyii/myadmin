import { SET_Expire } from "../Action";

const initState = {
    expire: false
}

const userReducer = (state = initState,action) => {
    switch(action.type){
        case SET_Expire:
            return {
                ...state,
                expire: action.expire
            }
        default:
            return state
    }

}

export default userReducer