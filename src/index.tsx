import 'babel-polyfill'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app/app';

import './styles/main.scss'


ReactDOM.render(
  <App/>,
  document.querySelector('#app')
);