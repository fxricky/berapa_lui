import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

const HomePage: React.FC<Props> = ({}) => {
  return (
    <div>
      <NavLink to={'/login'}>Login</NavLink>
    </div>
  );
};

export default HomePage;
