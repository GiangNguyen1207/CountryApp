import { combineReducers } from 'redux'

import productReducer from '../reducers/Country'
import cartReducer from '../reducers/Cart'

const rootReducer = () =>
  combineReducers({
    product: productReducer,
    cart: cartReducer,
  })


export default rootReducer
