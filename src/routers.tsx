import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import HelpPage from './pages/HelpPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import MeProfilePage from './pages/MeProfilePage';
import HomePage from './pages/HomePage';
import ProtectedLayout from './routes/ProtectedLayout';
import PublicLayout from './routes/PublicLayout';

type Props = {};

export const RootRouters: React.FC<Props> = ({}) => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        {/* <Route path='/help' element={<HelpPage />} /> */}
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/detail'>
          <Route index element={<DetailPage />} />
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
