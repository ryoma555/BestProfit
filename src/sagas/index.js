import { put, delay, takeLatest, all } from 'redux-saga/effects';
import { DATA_LOADED, LOAD_DATA } from '../constants/action-type';
import { mockData } from '../mockData.js';

function* fetchNews() {
    yield delay(1000);
    yield put({ type: DATA_LOADED, payload: mockData });

}

function* actionWatcher() {
    yield takeLatest(LOAD_DATA, fetchNews)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}