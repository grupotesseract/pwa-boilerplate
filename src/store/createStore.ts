import {
  createStore,
  applyMiddleware,
  Reducer,
  Middleware,
  compose,
} from 'redux';
import { AuthState, AuthAction } from "./modules/auth/types";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export interface StoreState {
  auth: AuthState;
}

export type StoreAction = AuthAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);
  const composeEnhancers = compose;
    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(persistedReducer, composeEnhancers(enhancer));

  return store;
};
