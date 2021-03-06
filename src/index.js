import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import './index.css';
import { store } from './redux-thunk/store/store';



import reportWebVitals from './reportWebVitals';
import { AppRouter } from './router/AppRouter';

ReactDOM.render(
<Provider store={store}>
  <AppRouter/>

</Provider>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
