import React from 'react';
import GraphSection from './sections/GraphSection';
import SummarySection from './sections/SummarySection';
import TransferMoneySection from './sections/TransferMoneySection';
import styles from './styles.module.scss';

type Props = {};

const DashboardContent: React.FC<Props> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 style={{ fontSize: 48, fontWeight: 700 }}>Expenses</h2>
        <SummarySection />
        <GraphSection />
        <TransferMoneySection />
      </div>
    </div>
  );
};

export default DashboardContent;
