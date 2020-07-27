import { signInUser, esqueciSenha } from './api';
import { clearCadastro } from '../cadastro';
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logout,
  recoverSuccess,
  recoverFailure,
  recoverRequest,
} from './actions';

export function signIn({ email, password }) {
  return (dispatch) => {
    dispatch(loginRequest());
    return signInUser({ email, password }).then(
      ({ data }) => dispatch(loginSuccess(data)),
      (error) => dispatch(loginFailure(error)),
    );
  };
}

export function signOut() {
  return (dispatch) => {
    dispatch(clearCadastro());
    return dispatch(logout());
  };
}

export function recoverPassword({ email }) {
  return (dispatch) => {
    dispatch(recoverRequest());
    return esqueciSenha({ email }).then(
      ({ data }) => dispatch(recoverSuccess(data)),
      (error) => dispatch(recoverFailure(error)),
    );
  };
}
