import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Login from './views/login';
import Register from './views/register';
import Home from './views/home';
import Admin from './views/admin';
import { middleware, getToken, logout } from './utils/token';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

/*axios.interceptors.request.use(async (config) => {
  config.baseURL = 'http://localhost:3000';
  config.headers.Authorization = `Bearer ${eval(getToken())}`;

  return config;
}, (error) => {
  return Promise.reject(error);
});*/

/*axios.interceptors.response.use(response => response, error => {
  if (error.response.status === 403) logout();
  return Promise.reject(error.response);
});*/

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback = "">
      <BrowserRouter>
        <Switch>
          <Route exact path = '/login' component= {Login}></Route>
          <Route path = '/register' component= {Register}></Route>
          <Route path = '/' component = {() => middleware(Admin)}></Route>
          <Route path = '/admin' component = {() => middleware(Admin)}></Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
