import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

import getUserConfirmation from 'utils/router/getUserConfirmation';

import App from './App';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter getUserConfirmation={getUserConfirmation}>
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
