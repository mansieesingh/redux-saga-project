import { combineReducers } from 'redux'
import updateCount from './updateCount';
import updateName from './updateName';
import getDataReducer from './getDataReducer';

export default combineReducers({
    updateCount,
    updateName,
    getDataReducer
})