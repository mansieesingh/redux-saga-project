import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getData, incCount } from './actionTypes';

function App() {
  const dispatch = useDispatch()
  const { getDataReducer, updateCount } = useSelector((st) => st)
  console.log(getDataReducer)
  const getDataHandler = () => {
    dispatch(getData())
    dispatch(incCount())
  }

  return (
    <div className="App">
      <button onClick={getDataHandler}>Click here ...</button>
      <div>{JSON.stringify(!!getDataReducer && getDataReducer.apiData && getDataReducer.apiData.title)}</div>
      <div>{updateCount.count}</div>
    </div>
  );
}

export default App;
