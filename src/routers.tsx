import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import HelpPage from './pages/HelpPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import MeProfilePage from './pages/MeProfilePage';
import HomePage from './pages/HomePage';
import ProtectedLayout from './layouts/ProtectedLayout';
import PublicLayout from './layouts/PublicLayout';
import DefaultLayout from './layouts/DefaultLayout';

type Props = {};

export const RootRouters: React.FC<Props> = ({}) => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        {/* <Route path='/help' element={<HelpPage />} /> */}
      </Route>
      {/* <Route element={<ProtectedLayout />}> */}
      <Route element={<DefaultLayout />}>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/detail' element={<DetailPage />}>
          <Route path=':id' element={<DetailPage />} />
        </Route>
        <Route path='/profile' element={<MeProfilePage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
      {/* <Route path='/help' element={<HelpPage />} /> */}
    </Routes>
  );
};
