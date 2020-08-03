import {
  ProductState,
  FetchDataActions,
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../../type';

const productInitalState: ProductState = {
  countries: [],
  error: '',
};

const productReducer = (
  state = productInitalState,
  action: FetchDataActions
): ProductState => {
  switch (action.type) {
  case FETCH_DATA_BEGIN:
    return {
      ...state,
    };
  case FETCH_DATA_SUCCESS:
    return {
      ...state,
      countries: action.payload.fetchCountries,
    };
  case FETCH_DATA_FAILURE:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default productReducer;
