import { combineReducers } from 'redux'
import auth from './auth'

const rootReducer = combineReducers({
    water: () => "Redux water",
    auth
})

export default rootReducer
