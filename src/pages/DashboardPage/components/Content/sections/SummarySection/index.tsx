import React from 'react';
import SummaryItem from './components/SummaryItem';
import styles from './styles.module.scss';

type Props = {};

const SummarySection: React.FC<Props> = ({}) => {
  return (
    <div className={`rowy ${styles.container}`}>
      <SummaryItem />
      <SummaryItem />
      <SummaryItem />
    </div>
  );
};

export default SummarySection;
