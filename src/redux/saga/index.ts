import { all } from 'redux-saga/effects';

import CountrySagas from './country';
import uiSagas from './ui';

export default function* rootSaga() {
  yield all([
    ...CountrySagas,
    ...uiSagas,
  ]);
}