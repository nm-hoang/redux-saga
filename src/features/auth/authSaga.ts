import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayLoad } from './authSlice';

function* handleLogin(payload: LoginPayLoad) {
  yield delay(1000);
  try {
    console.log('handle login', payload);
    localStorage.setItem('access_token', '123132');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'hoangnguyen'
      })
    );
    yield put(push('/admin'));
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout() {
  yield delay(1000);
  console.log('handle logout');
  localStorage.removeItem('access_token');
  yield put(push('/login'));
}

function* watchLoginFlow() { //Only dispatch logout after isloggedIn = true by using fork(non-blocking call)
  while (true) {
    console.log('watch login');
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      yield delay(1000);
      const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
