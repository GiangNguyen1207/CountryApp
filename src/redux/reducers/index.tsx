import { combineReducers } from 'redux';

import productReducer from './country';
import cartReducer from './cart';

const rootReducer = () =>
  combineReducers({
    product: productReducer,
    cart: cartReducer,
  });

export default rootReducer;
