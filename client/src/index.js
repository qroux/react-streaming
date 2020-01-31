import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// file import
import reducers from './reducers';

// Components import
import App from './components/App';

// Creating redux store
const store = createStore(reducers);

// mounting app to root
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
