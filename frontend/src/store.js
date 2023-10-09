import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  {}, // Initial state
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
