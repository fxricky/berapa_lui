import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { firebaseDbInstance } from '../firebase';
import { Transaction } from '../type';

const COL_TRANSACTION = 'transaction';

export const addTransaction = async (id: string, data: Transaction) => {
  try {
    await setDoc(doc(firebaseDbInstance, COL_TRANSACTION, id), data);
  } catch (error) {
    throw error;
  }
};

export const updateTransaction = async (id: string, data: Transaction) => {
  try {
    await updateDoc(doc(firebaseDbInstance, COL_TRANSACTION, id), data);
  } catch (error) {
    throw error;
  }
};

export const getAllTransactions = async () => {
  try {
    const snapshot = await getDocs(
      collection(firebaseDbInstance, COL_TRANSACTION)
    );

    snapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  } catch (error) {
    console.error(error);
  }
};
