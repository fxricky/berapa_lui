import React from 'react';
import { BarChart, Bar, YAxis, ResponsiveContainer } from 'recharts';
import LeafyBtn from '../../../../../../components/LeafyBtn';

import styles from './styles.module.scss';

type Props = {};

const BAR_DATA = [
  { a: Math.random() * 20 },
  { a: Math.random() * 20 },
  { a: Math.random() * 20 },
  { a: Math.random() * 20 },
  { a: Math.random() * 20 },
  { a: Math.random() * 20 },
  { a: Math.random() * 20 },
  { a: Math.random() * 20 },
  { a: Math.random() * 20 },
  { a: Math.random() * 20 },
];

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const GraphSection: React.FC<Props> = ({}) => {
  return (
    <div>
      <h3>Statistics</h3>
      <ResponsiveContainer width={'100%'} height={300}>
        <BarChart
          data={BAR_DATA}
          barCategoryGap={'12%'}
          margin={{ top: 5, bottom: 5 }}
        >
          <YAxis />
          <Bar
            dataKey={'a'}
            stackId={1}
            fill={'#3241d4'}
            radius={[4, 4, 0, 0]}
          />
          <Bar dataKey={'b'} stackId={1} />
        </BarChart>
      </ResponsiveContainer>
      <div className={`rowy ${styles.rowContainer}`}>
        {DAYS.map((day) => {
          return <LeafyBtn label={day} />;
        })}
      </div>
    </div>
  );
};

export default GraphSection;
