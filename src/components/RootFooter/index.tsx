import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const RootFooter: React.FC<Props> = ({}) => {
  return (
    <footer>
      This is footer. Go to <Link to='/help'>Help</Link>
    </footer>
  );
};

export default RootFooter;
