import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { Robots } from './Robots';

ReactDOM.render(
  <CardList Robots = {Robots}/>
  , document.getElementById('root'));
serviceWorker.unregister();
