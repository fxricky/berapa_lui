import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { firebaseDbInstance } from '../firebase';
import { Transaction } from '../type';

const COL_TRANSACTION = 'transactions';

export const addTransaction = async (id: string, data: Transaction) => {
  try {
    await setDoc(doc(firebaseDbInstance, COL_TRANSACTION, id), data);
  } catch (error) {
    console.error(error);
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

    const trnObjects: any[] = [];
    snapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      trnObjects.push({ id: doc.id, ...doc.data() });
    });

    return trnObjects;
  } catch (error) {
    console.error(error);
  }
};

export const getTransactionById = async (id: string) => {
  try {
    const result = await getDoc(doc(firebaseDbInstance, COL_TRANSACTION, id));

    return result.data();
  } catch (error) {
    console.error(error);
    return null;
  }
};
