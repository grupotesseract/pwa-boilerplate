import { ActionType } from 'typesafe-actions';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../api';

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { username, password } = payload;
    console.log('payload', payload)

    const { data } = yield call(api.post, 'usuario/login', {
      username,
      password,
    });

    yield put(actions.signInSuccess({ token: data.token }));
  } catch (err) {
    yield put(actions.signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
