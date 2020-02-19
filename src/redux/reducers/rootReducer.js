import { combineReducers } from 'redux'

// import personal reducers
import productReducer from './productReducer'
import cartReducer from './cartReducer'

const rootReducer =  combineReducers({
    productReducer,
    cartReducer
})

export default rootReducer