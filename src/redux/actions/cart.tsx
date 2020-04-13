import {
  AddCountry,
  RemoveCountry,
  Country,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  ToggleDrawer,
  TOGGLE_DRAWER,
  SEND_TO_STORE,
} from '../../type';

export function addCountryToCart(country: Country): AddCountry {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  };
}

export function removeCountryFromCart(country: Country): RemoveCountry {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  };
}

export function toggleDrawerAction(isOpen: boolean): ToggleDrawer {
  return {
    type: TOGGLE_DRAWER,
    payload: {
      isOpen,
    },
  };
}

export function sendLocalStorageToStore(countries: Country[]) {
  return {
    type: SEND_TO_STORE,
    payload: {
      countries,
    },
  };
}
