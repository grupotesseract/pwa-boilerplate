import {
  createStore,
  applyMiddleware,
  Reducer,
  Middleware,
  compose,
} from 'redux';
import { AuthState, AuthAction } from "./modules/auth/types";

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

  return createStore(reducers, composeEnhancers(enhancer));
};
