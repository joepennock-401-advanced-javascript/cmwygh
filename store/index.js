import { createStore, combineReducers } from 'redux';

// import all reducers here

const reducers = combineReducers({
  // add imported reducers here as key:value pairs
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;