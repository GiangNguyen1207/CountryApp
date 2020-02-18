import {  
  CartState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  TOGGLE_DRAWER,
} from "../../type";

const cartInitialState: CartState = {
  countryCart: [],
  quantity: 0,
  isOpen: false
}

const cartReducer = (state = cartInitialState, action: CountryActions): CartState => {
  switch(action.type) {
    case ADD_COUNTRY:
      const countryToAdd= action.payload.country
      const addedCountry = state.countryCart.find(item => item.name === countryToAdd.name)
      if(addedCountry) {
        return {
          ...state,
          quantity: state.quantity
        }
      } else {
        return {
          ...state,
          countryCart: [...state.countryCart, countryToAdd],
          quantity: state.quantity + 1
        }
      }

    case REMOVE_COUNTRY:
      const countryToRemove = action.payload.country
    return {
       ...state, 
       countryCart: state.countryCart.filter(item => item.name !== countryToRemove.name),
       quantity: state.quantity - 1
    }
    case TOGGLE_DRAWER: 
      const toggleDrawer = action.payload.isOpen 
    return {
      ...state,
      isOpen: toggleDrawer
    }
    default:
    return state
  }
}

export default cartReducer