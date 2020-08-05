import { all, takeEvery, put, fork } from 'redux-saga/effects';
import actions from '../actions/AppAction';

export function* changeNav() {
	yield takeEvery(actions.CHANGE_NAV, function*(data) {
		// console.log("Saga change nav")
		// console.log(data.payload);
		yield put({
			type : actions.CHANGE_NAV_DONE,
			payload : data.payload
		})
	});
}

export default function* rootSaga() {
	yield all([
		fork(changeNav),
	]);
}