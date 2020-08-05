import { createStore, combineReducers, applyMiddleware, compose } from "redux"

import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './rootReducer';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware();
// const routeMiddleware = routerMiddleware(history);
// const middlewares = [thunk, sagaMiddleware, routeMiddleware];
const middlewares = [thunk, sagaMiddleware];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;


const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)

  // other store enhancers if any
); 
const store = createStore(
  // combineReducers(reducer)
  combineReducers({
    ...reducer,
    router: routerReducer,
  }),
  enhancer
);

sagaMiddleware.run(rootSaga);
export default store;
