// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
// import auth from './auth';


// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['auth'],
// };

// const persistedReducer = persistReducer(persistConfig, reducers);


// export const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk)),
// );
// export const persistor = persistStore(store);

import createStore from './createStore';
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer, []);

const persistor = {};

export { store, persistor };
