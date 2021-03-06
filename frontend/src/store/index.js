import { createStore, combineReducers, applyMiddleware, compose, subscribe } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import company from './company'
import externallink from './externallinks'

const rootReducer = combineReducers({
  session,
  company,
  externallink
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

export default configureStore;
