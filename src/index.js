import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import AppContainer from './AppContainer';
import connectedRoutes from './connectedRoutes';

const { middleware, enhancer } = connectedRoutes;

const middlewares = applyMiddleware(middleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(enhancer, middlewares));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
