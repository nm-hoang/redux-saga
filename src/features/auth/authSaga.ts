import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayLoad } from './authSlice';

function* handleLogin(payload: LoginPayLoad) {
  try {
    console.log('handle login', payload);
    localStorage.setItem('access_token', '123132');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'hoangnguyen'
      })
    );
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}

function handleLogout() {
  console.log('handle logout');
  localStorage.removeItem('access_token');
}

function* watchLoginFlow() { //Only dispatch logout after isloggedIn = true by using fork(non-blocking call)
  while (true) {
    console.log('watch login');
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
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
