import { delay, put, takeEvery, call } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';
import { fetchCount } from './counterAPI';

// export function* log(action: PayloadAction) {
// }
// generator function
function* test() {
  yield fetchCount(2); //return a promise
  yield call(fetchCount, 2); //return javascript object (affect)
}
function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('waiting for 2s');
  yield delay(2000);
  console.log('waiting done, dispatch action');
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counter saga');
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}

