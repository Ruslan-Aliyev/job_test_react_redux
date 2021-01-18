import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import {Provider} from "react-redux";
import {App} from './App';
import 'bootstrap';
import 'jquery';
import '../scss/app.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
