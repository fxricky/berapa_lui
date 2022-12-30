import { createSelector } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import {
  addTransaction,
  deleteTransaction,
  getTransactionById,
  updateTransaction,
} from '../../dataAccess';
import { Transaction } from '../../type';

type Props = {};

type FormTransaction = Omit<Transaction, 'amount'> & {
  amount: string;
};

const selectTrnDetail = createSelector(
  [(state: any) => state.transaction, (_, trnId) => trnId],
  (_, trnId) => _.transactions.find((t) => t.id === trnId)
);

const DetailPage: React.FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const trnDetail = useSelector((state) => selectTrnDetail(state, params.id));
  const account = useSelector((state) => state.auth.account);

  const DEFAULT_FORM_DATA: FormTransaction = {
    description: '',
    amount: '',
    createdDate: Date.now(),
    createdBy: account?.uid,
  };

  const [formData, updateFormData] =
    React.useState<FormTransaction>(DEFAULT_FORM_DATA);
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.id) {
      getTrn(params?.id);
    }
  }, [params?.id]);

  const getTrn = async (id: string) => {
    try {
      console.log('loading');
      const resp = await getTransactionById(id);

      if (!resp) {
        throw 'invalid_response';
      }

      updateFormData(resp);
      console.log('done loading');
    } catch (error) {
      return navigate('/');
    }
  };

  useEffect(() => {
    console.log('formData changed', formData);
  }, [formData]);

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

    console.log('i came here wtf');

    try {
      const { description, amount } = formData;
      if (!description || !amount) {
        return alert('Please input all the info!');
      }

      if (!/^\d+(\.\d{0,2})?$/.exec(amount + '')) {
        return alert('Please input a valid amount');
      }

      const data: Transaction = {
        ...formData,
        amount: +formData.amount,
        createdBy: account?.uid,
        createdDate: Date.now(),
      };

      if (params.id) {
        await updateTransaction(params.id, data);
      } else {
        await addTransaction(v4(), data);
      }

      navigate('/dashboard', {
        replace: true,
      });
    } catch (error) {
      alert(error);
    }
  };

  const deleteTrnHandler = async () => {
    if (await deleteTransaction(params?.id)) {
      return navigate('/');
    }

    alert('delete transaction failed');
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
        {params.id && (
          <button type={'button'} onClick={deleteTrnHandler}>
            Delete
          </button>
        )}
        <button type={'submit'}>
          {params.id ? `Save` : 'Add'} Transaction
        </button>
      </div>
    </form>
  );
};

export default DetailPage;
