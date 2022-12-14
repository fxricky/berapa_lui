import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useOutlet } from 'react-router-dom';
import auth from '../../redux/auth';

type Props = {};

const PublicLayout: React.FC<Props> = ({}) => {
  const outlet = useOutlet();
  const userAccount = useSelector((state) => {
    return state.auth.account;
  });

  console.log(userAccount);

  if (userAccount) {
    return <Navigate to='/dashboard' />;
  }

  return <div>{outlet}</div>;
};

export default PublicLayout;
