import { all } from 'redux-saga/effects';
import couterSaga from 'features/counter/counterSaga';

function* helloSaga() {
  console.log('hello saga');
}

export default function* rootSaga() {
  console.log('root saga');
  yield all([helloSaga(), couterSaga()]);
}
