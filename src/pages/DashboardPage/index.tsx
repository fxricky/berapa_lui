import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { PAGE_NAME } from '../../constants';
import { getAllTransactions } from '../../dataAccess';
import DashboardContent from './components/Content';
import DashboardDrawer from './components/Drawer';
import TransactionListItem from './components/TransactionListItem';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    // getAllTransactions();

    (async () => {
      const result = await getAllTransactions();
      setDisplayList(result);
    })();
  }, []);

  const transactions: any[] = useSelector((reducer: any) => {
    console.log(reducer.transaction);

    return reducer.transaction.transactions;
  });

  const navigateToDetail = (detailId: number) => () => {
    navigate(`/detail/${detailId}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        maxHeight: '100vh',
      }}
    >
      <DashboardDrawer />

      <DashboardContent />
      {/* {displayList.map((t) => {
        console.log(t);
        return (
          <TransactionListItem
            key={`list-${t.id}`}
            onClick={navigateToDetail(t.id)}
            data={t}
          />
        );
      })}
      <NavLink style={{ alignSelf: 'center' }} to={PAGE_NAME.DETAIL_PAGE}>
        Create Expenses
      </NavLink> */}
    </div>
  );
};

export default DashboardPage;
