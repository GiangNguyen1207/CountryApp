import { select, put, takeLatest } from 'redux-saga/effects';

import { REMOVE_COUNTRY } from '../../type';
import { toggleDrawerAction } from '../actions/cart';

function* hideDrawer() {
  const state = yield select();
  if (state.cart.countryCart.length === 0) {
    yield put(toggleDrawerAction(false));
  }
}

export default [takeLatest(REMOVE_COUNTRY, hideDrawer)];
