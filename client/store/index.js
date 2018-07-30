import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducer';


const singleReducer = reducer;

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(singleReducer, middleware);
export default store;
export * from './reducer';


/* Simpler alternative */
// import { createStore, applyMiddleware } from 'redux';
// import yourReducer from './yourReducer';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

// const store = createStore(
//   yourReducer,
//   applyMiddleware(
//     thunkMiddleware,
//     createLogger()
//   )
// );

// export default store;
