import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useOutlet } from 'react-router-dom';
import RootFooter from '../../components/RootFooter';
import RootHeader from '../../components/RootHeader';

type Props = {};

const ProtectedLayout: React.FC<Props> = ({}) => {
  const userAccount = useSelector((state) => {
    console.log('protectedLayout', state);
    return state.auth.account;
  });
  const outlet = useOutlet();

  if (!userAccount) {
    return <Navigate to='/' />;
  }

  return (
    <>
      <RootHeader />
      <div className='contentContainer'>{outlet}</div>
      <RootFooter />
    </>
  );
};

export default ProtectedLayout;
