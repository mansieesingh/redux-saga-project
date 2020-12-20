import { all } from 'redux-saga/effects';
import { watchGetData } from './getDataSaga';

export default function* rootSaga() {
    yield all([
        watchGetData()
    ])
}