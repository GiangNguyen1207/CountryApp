import { select, takeLatest } from 'redux-saga/effects'

import { AddCountry, ADD_COUNTRY, REMOVE_COUNTRY } from '../../type';

function* saveState(action: AddCountry) {
    const state = yield select()
    yield localStorage.setItem('Countries', JSON.stringify(state.product))
    yield localStorage.setItem('cart', JSON.stringify(state.cart))
  }

export default [takeLatest([ADD_COUNTRY, REMOVE_COUNTRY], saveState)]