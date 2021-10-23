import { delay, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
// }
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

