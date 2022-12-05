import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { PAGE_NAME } from '../../constants';
import TransactionListItem from './components/TransactionListItem';

const HomePage = () => {
  const navigate = useNavigate();
  const transactions: any[] = useSelector((reducer: any) => {
    console.log(reducer.transaction);

    return reducer.transaction.transactions;
  });

  const navigateToDetail = (detailId: number) => () => {
    navigate(`/detail/${detailId}`);
  };

  return (
    <div>
      <h1>HOME PAGE</h1>
      {transactions.map((t) => {
        console.log(t);
        return (
          <div key={`list-${t.id}`} onClick={navigateToDetail(t.id)}>
            <TransactionListItem data={t} />
          </div>
        );
      })}
      <NavLink to={PAGE_NAME.DETAIL_PAGE}>Create Expenses</NavLink>
    </div>
  );
};

export default HomePage;
