import { Dispatch } from 'redux';

import {
  Country,
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FetchDataBegin,
  FetchDataSuccess,
  FetchDataFailure,
} from '../../type';

export function fetchCountryBegin(): FetchDataBegin {
  return {
    type: FETCH_DATA_BEGIN,
  };
}

export function fetchCountrySuccess(
  fetchCountries: Country[]
): FetchDataSuccess {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      fetchCountries,
    },
  };
}

export function fetchCountryFailure(error: string): FetchDataFailure {
  return {
    type: FETCH_DATA_FAILURE,
    payload: {
      error,
    },
  };
}

export default function fetchCountry() {
  return (dispatch: Dispatch) => {
    dispatch(fetchCountryBegin());
    return fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => {
        return dispatch(fetchCountrySuccess(data));
      })
      .catch((error) => fetchCountryFailure(error));
  };
}
