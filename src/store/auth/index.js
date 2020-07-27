import Api from '../Api';
import { AuthTypes } from './actions';

const INITIAL_STATE = {
  isLoading: false,
  isSignedIn: false,
  error: null,
  attributes: {
    id: 0,
    nome: '',
    email: '',
  },
  token: null,
  recoverEmailSent: false,
};

export default function auth(state = INITIAL_STATE, action) {
  const { error, token, usuario } = action;
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return {
        ...state,
        isSignedIn: false,
        isLoading: true,
      };
    case AuthTypes.LOGIN_SUCCESS:
      Api.setToken(token);
      return {
        ...state,
        token,
        isSignedIn: true,
        isLoading: false,
        error: null,
        attributes: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
        },
      };
    case AuthTypes.LOGIN_FAILURE:
      return {
        ...INITIAL_STATE,
        isLoading: false,
        error,
      };
    case AuthTypes.LOGOUT:
      return INITIAL_STATE;

    case AuthTypes.RECOVER_REQUEST:
      return {
        ...state,
        isSignedIn: false,
        isLoading: true,
        recoverEmailSent: false,
      };
    case AuthTypes.RECOVER_SUCCESS:
      return {
        ...state,
        isSignedIn: false,
        isLoading: false,
        error: null,
        recoverEmailSent: true,
      };
    case AuthTypes.RECOVER_FAILURE:
      return {
        ...INITIAL_STATE,
        isLoading: false,
        recoverEmailSent: false,
        error,
      };

    default:
      return state;
  }
}
