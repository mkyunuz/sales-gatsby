import { all, takeEvery, put, fork } from 'redux-saga/effects';
import actions from '../actions/AuthAction';

export function* requestToken() {
	yield takeEvery(actions.REQUEST_TOKEN, function*(data) {
		console.log(data);
	});
}

export default function* rootSaga() {
	yield all([
		fork(requestToken),
	]);
}