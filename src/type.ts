export const ADD_COUNTRY = 'AddCountry';
export const REMOVE_COUNTRY = 'RemoveCountry';
export const FETCH_DATA_BEGIN = 'FetchDataBegin';
export const FETCH_DATA_SUCCESS = 'FetchDataSuccess';
export const FETCH_DATA_FAILURE = 'FetchDataFailure';
export const TOGGLE_DRAWER = 'ToggleDrawer';

export type Language = {
  name: string
}

export type Country = {
  flag: string,
  name: string,
  languages: Language[],
  population: number,
  region: string
}

export type AddCountry = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountry = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type CountryActions =
  | AddCountry
  | RemoveCountry
  | ToggleDrawer

export type FetchDataBegin = {
  type: typeof FETCH_DATA_BEGIN
} 

export type FetchDataSuccess  = {
  type: typeof FETCH_DATA_SUCCESS
  payload: {
    fetchCountries: Country[]
  }
}

export type FetchDataFailure = {
  type: typeof FETCH_DATA_FAILURE
  payload: {
    error: string
  }
}

export type FetchDataActions = 
  | FetchDataBegin 
  | FetchDataSuccess 
  | FetchDataFailure

export type ProductState = {
  countries: Country[],
  error: string,
}

export type CartState = {
  countryCart: Country[],
  quantity: number,
  isOpen: boolean,
} 

export type AppState = {
  product: ProductState,
  cart: CartState
}

export type ToggleDrawer = {
  type: typeof TOGGLE_DRAWER, 
  payload: {
    isOpen: boolean
  }
}

export type Theme = {
  forground: string,
  color: string
}