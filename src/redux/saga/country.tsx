import { select, takeLatest } from 'redux-saga/effects'

import { 
  FETCH_DATA_SUCCESS, 
  FetchDataActions, 
  AddCountry, 
  ADD_COUNTRY,
  RemoveCountry, 
  REMOVE_COUNTRY
} from '../../type';

function* saveStateWhenAddingCountry(action: AddCountry) {
    const state = yield select()
    console.log('saga', state.cart)
    yield localStorage.setItem('cart', JSON.stringify(state.cart))
  }

function* saveStateWhenFetchingData(action: FetchDataActions) {
    const state = yield select()
    yield localStorage.setItem('Countries', JSON.stringify(state.product.countries))
  }

function* saveStateWhenRemovingCountry(action: RemoveCountry) {
    const state = yield select()
    yield localStorage.setItem('cart', JSON.stringify(state.cart))
  }

export default [
  takeLatest(ADD_COUNTRY, saveStateWhenAddingCountry), 
  takeLatest(REMOVE_COUNTRY, saveStateWhenRemovingCountry), 
  takeLatest(FETCH_DATA_SUCCESS, saveStateWhenFetchingData)
]