import React from 'react';
// import icons from 'feather-icons';
import { Circle } from 'react-feather';
import styles from './styles.module.scss';

type Props = {
  focused?: boolean;
  label: string;
  icon: any;
};

const DrawerListItem: React.FC<Props> = ({ icon, label, focused }) => {
  return (
    <div id={styles.container}>
      {icon} <div id={styles.labelTxt}>{label}</div>
    </div>
  );
};

export default DrawerListItem;
