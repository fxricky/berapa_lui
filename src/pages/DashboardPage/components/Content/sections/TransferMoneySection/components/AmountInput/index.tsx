import React from 'react';
import styles from './styles.module.scss';

type Props = {};

const AmountInput: React.FC<Props> = ({}) => {
  return (
    <div className='rowy'>
      <div className={'columny ' + styles.amountContainer}>
        <div>Amount</div>
        <input placeholder={'$200'} />
      </div>
      <div className={styles.sendBtn}>Send</div>
    </div>
  );
};

export default AmountInput;
