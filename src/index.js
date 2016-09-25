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

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Todo from './components/todos/Todo'
import todoApp from './reducers/todo/reducers'

require('./styles/todo.less');

const ele = document.getElementById('app');
const store = createStore(todoApp);

render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  ele
);

