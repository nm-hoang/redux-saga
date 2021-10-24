import authSaga from 'features/auth/authSaga';
import couterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    couterSaga(),
    authSaga()
  ]);
}
