import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, NavLinkProps } from 'react-router-dom';
import { firebaseAuthInstance } from '../../firebase';
import { logout } from '../../redux/auth';
import { AppDispatch } from '../../redux/store';
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
  const dispatch = useDispatch<AppDispatch>();

  const onLogoutClick = async () => {
    // await signOut(firebaseAuthInstance);
    dispatch(logout());
  };

  return (
    <div>
      <h1>
        <Link id='headerTxt' to='/'>
          Berapa Lui
        </Link>
      </h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <OverNavLink to='/'>Home</OverNavLink>
          <OverNavLink to='/help'>Help</OverNavLink>
          <OverNavLink to='/profile'>Profile</OverNavLink>
        </div>
        <button onClick={onLogoutClick}>Log out</button>
      </div>
    </div>
  );
};

export default RootHeader;
