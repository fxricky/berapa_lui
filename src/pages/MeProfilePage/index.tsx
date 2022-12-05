import React from 'react';
import { useSelector } from 'react-redux';

type Props = {};

const MeProfilePage: React.FC<Props> = ({}) => {
  useSelector((state) => {
    console.log(state.user);
  });

  return <div></div>;
};

export default MeProfilePage;
