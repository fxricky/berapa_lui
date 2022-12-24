import React from 'react';
import { Outlet } from 'react-router-dom';
import RootFooter from '../../components/RootFooter';
import RootHeader from '../../components/RootHeader';

type Props = {};

const DefaultLayout: React.FC<Props> = ({}) => {
  return (
    <>
      <RootHeader />
      <div className='contentContainer'>
        <Outlet />
      </div>
      <RootFooter />
    </>
  );
};

export default DefaultLayout;
