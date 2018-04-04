import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from '~/store';

// layout
import IndexPage from '~/layouts/index-page';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <IndexPage/>
    </HashRouter>
  </Provider>
  , document.querySelector('.app')
);