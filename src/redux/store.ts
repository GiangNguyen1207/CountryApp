import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from '../redux/reducers/index';
import rootSaga from '../redux/saga';
import { AppState } from '../type';

const initState: AppState = {
  product: {
    countries: [],
    error: '',
  },
  cart: {
    countryCart: [],
    isOpen: false
  },
};

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, thunk];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}