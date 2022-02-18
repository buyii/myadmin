import {createStore,combineReducers} from 'redux'; 
import userReducer from './reducers/userReducer'

let reducers = combineReducers({        //合并reducer
    userReducer
})

const store = createStore(
    reducers
)

export default store