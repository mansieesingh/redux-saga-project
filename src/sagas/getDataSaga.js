import { takeLatest, select, call, put } from 'redux-saga/effects';
import API from '../apis/getDataAPI';
import { dataReceived } from '../actionTypes';
// worker
function* getDataTriger() {
    try {
        let apiParams = yield select((state) => state)
        let apiObj = yield new API();
        let apiData = yield call(apiObj.getDataAPI, apiParams)
        console.log("INFO: ", { apiData })

        // create and yield a dispatch Effect
        yield put(dataReceived(apiData))

        // call creates a plain object describing the function call
        // {
        //     CALL: {
        //         fn: Api.fetch,
        //             args: ['./products']
        //     }
        // }
    } catch {

    }
}

// whatcher
export function* watchGetData() {
    yield takeLatest('GET_DATA', getDataTriger)
}