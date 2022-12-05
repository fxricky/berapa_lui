import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const ErrorPage: React.FC<Props> = ({}) => {
  return (
    <div>
      <div>404! Page not valid!</div>
      <div>
        Goto <Link to={'/'}>HomePage</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
