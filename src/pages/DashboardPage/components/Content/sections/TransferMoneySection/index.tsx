import React, { useState } from 'react';
import AddRecipientBtn from './components/AddRecipientBtn';
import AmountInput from './components/AmountInput';
import PhotoThumbnail from './components/PhotoThumbnail';
import styles from './styles.module.scss';

type Props = {};

const TransferMoneySection: React.FC<Props> = ({}) => {
  const [recipientList, setRecipientList] = useState([]);
  const [selectedRcp, setSelectedRcp] = useState(0);
  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      console.log('here');
      const result = await fetch('https://randomuser.me/api?results=5');

      const json = await result.json();
      setRecipientList(json.results);
    } catch (error) {}
  };

  const clickHandler = (index: number) => () => {
    setSelectedRcp(index);
  };

  return (
    <div>
      <h3>Transfer Money</h3>
      <div className={'rowy separateRowy ' + styles.contentContainer}>
        {recipientList.map((recipient, index) => {
          return (
            <PhotoThumbnail
              key={recipient.id.value}
              uri={recipient.picture.large}
              isFocused={index == selectedRcp}
              onClick={clickHandler(index)}
            />
          );
        })}
        <AddRecipientBtn />
        <AmountInput />
      </div>
    </div>
  );
};

export default TransferMoneySection;
