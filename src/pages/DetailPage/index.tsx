import { createSelector } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
} from '../../redux/transaction';

type Props = {};

const selectTrnDetail = createSelector(
  [(state: any) => state.transaction, (_, trnId) => trnId],
  (_, trnId) => _.transactions.find((t) => t.id === trnId)
);

const DetailPage: React.FC<Props> = ({ ...props }) => {
  const DEFAULT_FORM_DATA = {
    id: undefined,
    description: '',
    amount: 0,
    createdDate: Date.now(),
  };

  const [formData, updateFormData] = React.useState(DEFAULT_FORM_DATA);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const params = useParams();

  const trnDetail = useSelector((state) => selectTrnDetail(state, params.id));

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
    console.log(event.target.value);

    let newValue = event.target.value;
    if (
      fieldName == 'amount' &&
      (!newValue || !/^\d+(\.\d{0,2})?$/.exec(newValue))
    ) {
      return;
    }

    if (fieldName == 'createdDate') {
      newValue = dayjs(newValue).valueOf();
    }

    updateFormData({ ...formData, [fieldName]: newValue });
  };

  const submitFormHandler: React.FormEventHandler = (event) => {
    event.preventDefault();

    const { id, description, amount } = formData;
    if (!description || !amount) {
      return alert('Please input all the info!');
    }

    console.log(formData);
    if (!id) {
      dispatch(
        addTransaction({
          ...formData,
          id: v4(),
        })
      );
    } else {
      dispatch(
        editTransaction({
          ...formData,
        })
      );
    }
    navigate('/');
  };

  const deleteTrnHandler = () => {
    dispatch(deleteTransaction(params.id));
    navigate('/');
  };

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
        {formData.id && <button onClick={deleteTrnHandler}>Delete</button>}
        <button type={'submit'}>
          {formData.id ? `Save` : 'Add'} Transaction
        </button>
      </div>
    </form>
  );
};

export default DetailPage;
