export const AuthTypes = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
  LOGOUT: 'auth/LOGIN_FAILURE',
  VERIFYTOKEN: 'auth/VERIFYTOKEN',
  RECOVER_REQUEST: 'auth/RECOVER_REQUEST',
  RECOVER_SUCCESS: 'auth/RECOVER_SUCCESS',
  RECOVER_FAILURE: 'auth/RECOVER_FAILURE',
};

export function logout() {
  return {
    type: AuthTypes.LOGOUT,
  };
}

export function loginRequest() {
  return {
    type: AuthTypes.LOGIN_REQUEST,
  };
}

export function loginSuccess({ data: { token, usuario } }) {
  return {
    type: AuthTypes.LOGIN_SUCCESS,
    token: token.token,
    usuario,
  };
}

export function loginFailure(error) {
  const {
    response: {
      data: { message },
    },
  } = error;
  return {
    type: AuthTypes.LOGIN_FAILURE,
    error: message,
  };
}

export function recoverRequest() {
  return {
    type: AuthTypes.RECOVER_REQUEST,
  };
}

export function recoverSuccess() {
  return {
    type: AuthTypes.RECOVER_SUCCESS,
  };
}

export function recoverFailure(error) {
  const {
    response: {
      data: { message },
    },
  } = error;
  return {
    type: AuthTypes.RECOVER_FAILURE,
    error: message,
  };
}
