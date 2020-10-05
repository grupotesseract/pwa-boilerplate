import { AuthState, AuthAction } from "./types";

const initialState = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
};

export default function auth(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };
    default:
      return state;
  }
}
