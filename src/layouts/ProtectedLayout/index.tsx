import React from 'react';
import { useSelector } from 'react-redux';
import {
  Navigate,
  redirect,
  useLocation,
  useOutlet,
  useRoutes,
} from 'react-router-dom';
import RootFooter from '../../components/RootFooter';
import RootHeader from '../../components/RootHeader';

type Props = {};

const ProtectedLayout: React.FC<Props> = ({}) => {
  const userAccount = useSelector((state) => {
    console.log('protectedLayout', state);
    return state.auth.account;
  });
  const outlet = useOutlet();
  const location = useLocation();

  console.log(location);

  if (!userAccount) {
    // return <Navigate to='/' replace />;
  }

  if (location) {
    // redirect(location.pathname);
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
