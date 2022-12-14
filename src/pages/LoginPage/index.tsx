import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { firebaseAuthInstance, googleAuthProvider } from '../../firebase';

type Props = {};

const LoginPage: React.FC<Props> = ({}) => {
  const onLoginClick = async () => {
    try {
      const result = await signInWithPopup(
        firebaseAuthInstance,
        googleAuthProvider
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={onLoginClick}>Login</button>
    </div>
  );
};

export default LoginPage;
