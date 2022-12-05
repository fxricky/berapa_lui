import React from 'react';
import { Link, NavLink, NavLinkProps } from 'react-router-dom';
import './styles.scss';

type Props = {};

const OverNavLink = ({ style, ...props }: NavLinkProps) => {
  return (
    <NavLink
      {...props}
      style={({ isActive }) => {
        return isActive
          ? { ...style, backgroundColor: 'greenyellow' }
          : { ...style };
      }}
    />
  );
};

const RootHeader: React.FC<Props> = ({}) => {
  return (
    <div>
      <h1>
        <Link id='headerTxt' to='/'>
          Berapa Lui
        </Link>
      </h1>

      <OverNavLink to='/'>Home</OverNavLink>
      <OverNavLink to='/help'>Help</OverNavLink>
      <OverNavLink to='/profile'>Profile</OverNavLink>
    </div>
  );
};

export default RootHeader;
