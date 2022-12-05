import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import HelpPage from './pages/HelpPage';
import HomePage from './pages/HomePage';
import MeProfilePage from './pages/MeProfilePage';

type Props = {};

const RootRouters: React.FC<Props> = ({}) => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/detail'>
        <Route index element={<DetailPage />} />
        <Route path=':id' element={<DetailPage />} />
      </Route>
      <Route path='/profile' element={<MeProfilePage />} />
      <Route path='/help' element={<HelpPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default RootRouters;
