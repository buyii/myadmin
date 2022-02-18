import { SET_NAV_TO } from "../Action";



const initState = {
    path: ''
}

const userReducer = (state = initState,action) => {
    switch(action.type){
        case SET_NAV_TO:
            return {
                ...state,
                path: action.path
            }
        default:
            return state
    }

}

export default userReducer