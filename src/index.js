import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
import studentState from './components/student'

console.log(studentState)

// //create initial state
// const initialState = {
//   age : 45
// }
// //Create a reducer
// const reducer = (state = initialState, action) => {
//   const newState = {...initialState}
//   if(action.type === 'ADD'){
//     return {age : newState.age += 100}
//   }
//   return state
// }

// //Create a store
// const store = createStore(reducer)

// //Create action
// store.dispatch({type : 'ADD'})

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
