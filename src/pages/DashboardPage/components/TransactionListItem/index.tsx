import React from 'react';
import { Transaction } from '../../../../type';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  data: Transaction;
};

const TransactionListItem: React.FC<Props> = ({ data, ...props }) => {
  const { description: name, amount } = data;

  return (
    <div {...props}>
      {name}
      {amount}
    </div>
  );
};

export default TransactionListItem;
