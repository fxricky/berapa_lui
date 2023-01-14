import React from 'react';
import { Plus } from 'react-feather';
import styles from '../PhotoThumbnail/styles.module.scss';

type Props = {};

const AddRecipientBtn: React.FC<Props> = ({}) => {
  return (
    <div className={styles.btn}>
      <Plus />
    </div>
  );
};

export default AddRecipientBtn;
