import { doc, setDoc } from 'firebase/firestore';
import { firebaseDbInstance } from '../firebase';
import { User } from '../type';

const DOC_USERS = 'users';

export const addOrUpdateUser = async ({
  id,
  data,
}: {
  id?: string;
  data: User;
}) => {
  try {
    await setDoc(doc(firebaseDbInstance, DOC_USERS, id), data, {
      merge: true,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
