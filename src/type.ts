export const ADD_COUNTRY = 'ADD_COUNTRY';
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY';
export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const SEND_TO_STORE = 'SEND_TO_STORE'

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
  | SendToStore

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

export type SendToStore = {
  type: typeof SEND_TO_STORE
  payload: {
    countries: Country[]
  }
}