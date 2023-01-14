import React from 'react';
import styles from './styles.module.scss';

type Props = {
  label: string;
};

const LeafyBtn: React.FC<Props> = ({ label }) => {
  return <div className={styles.container}>{label}</div>;
};

export default LeafyBtn;
