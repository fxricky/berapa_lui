import React from 'react';
import { Transaction } from '../../../../type';

type Props = {
  data: Transaction;
};

const TransactionListItem: React.FC<Props> = ({ data }) => {
  const { description: name, amount } = data;

  return (
    <div>
      {name}
      {amount}
    </div>
  );
};

export default TransactionListItem;
