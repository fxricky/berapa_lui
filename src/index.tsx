import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import { AppDispatch, store } from './redux/store';

import { BrowserRouter, useNavigate } from 'react-router-dom';

import { RootRouters } from './routers';
import './firebase';

import './theme/main.scss';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuthInstance } from './firebase';
import { login, logout } from './redux/auth';
import { AnyAction } from '@reduxjs/toolkit';

// const authListener = () => {

// }

const AppRoot = () => {
  const dispatch = useDispatch<AppDispatch>();

  onAuthStateChanged(firebaseAuthInstance, (user) => {
    if (user) {
      return dispatch(login(user.toJSON()));
    }

    dispatch(logout());
  });

  return (
    <div className='fullWrapper'>
      <BrowserRouter>
        <RootRouters />
      </BrowserRouter>
    </div>
  );
};

const WrappedAppRoot = () => {
  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  );
};

// render root
const rootApp = ReactDOMClient.createRoot(document.getElementById('app'));
rootApp.render(<WrappedAppRoot />);
