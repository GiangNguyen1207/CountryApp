import {
  CartState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  TOGGLE_DRAWER,
  SEND_TO_STORE,
} from '../../type';

const cartInitialState: CartState = {
  countryCart: [],
  isOpen: false,
};

const cartReducer = (
  state = cartInitialState,
  action: CountryActions
): CartState => {
  switch (action.type) {
  case ADD_COUNTRY: {
    const countryToAdd = action.payload.country;
    const addedCountry = state.countryCart.find(
      (item) => item.name === countryToAdd.name
    );
    if (addedCountry) {
      return {
        ...state,
      };
    } else {
      return {
        ...state,
        countryCart: [...state.countryCart, countryToAdd],
      };
    }
  }

  case REMOVE_COUNTRY: {
    const countryToRemove = action.payload.country;
    return {
      ...state,
      countryCart: state.countryCart.filter(
        (item) => item.name !== countryToRemove.name
      ),
    };
  }

  case TOGGLE_DRAWER: {
    const toggleDrawer = action.payload.isOpen;
    return {
      ...state,
      isOpen: toggleDrawer,
    };
  }
  case SEND_TO_STORE:
    return {
      ...state,
      countryCart: action.payload.countries,
    };
  default:
    return state;
  }
};

export default cartReducer;
