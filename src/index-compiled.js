'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Todo = require('./components/todos/Todo');

var _Todo2 = _interopRequireDefault(_Todo);

var _reducers = require('./reducers/todo/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'core-js/fn/object/assign';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/Main';
//
// // Render the main component into the dom
// const render = () => {
//   ReactDOM.render(<App />, document.getElementById('app'));
// }
// render();


// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import APP from './components/App'
// import CounterReducer from './reducers/Counter'
//
//
// const ele = document.getElementById('app');
// const store = createStore(CounterReducer);
//
// const render = () => {
//   ReactDOM.render(
//     <APP
//       value = {store.getState()}
//       OnIncrement = {() => {store.dispatch({ type: 'increment' })}}
//       OnDecrement = {() => {store.dispatch({ type: 'decrement' })}}
//     />,
//     ele
//   )
// }
//
// render();
// store.subscribe(render);


// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import counterReducer from './reducers/Counter2.js'
// import App from './components/App2.js'
//
// const ele = document.getElementById('app');
// const store = createStore(counterReducer);
//
// const render = () => {
//   ReactDOM.render(
//     <App
//       value = { store.getState() }
//       onIncrement = { () => {store.dispatch( {type: 'increment'} )} }
//       onDecrement = { () => {store.dispatch( {type: 'decrement'} )} }
//     />,
//     ele
//   )
// }
//
// render();
// store.subscribe(render);

require('./styles/todo.less');

var ele = document.getElementById('app');
var store = (0, _redux.createStore)(_reducers2.default);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_Todo2.default, null)
), ele);

//# sourceMappingURL=index-compiled.js.map