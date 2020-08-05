import { all } from 'redux-saga/effects';

import appSaga from './sagas/AppSaga';
import authSaga from './sagas/AuthSaga';
export default function* rootSaga(getState) {
  yield all([
    appSaga(),
    authSaga(),
  ]);
}
