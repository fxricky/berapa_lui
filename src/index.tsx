import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { BrowserRouter } from 'react-router-dom';
import RootFooter from './components/RootFooter';
import RootHeader from './components/RootHeader';

import RootRouters from './routers';

import './theme/main.scss';

const routes = (
  <Provider store={store}>
    <div className='fullWrapper'>
      <BrowserRouter>
        <RootHeader />
        <div className='contentContainer'>
          <RootRouters />
        </div>
        <RootFooter />
      </BrowserRouter>
    </div>
  </Provider>
);

// render root
const rootApp = ReactDOMClient.createRoot(document.getElementById('app'));
rootApp.render(routes);
