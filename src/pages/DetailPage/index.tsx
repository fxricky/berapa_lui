import { createSelector } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import {
  addTransaction,
  getTransactionById,
  updateTransaction,
} from '../../dataAccess';
import { Transaction } from '../../type';

type Props = {};

const selectTrnDetail = createSelector(
  [(state: any) => state.transaction, (_, trnId) => trnId],
  (_, trnId) => _.transactions.find((t) => t.id === trnId)
);

const DetailPage: React.FC<Props> = ({ ...props }) => {
  const DEFAULT_FORM_DATA: Transaction = {
    description: '',
    amount: 0,
    createdDate: Date.now(),
    createdBy: '',
  };

  const [formData, updateFormData] =
    React.useState<Transaction>(DEFAULT_FORM_DATA);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const params = useParams();

  const trnDetail = useSelector((state) => selectTrnDetail(state, params.id));
  const account = useSelector((state) => state.auth.account);

  useEffect(() => {
    try {
      if (params?.id) {
        (async () => {
          console.log('loading');
          const resp = await getTransactionById(params.id);

          console.log(resp);
          updateFormData(resp);
          console.log('done loading');
        })();
      }
    } catch (error) {}
  }, [params?.id]);

  useEffect(() => {
    if (trnDetail) {
      return updateFormData(trnDetail);
    }
  }, [trnDetail]);

  const submitTransaction = () => {
    console.log('here');
    // dispatch(addTransaction({ id: v4(), createdDate: Date.now() }));
  };

  const onValueChanged = (fieldName: string) => (event: any) => {
    console.log('eventVal', event.target.value);

    let newValue = event.target.value;
    // if (fieldName == 'amount' && !/^(\s*|\d+(\.\d)*)$/.exec(newValue)) {
    //   console.log('blocked');
    //   return;
    // }

    if (fieldName == 'createdDate') {
      newValue = dayjs(newValue).unix();
    }

    updateFormData({ ...formData, [fieldName]: newValue });
  };

  const submitFormHandler: React.FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const { description, amount } = formData;
      if (!description || !amount) {
        return alert('Please input all the info!');
      }

      if (!/^\d+(\.\d{0,2})?$/.exec(amount + '')) {
        return alert('Please input a valid amount');
      }

      console.log(formData);
      if (params.id) {
        await updateTransaction(params.id, {
          ...formData,
        });
      } else {
        await addTransaction(v4(), {
          ...formData,
        });
      }

      navigate('/dashboard', {
        replace: true,
      });
    } catch (error) {
      alert(error);
    }
  };

  const deleteTrnHandler = () => {
    // dispatch(deleteTransaction(params.id));
    navigate('/');
  };

  console.log(account);

  return (
    <form onSubmit={submitFormHandler}>
      <input
        type={'date'}
        onChange={onValueChanged('createdDate')}
        value={dayjs(formData.createdDate).format('YYYY-MM-DD')}
      />
      <div>
        Name:{' '}
        <input
          type={'text'}
          value={formData.description}
          onChange={onValueChanged('description')}
          required
        />
      </div>
      <div>
        Amount:{' '}
        <input
          type={'number'}
          value={formData.amount}
          onChange={onValueChanged('amount')}
          required
        />
      </div>
      <div>
        {params.id && <button onClick={deleteTrnHandler}>Delete</button>}
        <button type={'submit'}>
          {params.id ? `Save` : 'Add'} Transaction
        </button>
      </div>
    </form>
  );
};

export default DetailPage;
