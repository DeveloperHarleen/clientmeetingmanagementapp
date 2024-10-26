import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Make sure this file exists and is correctly exporting the store
import App from './App';
import './index.css'; // Ensure that this file exists and the path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') // This looks fine, nothing wrong here
);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') // This looks fine, nothing wrong here
);
